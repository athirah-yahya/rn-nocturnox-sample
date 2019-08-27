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

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import Styles from "./style";
import {
  Config,
  Device,
} from "@core-utils";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import GText from "@core-components-generics/Text";

// ----------------------------------------
// CONSTANTS
// ----------------------------------------
const THEME = Config.theme("Text");
const COLOR = Config.theme("Color.TEXT");




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
// RENDERS
// ----------------------------------------

  getColor(mainConfig) {
    switch (this.props.mode) {
      case "light":
        return COLOR.light;

      case "light2":
        return COLOR.light2;

      case "dark2":
        return COLOR.dark2;

      case "dark":
      default:
        return COLOR.dark;
    }
  }

// ----------------------------------------

  getLoadingColor(mainConfig) {
    switch (this.props.mode) {
      case "light":
      case "light2":
        return COLOR.light2;

      case "dark2":
      case "dark":
      default:
        return COLOR.dark2;
    }
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const mainConfig = THEME[this.props.theme ? this.props.theme : "default"];

    return (
      <GText
        { ... mainConfig }
        { ... this.props }
        color={ this.props.color ? this.props.color : this.getColor(mainConfig) }
        loadingColor={ this.props.loadingColor ? this.props.loadingColor : this.getLoadingColor(mainConfig) }
      >
        { this.props.children }
      </GText>
    );
  }


// ----------------------------------------

}
