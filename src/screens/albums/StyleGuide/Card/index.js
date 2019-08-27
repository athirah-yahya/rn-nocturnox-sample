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
  TextH2,
} from "@app-components-core/Text";
import {
  CardBase,
  CardIconed,
  CardGlass,
  CardReflected,
} from "@app-components-core/Card";
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
export default class Card extends Component {

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
              <CardBase>
                <TextH2>Card Basic</TextH2>
              </CardBase>
            </Spacer>

            <Spacer space={ 2 }>
              <CardIconed>
                <TextH2>Card with Icon</TextH2>
              </CardIconed>
            </Spacer>

            <Spacer space={ 2 }>
              <CardGlass>
                <TextH2 mode="light">Card Glass</TextH2>
              </CardGlass>
            </Spacer>

            <Spacer space={ 2 }>
              <CardReflected>
                <TextH2 mode="light">Card Reflected</TextH2>
              </CardReflected>
            </Spacer>
          </Padder>
        </Spacer>
      </Spacer>
    );
  }
}
