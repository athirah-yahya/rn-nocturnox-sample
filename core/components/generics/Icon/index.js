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
  Animated,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Styles from "./style";
import {
  Config,
  Device,
} from "@core-utils";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Icon extends Component {

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

    if (this.props.color) {
      newStyle.color = this.props.color;
    }

    composedStyle.push(newStyle);
    composedStyle.push(this.props.style);

    return composedStyle;
  }


// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const {
      iconComponent,
    } = this.props;

    const newProps = this.props;
    newProps.iconComponent = null;

    if (this.props.animated) {
      const IconComponent = React.cloneElement(iconComponent);

      const AnimatedIcon = Animated.createAnimatedComponent(IconComponent);

      return (
        <AnimatedIcon
          { ... newProps }
          style={ this.getComposedStyle() }
        >
          { this.props.children }
        </AnimatedIcon>
      );
    }

    const IconComponent = React.cloneElement(iconComponent, {
      ... newProps,
      style: this.getComposedStyle(),
    });

    return IconComponent;
  }


// ----------------------------------------

}
