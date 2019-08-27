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
  TouchableOpacity as RClickableCard,
  View as RCard,
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
export default class Card extends Component {

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

    if (this.props.radius) {
      newStyle.borderRadius = this.props.radius;
    }

    if (this.props.color) {
      newStyle.backgroundColor = this.props.color;
    }

    if (this.props.bordered && this.props.borderColor) {
      newStyle.borderColor = this.props.borderColor;
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
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    if (this.props.onPress) {
      return (
        <RClickableCard
          onPress={ this.props.onPress }
        >
          <RCard
            { ... this.props }
            style={ this.getComposedStyle() }
          >
            { this.props.children }
          </RCard>
        </RClickableCard>
      );
    }

    return (
      <RCard
        { ... this.props }
        style={ this.getComposedStyle() }
      >
        { this.props.children }
      </RCard>
    );
  }


// ----------------------------------------

}
