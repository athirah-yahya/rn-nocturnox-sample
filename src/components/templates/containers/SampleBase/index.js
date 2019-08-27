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

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
} from "@core-utils";
import Styles from "./style";
import {
  COLOR,
} from "./consts";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {
  ScreenBase,
} from "@core-components-bases";
import Header from "@app-components-headers/Sample";
import Footer from "@app-components-footers/Sample";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class SampleBase extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }

    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// METHODS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderHeader(isFloatingHeader = false) {
    const {
      title,
      leftHeaderMode,
      onLeftHeaderPress,
      rightHeaderMode,
      onRightHeaderPress,
      solidHeader,
    } =  this.props;

    if (isFloatingHeader) {
      return null;
    }

    if (!leftHeaderMode && !rightHeaderMode && !title) {
      return null;
    }

    return (
      <Header
        title={ title }
        mode={ solidHeader ? "solid" : null }
        leftMode={ leftHeaderMode }
        onLeftPress={ onLeftHeaderPress }
        rightMode={ rightHeaderMode }
        onRightPress={ onRightHeaderPress }
      />
    );
  }

// ----------------------------------------

  _renderFooter() {
    const {
      hasFooter,
      footerCounter,
      onSwitch,
    } = this.props;

    const counter = footerCounter ? footerCounter : null;

    if (!hasFooter) {
      return null;
    }

    return (
      <Footer
        counter={ counter }
        activeFooter={ this.props.activeFooter }
        onSwitch={ onSwitch }
      />
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <ScreenBase
        headerRender={ this._renderHeader() }
        footerRender={ this._renderFooter() }
        baseColor={ COLOR.black }
        { ... this.props }
      >
        { this.props.children }
      </ScreenBase>
    );
  }

}
