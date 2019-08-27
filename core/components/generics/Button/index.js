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
  TouchableHighlight as RButton,
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
export default class Button extends Component {

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

    if (this.props.radius !== undefined && this.props.radius !== null) {
      newStyle.borderRadius = this.props.radius;
    }

    if (this.props.color) {
      newStyle.backgroundColor = this.props.color;
    }

    if (this.props.bordered) {
      newStyle.borderWidth = 1;
    }

    if (this.props.bordered && this.props.borderColor) {
      newStyle.borderColor = this.props.borderColor;
    }

    if (this.props.hPadding) {
      newStyle.paddingHorizontal = this.props.hPadding;
    }

    if (this.props.height !== undefined && this.props.height !== null) {
      newStyle.height = this.props.height;
    }

    if (this.props.type !== "FULL" && !this.props.full) {
      newStyle.flex = -1;
    }

    composedStyle.push(newStyle);
    composedStyle.push(this.props.style);

    return composedStyle;
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  _renderMain() {
    return (
        <RButton
          { ... this.props }
          style={ this.getComposedStyle() }
          onPress={ this.props.onPress ? this.props.onPress : () => {} }
          underlayColor={ this.props.colorPressed }
        >
          { this.props.children }
        </RButton>
    );
  }

// ----------------------------------------

  render() {
    if (this.props.type !== "FULL" && !this.props.full) {
      return (
        <View style={ Styles.container }>
          { this._renderMain() }
        </View>
      );
    }

    return this._renderMain();
  }


// ----------------------------------------

}
