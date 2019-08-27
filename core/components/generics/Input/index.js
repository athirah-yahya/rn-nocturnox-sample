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
  TextInput as RTextInput,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Styles from "./style";
import {
  Config,
  Device,
} from "@core-utils";

// ----------------------------------------
// CONSTANTS
// ----------------------------------------
const THEME = Config.theme("Input.default");




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Input extends Component {

// ---------------------------------------------------
// ---------------------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ---------------------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props != nextProps) {
      return true;
    }

    return false;
  }

// ---------------------------------------------------

  componentDidMount() {
    if (this.props.cref) {
      this.props.cref(this.ref);
    }
  }


// ----------------------------------------
// ----------------------------------------
// MAIN METHODS
// ----------------------------------------

  getComposedStyle() {
    const composedStyle = [Styles.main];
    const newStyle = {};

    if (this.props.paddingHorizontal) {
      newStyle.paddingHorizontal = this.props.paddingHorizontal;
    }

    if (this.props.paddingVertical) {
      newStyle.paddingVertical = this.props.paddingVertical;
    }

    if (this.props.textColor) {
      newStyle.color = this.props.textColor;
    }

    if (this.props.size) {
      newStyle.fontSize = this.props.size;
    }

    if (this.props.line) {
      newStyle.lineHeight = this.props.line;
    }

    if (this.props.spacing) {
      newStyle.letterSpacing = this.props.spacing;
    }

    composedStyle.push(newStyle);
    composedStyle.push(this.props.style);

    return composedStyle;
  }


// ---------------------------------------------------
// ---------------------------------------------------
// MAIN RENDER
// ---------------------------------------------------

  render() {
    return (
      <RTextInput
        placeholderTextColor={ this.props.placeholderColor ? this.props.placeholderColor : THEME.inactiveColor }
        underlineColorAndroid={ "transparent" }
        { ... this.props }
        style={ this.getComposedStyle() }
        secureTextEntry={ this.props.secured ? this.props.secured : THEME.secured }
        autoCorrect={ this.props.autoCorrect ? this.props.autoCorrect : THEME.autoCorrect }
        autoCapitalize={ this.props.autoCapitalize ? this.props.autoCapitalize : THEME.autoCapitalize }
        keyboardType={ this.props.keyboard ? this.props.keyboard : THEME.keyboard }
        ref={ (r) => this.ref = r }
      />
    )
  }
};