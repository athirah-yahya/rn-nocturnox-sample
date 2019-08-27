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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import { createIconSetFromFontello } from "react-native-vector-icons";

// ----------------------------------------
// CUSTOM FONT CONFIG IMPORTS
// ----------------------------------------
// import CustomConfig from "@app-configs/custom-icon-config.json";
// const Custom = createIconSetFromFontello(CustomConfig);

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
import GIcon from "@core-components-generics/Icon";

// ----------------------------------------
// CONSTANTS
// ----------------------------------------
const THEME = Config.theme("Icon");



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

  getIconComponent(mainConfig) {
    switch (mainConfig.type) {
      case "fa5":
      default:
        return (<FontAwesomeIcon/>);
    }
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
    const mainConfig = THEME[this.props.theme ? this.props.theme : "default"];

    return (
      <GIcon
        { ... mainConfig }
        color={ this.props.inverse ? mainConfig.colorInverse : mainConfig.color }
        { ... this.props }
        onPress={ this.props.onPress }
        iconComponent={ this.getIconComponent(mainConfig) }
      />
    );
  }


// ----------------------------------------

}
