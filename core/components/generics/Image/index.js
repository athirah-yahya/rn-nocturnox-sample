/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// PACKAGE IMPORTS
// ----------------------------------------
import React, { Component } from "react";
import {
  View,
  Image as RImage,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Images from "@app-configs/Images";
import Styles from "./style";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Image extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// MAIN METHODS
// ----------------------------------------

  getComposedStyle() {
    const composedStyle = [Styles.main];
    const newStyle = {};

    composedStyle.push(newStyle);
    composedStyle.push(this.props.style);

    return composedStyle;
  }

// ----------------------------------------

  getSourceLocal(mainConfig) {
    let data = null;
    let base = Images;

    let imageFound = false;
    if (this.props.name) {
      imageFound = true;
      let splitNames = this.props.name.split(".");

      for (let x in splitNames) {
        if (!base[splitNames[x].trim()]) {
          base = null;
          imageFound = false;
          break;
        }

        base = base[splitNames[x].trim()];
      }

      if (imageFound) {
        data = base.image;
      }
    }

    let source = imageFound ? data : null;
    if (!source) {
      source = this.props.default ? this.props.default : null;
    }

    return {
      resizeMode: "contain",
      style: [
        this.getComposedStyle(),
        {
          width: imageFound ? base.width : 0,
          height: imageFound ? base.height : 0,
        },
        this.props.relWidth && imageFound ? {width: this.props.relWidth, height: (this.props.relWidth / base.width) * base.height} : {},
        this.props.relHeight && imageFound ? {height: this.props.relHeight, width: (this.props.relHeight / base.height) * base.width} : {},
        this.props.style,
      ],
      source,
    };
  }

// ----------------------------------------

  getSourceUri(mainConfig) {
    let source = this.props.data ? { uri: this.props.uri } : null;
    if (!source) {
      source = this.props.default ? this.props.default : null;
    }

    return {
      source,
    };
  }

// ----------------------------------------

  getSourceBase64(mainConfig) {
    let source = this.props.data ? { uri: this.props.data } : null;
    if (!source) {
      source = this.props.default ? { uri: this.props.default } : null;
    }

    return {
      source,
    };
  }

// ----------------------------------------

  getComposedLoadingStyle() {
    const composedStyle = [Styles.loading];
    const newStyle = {};

    if (this.props.loadingWidth !== undefined && this.props.loadingWidth !== null) {
      newStyle.width = this.props.loadingWidth;
    }

    if (this.props.loadingHeight !== undefined && this.props.loadingHeight !== null) {
      newStyle.height = this.props.loadingWidth;
    }

    if (this.props.loadingRadius !== undefined && this.props.loadingRadius !== null) {
      newStyle.borderRadius = this.props.loadingRadius;
    }

    if (this.props.loadingOpacity !== undefined && this.props.loadingOpacity !== null) {
      newStyle.opacity = this.props.loadingOpacity;
    }

    if (this.props.loadingColor) {
      newStyle.backgroundColor = this.props.loadingColor;
    }

    composedStyle.push(newStyle);
    composedStyle.push(this.props.loadingStyle);

    return composedStyle;
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    if (this.props.loading) {
      return (
        <View style={ this.getComposedLoadingStyle() }/>
      );
    }

    let setting = {};
    switch (this.props.sourceType) {
      case "URI":
        setting = this.getSourceUri();
        break;

      case "BASE64":
        setting = this.getSourceBase64();
        break;

      case "LOCAL":
      default:
        setting = this.getSourceLocal();
    }

    return (
      <RImage
        resizeMode={ "cover" }
        style={ this.getComposedStyle() }
        { ... this.props }
        { ... setting }
      />
    );
  }


// ----------------------------------------

}
