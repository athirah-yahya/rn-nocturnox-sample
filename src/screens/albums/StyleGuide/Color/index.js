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
  TextBS,
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
export default class Color extends Component {

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderBox(name:string, isDark:bool = false) {
    return (
      <Spacer space={ 1 } style={{
        width: Config.base(18),
        height: Config.base(12),
        borderRadius: Config.base(1),
        overflow: "hidden",
        borderWidth: 1,
        borderColor: COLOR.gray,
      }}>
        <Spacer flex={ 1 } vAlign="flex-end" style={{
          padding: Config.base(1),
          backgroundColor: COLOR[name],
        }}>
          <TextBS mode={ !isDark ? "light" : null }>{ name }</TextBS>
        </Spacer>

        <Spacer style={{
          padding: Config.base(1),
          backgroundColor: COLOR.gray,
        }}>
          <TextBS mode="light">{ COLOR[name] }</TextBS>
        </Spacer>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderMain(isWhite:bool = false) {
    return (
      <Padder>
        <Spacer row wrap space={ 2 }>
          { this._renderBox("orange", true) }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("orange2") }
        </Spacer>

        <Spacer row wrap space={ 2 }>
          { this._renderBox("green") }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("green2") }
        </Spacer>

        <Spacer row wrap space={ 2 }>
          { this._renderBox("blue") }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("blue2") }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("blue3") }
        </Spacer>

        <Spacer row wrap space={ 2 }>
          { this._renderBox("black") }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("black2") }
        </Spacer>

        <Spacer row wrap space={ 2 }>
          { this._renderBox("gray") }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("grayT0", isWhite) }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("grayT1", isWhite) }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("grayT2", isWhite) }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("grayT4") }
        </Spacer>

        <Spacer row wrap space={ 2 }>
          { this._renderBox("white", true) }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("whiteT1", isWhite) }

          <Spacer horizontal space={ 1 }/>

          { this._renderBox("whiteT4", isWhite) }
        </Spacer>
      </Padder>
    );
  }

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Spacer>
        <Spacer top={ 2 } space={ 2 } backgroundColor={ COLOR.white }>
          { this._renderMain(true) }
        </Spacer>

        <Spacer top={ 4 } space={ 2 } backgroundColor={ COLOR.black }>
          { this._renderMain() }
        </Spacer>
      </Spacer>
    );
  }
}
