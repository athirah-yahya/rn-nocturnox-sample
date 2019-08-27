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
  TouchableOpacity,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
  Navigation,
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
} from "@core-components-enhancers";




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

  _renderButton(name:string, target:string) {
    return (
      <TouchableOpacity
        style={{
          borderBottomWidth: 1,
          paddingVertical: Config.base(1),
          paddingHorizontal: Config.base(2),
        }}
        onPress={ () => Navigation.push(target) }
      >
        <TextH1>{ name }</TextH1>
      </TouchableOpacity>
    );
  }

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Spacer top={ 6 }>
        <ScrollView>
          { this._renderButton("Style Guide", "StyleGuide") }
          { this._renderButton("Sample", "Sample") }
          { this._renderButton("Header", "Header") }
          { this._renderButton("Footer", "Footer") }
        </ScrollView>
      </Spacer>
    );
  }
}
