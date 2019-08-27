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
  ButtonFullPrimary,
  ButtonFullSecondary,
  ButtonCompactPrimary,
  ButtonCompactSecondary,
} from "@app-components-core/Button";
import {
  Spacer,
  Padder,
} from "@core-components-enhancers";




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
// RENDERS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Spacer>
        <Spacer top={ 2 } space={ 2 } backgroundColor={ COLOR.black }>
          <Padder>
            <Spacer space={ 2 }>
              <ButtonFullPrimary>Full Primary</ButtonFullPrimary>

              <Spacer space={ 1 }/>

              <ButtonFullPrimary disabled>Full Primary Disabled</ButtonFullPrimary>
            </Spacer>

            <Spacer space={ 2 }>
              <ButtonFullSecondary>Full Secondary</ButtonFullSecondary>

              <Spacer space={ 1 }/>

              <ButtonFullSecondary disabled>Full Secondary Disabled</ButtonFullSecondary>
            </Spacer>

            <Spacer space={ 2 }>
              <ButtonCompactPrimary>Compact Primary</ButtonCompactPrimary>

              <Spacer space={ 1 }/>

              <ButtonCompactPrimary disabled>Compact Primary Disabled</ButtonCompactPrimary>
            </Spacer>

            <Spacer space={ 2 }>
              <ButtonCompactSecondary>Compact Secondary</ButtonCompactSecondary>

              <Spacer space={ 1 }/>

              <ButtonCompactSecondary disabled>Compact Secondary Disabled</ButtonCompactSecondary>
            </Spacer>

          </Padder>
        </Spacer>
      </Spacer>
    );
  }
}
