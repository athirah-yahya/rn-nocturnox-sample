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
import { View } from "react-native";
import {
  View as RWrapper,
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
export default class Wrapper extends Component {

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

    if (this.props.flex !== undefined && this.props.flex !== null) {
      newStyle.flex = this.props.flex;
    }

    if (this.props.absolute) {
      newStyle.flex = -1;
      newStyle.position = "absolute";
    }

    if (this.props.top !== undefined && this.props.top !== null) {
      newStyle.top = this.props.top;
    }

    if (this.props.bottom !== undefined && this.props.bottom !== null) {
      newStyle.bottom = this.props.bottom;
    }

    if (this.props.left !== undefined && this.props.left !== null) {
      newStyle.left = this.props.left;
    }

    if (this.props.right !== undefined && this.props.right !== null) {
      newStyle.right = this.props.right;
    }

    if (this.props.width !== undefined && this.props.width !== null) {
      newStyle.width = this.props.width;
    }

    if (this.props.height !== undefined && this.props.height !== null) {
      newStyle.height = this.props.height;
    }

    if (this.props.radius !== undefined && this.props.radius !== null) {
      newStyle.borderRadius = this.props.radius;
    }

    if (this.props.color) {
      newStyle.backgroundColor = this.props.color;
    }

    if (this.props.bordered && this.props.borderColor) {
      newStyle.borderColor = this.props.borderColor;
    }

    if (this.props.hAlign) {
      newStyle.justifyContent = this.props.hAlign;
    }

    if (this.props.vAlign) {
      newStyle.alignItems = this.props.vAlign;
    }

    if (this.props.hPadding !== undefined && this.props.hPadding !== null) {
      newStyle.paddingHorizontal = this.props.hPadding;
    }

    if (this.props.vPadding !== undefined && this.props.vPadding !== null) {
      newStyle.paddingVertical = this.props.vPadding;
    }

    composedStyle.push(newStyle);
    composedStyle.push(this.props.style);

    return composedStyle;
  }

// ----------------------------------------

  getComposedContainerStyle() {
    const composedStyle = [Styles.container];
    const newStyle = {};

    // if (this.props.flex !== undefined && this.props.flex !== null) {
    //   newStyle.flex = this.props.flex;
    // }

    if (this.props.absolute) {
      newStyle.flex = -1;
      newStyle.position = "absolute";
    }

    if (this.props.top !== undefined && this.props.top !== null) {
      newStyle.top = this.props.top;
    }

    if (this.props.bottom !== undefined && this.props.bottom !== null) {
      newStyle.bottom = this.props.bottom;
    }

    if (this.props.left !== undefined && this.props.left !== null) {
      newStyle.left = this.props.left;
    }

    if (this.props.right !== undefined && this.props.right !== null) {
      newStyle.right = this.props.right;
    }

    composedStyle.push(newStyle);
    // composedStyle.push(this.props.style);

    return composedStyle;
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <View style={ this.getComposedContainerStyle() }>
        <RWrapper
          { ... this.props }
          style={ this.getComposedStyle() }
        >
          { this.props.children }
        </RWrapper>
      </View>
    );
  }


// ----------------------------------------

}
