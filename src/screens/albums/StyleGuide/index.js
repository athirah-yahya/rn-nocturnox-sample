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
  TextHero,
} from "@app-components-core/Text";
import {
  Spacer,
  Padder,
} from "@core-components-enhancers";

// ----------------------------------------
// ALBUM IMPORTS
// ----------------------------------------
import Color from "./Color";
import Text from "./Text";
import Button from "./Button";
import Icon from "./Icon";
import Card from "./Card";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Main extends Component {

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
              <TextHero>{ name }</TextHero>
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
          { this._renderMain("COLORS", <Color/>) }
          { this._renderMain("TYPOGRAPHIES", <Text/>) }
          { this._renderMain("BUTTONS", <Button/>) }
          { this._renderMain("ICONOGRAPHIES", <Icon/>) }
          { this._renderMain("CARDS", <Card/>) }
        </ScrollView>
      </Spacer>
    );
  }
}
