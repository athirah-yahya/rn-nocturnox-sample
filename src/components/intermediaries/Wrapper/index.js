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
import {
  TextBM,
} from "@app-components-core/Text";
import GWrapper from "@core-components-generics/Wrapper";

// ----------------------------------------
// CONSTANTS
// ----------------------------------------
const THEME = Config.theme("Wrapper");




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
// RENDERS
// ----------------------------------------

  _renderText(mainConfig) {
    if (!mainConfig.textTheme) {
      return this.props.children;
    }

    return (
      <TextBM theme={ mainConfig.textTheme } mode="light">
        { this.props.children }
      </TextBM>
    );
  }


// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  render() {
    const mainConfig = THEME[this.props.theme ? this.props.theme : "default"];

    return (
      <GWrapper
        { ... mainConfig }
        { ... this.props }
        color={ this.props.color ? this.props.color : mainConfig.color }
        width={ this.props.width ? this.props.width : mainConfig.width }
        height={ this.props.height ? this.props.height : mainConfig.height }
        onPress={ this.props.onPress }
      >
        { this._renderText(mainConfig) }
      </GWrapper>
    );
  }


// ----------------------------------------

}
