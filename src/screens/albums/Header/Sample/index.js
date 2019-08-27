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
const COLOR = Config.theme("Color.BASE");

// ----------------------------------------
// COMPONENTS IMPORTS
// ----------------------------------------
import {
  TextH1,
} from "@app-components-core/Text";
import {
  Spacer,
  Padder,
} from "@core-components-enhancers";
import Header from "@app-components-headers/Sample";




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
// RENDERS
// ----------------------------------------

  _renderHeader(mode:string,) {
    return (
      <Header
        mode={ mode }
        title={ "Sample" }
        leftMode="back"
        onLeftPress={ () => alert("Left button Pressed") }
        rightMode="close"
        onRightPress={ () => alert("Right button Pressed") }
      />
    );
  }

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Spacer backgroundColor={ COLOR.black }>
        <Spacer space={ 2 }>
          <Padder>
            <Spacer top={ 1 } space={ 1 }>
              <TextH1 bold mode="light2">Default</TextH1>
            </Spacer>
          </Padder>

          <Spacer top={ 4 } space={ 2 }>
            { this._renderHeader() }
          </Spacer>
        </Spacer>

        <Spacer top={ 1 } space={ 1 }>
          <Padder>
            <Spacer top={ 1 } space={ 1 }>
              <TextH1 bold mode="light2">Size</TextH1>
            </Spacer>
          </Padder>

          <Spacer row>
            <Spacer flex={ 4 }>

              <Spacer top={ 4 } space={ 2 }>
                { this._renderHeader() }
              </Spacer>
            </Spacer>

            <Spacer flex={ 1 }/>
          </Spacer>
        </Spacer>
      </Spacer>
    );
  }
}
