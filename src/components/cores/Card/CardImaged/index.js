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
import {
  WrapperItemImage,
} from "@app-components-core/Wrapper";
import {
  Spacer,
} from "@core-components-enhancers";
import Card from "@app-components-intermediaries/Card";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class CardImaged extends Component {

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

  _renderImage() {
    const {
      image,
      imageWidth,
      imageHeight,
    } = this.props;

    return (
      <WrapperItemImage
        width={ imageWidth }
        height={ imageHeight }
      >
        { image }
      </WrapperItemImage>
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Card
        theme={ "Base" }
        { ... this.props }
      >
        <Spacer row>
          { this._renderImage() }

          <Spacer horizontal space={ 2 }/>

          <Spacer flex={ 1 } top={ .5 }>
            { this.props.children }
          </Spacer>
        </Spacer>
      </Card>
    );
  }


// ----------------------------------------

}
