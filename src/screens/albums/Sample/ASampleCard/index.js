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
import {
  SampleCard,
} from "@app-components-cards";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class ASampleCard extends Component {

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderCard(loading:bool = false) {
    return (
      <SampleCard
        recordId={ 1 }
        fullName={ "Record Sample" }
        onPress={ () => alert("Pressed on Sample Card") }
        loading={ loading }
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
        <Padder>
          <Spacer space={ 2 }>
            <Spacer top={ 1 } space={ 1 }>
              <TextH1 bold mode="light2">Loading State</TextH1>
            </Spacer>

            <Spacer space={ 2 }>
              { this._renderCard(true) }
            </Spacer>

            <Spacer space={ 2 }>
              { this._renderCard() }
            </Spacer>
          </Spacer>

          <Spacer top={ 1 } space={ 1 }>
            <Spacer top={ 1 } space={ 1 }>
              <TextH1 bold mode="light2">Size</TextH1>
            </Spacer>

            <Spacer row>
              <Spacer flex={ 4 }>
                <Spacer space={ 2 }>
                  { this._renderCard(true) }
                </Spacer>

                <Spacer space={ 2 }>
                  { this._renderCard() }
                </Spacer>
              </Spacer>

              <Spacer flex={ 1 }/>
            </Spacer>
          </Spacer>
        </Padder>
      </Spacer>
    );
  }
}
