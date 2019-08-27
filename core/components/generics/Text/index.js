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
  Text as RText,
  Animated,
  TouchableOpacity,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Styles from "./style";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Text extends Component {

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

    if (this.props.size !== undefined && this.props.size !== null) {
      newStyle.fontSize = this.props.size;
    }

    if (this.props.line !== undefined && this.props.line !== null) {
      newStyle.lineHeight = this.props.line;
    }

    if (this.props.spacing !== undefined && this.props.spacing !== null) {
      newStyle.letterSpacing = this.props.spacing;
    }

    if (this.props.align !== undefined && this.props.align !== null) {
      newStyle.textAlign = this.props.align;
    }

    if (this.props.flex !== undefined && this.props.flex !== null) {
      newStyle.flex = this.props.flex;
    }

    if (this.props.color) {
      newStyle.color = this.props.color;
    }

    if (this.props.type === "bold" || this.props.bold) {
      newStyle.fontWeight = "bold";
    }

    if (this.props.type === "light" || this.props.light) {
      newStyle.fontWeight = "300";
    }

    composedStyle.push(newStyle);
    composedStyle.push(this.props.style);

    return composedStyle;
  }

// ----------------------------------------

  getComposedLoadingStyle() {
    const composedStyle = [Styles.loading];
    const newStyle = {};

    if (this.props.loadingWidth !== undefined && this.props.loadingWidth !== null) {
      newStyle.width = this.props.loadingWidth;
    }

    if (this.props.line !== undefined && this.props.line !== null) {
      newStyle.height = this.props.line - 6;
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

  _renderMain() {
    if (this.props.loading) {
      return (
        <View style={ Styles.loadingContainer }>
          <View style={ this.getComposedLoadingStyle() }/>
        </View>
      );
    }

    if (this.props.animated) {
      return (
        <Animated.Text
          { ... this.props }
          onPress={ null }
          style={ this.getComposedStyle() }
        >
          { this.props.children }
        </Animated.Text>
      );
    }

    return (
      <RText
        { ... this.props }
        onPress={ null }
        style={ this.getComposedStyle() }
      >
        { this.props.children }
      </RText>
    );
  }

// ----------------------------------------

  render() {
    if (this.props.onPress && !this.props.loading) {
      return (
        <TouchableOpacity onPress={ this.props.onPress }>
          { this._renderMain() }
        </TouchableOpacity>
      );
    }

    return this._renderMain();
  }


// ----------------------------------------

}
