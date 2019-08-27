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
import GButton from "@core-components-generics/Button";

// ----------------------------------------
// CONSTANTS
// ----------------------------------------
const THEME = Config.theme("Button");




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
// RENDERS
// ----------------------------------------

  getColor(mainConfig) {
    if (this.props.disabled) {
      return mainConfig.colorDisabled;
    }

    return mainConfig.color;
  }


// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderText(mainConfig) {
    const textTheme = mainConfig.textTheme ? mainConfig.textTheme : "ButtonCompact";

    return (
      <TextBM theme={ textTheme } mode={ this.props.disabled ? mainConfig.textDisableMode : mainConfig.textMode }>
        { this.props.children }
      </TextBM>
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const mainConfig = THEME[this.props.theme ? this.props.theme : "default"];

    return (
      <GButton
        { ... mainConfig }
        { ... this.props }
        onPress={ this.props.onPress }
        color={ this.props.color ? this.props.color : this.getColor(mainConfig) }
      >
        { this._renderText(mainConfig) }
      </GButton>
    );
  }


// ----------------------------------------

}
