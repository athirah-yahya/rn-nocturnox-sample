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
import React, {Component} from "react";
import {
  View,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
} from "@core-utils";
import Styles from "./style";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Padder extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props != nextProps) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <View style={ [
        Styles.container,
        this.props.style,
        this.props.top ? {paddingTop: Config.base(this.props.top) } : {},
        this.props.right ? {alignItems: "flex-end" } : {},
        this.props.pad ? {paddingHorizontal: Config.base(this.props.pad) } : {},
        this.props.flex ? {flex: this.props.flex} : {},
        this.props.backgroundColor ? {backgroundColor: this.props.backgroundColor} : {},
      ] }>
        { this.props.children }
      </View>
    );
  }


// ----------------------------------------

}
