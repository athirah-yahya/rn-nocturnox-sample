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
  TextBM,
} from "@app-components-core/Text";
import {
  IconFA5,
} from "@app-components-core/Icon";
import {
  Spacer,
  Padder,
} from "@core-components-enhancers";
import {
  HeaderBase,
} from "@core-components-bases";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Sample extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }

    if (this.state !== nextState) {
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

  _renderLeftIcon() {
    const {
      leftMode,
      onLeftPress,
    } = this.props;

    let icon = null;
    switch (leftMode) {
      case "back":
        icon = "arrow-left";
        break;
    }

    let iconRender = null;
    if (icon) {
      iconRender = <IconFA5 name={ icon }/>;
    }

    return (
      <Spacer onPress={ onLeftPress }>
        <Spacer flex={ 1 } vAlign="center" hAlign="center">
          <Padder>
            { iconRender }

            <Spacer horizontal space={ 2 }/>
          </Padder>
        </Spacer>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderRightIcon() {
    const {
      rightMode,
      onRightPress,
    } = this.props;

    let icon = null;
    switch (rightMode) {
      case "close":
        icon = "times";
        break;
    }

    let iconRender = null;
    if (icon) {
      iconRender = <IconFA5 name={ icon }/>;
    }

    return (
      <Spacer onPress={ onRightPress }>
        <Spacer flex={ 1 } vAlign="center" hAlign="center">
          <Padder>
            <Spacer horizontal space={ 2 }/>

            { iconRender }
          </Padder>
        </Spacer>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderTitle() {
    const {
      title,
    } = this.props;

    return (
      <Spacer flex={ 1 } vAlign="center" hAlign="center">
        <TextBM
          mode="light"
        >
          { title }
        </TextBM>
      </Spacer>
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <HeaderBase
        top={ 1.5 }
        bottom={ 1.5 }
        color={ COLOR.gray }
      >
        { this._renderLeftIcon() }

        { this._renderTitle() }

        { this._renderRightIcon() }
      </HeaderBase>
    );
  }

}
