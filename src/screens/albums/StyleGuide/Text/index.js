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
  TextHero,
  TextH1,
  TextH2,
  TextBM,
  TextBS,
  TextSmall,
} from "@app-components-core/Text";
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
export default class Text extends Component {

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderSegment(mode:string) {
    return (
      <Spacer space={ 2 }>
        <Spacer space={ 2 }>
          <TextHero mode={ mode }>Hero - Hero</TextHero>
        </Spacer>

        <Spacer space={ 2 }>
          <TextH1 mode={ mode } bold>H1 - H1 Heading Bold</TextH1>
          <TextH1 mode={ mode }>H1 - H1 Heading Regular</TextH1>
        </Spacer>

        <Spacer space={ 2 }>
          <TextH2 mode={ mode } bold>H2 - H2 Heading Bold</TextH2>
          <TextH2 mode={ mode }>H2 - H2 Heading Regular</TextH2>
        </Spacer>

        <Spacer space={ 2 }>
          <TextBM mode={ mode } bold>BM - Body M Bold</TextBM>
          <TextBM mode={ mode }>BM - Body M Regular</TextBM>
        </Spacer>

        <Spacer space={ 2 }>
          <TextBS mode={ mode } bold>BS - Body S Bold</TextBS>
          <TextBS mode={ mode }>BS - Body S Regular</TextBS>
        </Spacer>

        <Spacer space={ 2 }>
          <TextSmall mode={ mode } bold>Small - Small Bold</TextSmall>
          <TextSmall mode={ mode }>Small - Small Regular</TextSmall>
        </Spacer>
      </Spacer>
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Spacer>
        <Spacer top={ 2 } backgroundColor={ COLOR.white }>
          <Padder>
            { this._renderSegment() }

            <Spacer space={ 2 }/>

            { this._renderSegment("dark2") }
          </Padder>
        </Spacer>

        <Spacer top={ 4 } space={ 2 } backgroundColor={ COLOR.black }>
          <Padder>
            { this._renderSegment("light") }

            <Spacer space={ 2 }/>

            { this._renderSegment("light2") }
          </Padder>
        </Spacer>
      </Spacer>
    );
  }
}
