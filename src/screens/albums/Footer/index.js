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
import {
  ScrollView,
} from "react-native";

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

// ----------------------------------------
// ALBUM IMPORTS
// ----------------------------------------
import Sample from "./Sample";



/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class MainFooter extends Component {

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderMain(name:string, component) {
    return (
      <Spacer style={{
        width: Device.windows.width,
      }}>
        <Spacer>
          <Padder>
            <Spacer top={ 1 } space={ 1 }>
              <TextH1 bold>{ name }</TextH1>
            </Spacer>
          </Padder>

          <Spacer style={{
            height: Config.base(.5),
            width: Config.base(7),
            backgroundColor: COLOR.orange,
          }}/>

        </Spacer>

        <ScrollView style={{
          flex: 0,
        }}>

          { component }

        </ScrollView>
      </Spacer>
    );
  }

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Spacer top={ 6 }>
        <ScrollView
          horizontal
          style={{
            flex: -1,
            width: Device.windows.width,
          }}
          pagingEnabled
        >
          { this._renderMain("Sample", <Sample/>) }
        </ScrollView>
      </Spacer>
    );
  }
}
