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

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import Icon from "@app-components-intermediaries/Icon";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class IconFA5 extends Component {

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
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Icon
        theme={ "FA5" }
        { ... this.props }
      />
    );
  }


// ----------------------------------------

}