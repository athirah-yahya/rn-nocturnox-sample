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
  IconTrakindoSys,
  IconTrakindoFeature,
  IconTrakindoNav,
} from "@app-components-core/Icon";
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
export default class Icon extends Component {

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderSysIcon(name:string) {
    return (
      <Spacer row space={ 1 }>
        <IconTrakindoSys name={ name }/>

        <Spacer horizontal space={ 1 }/>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderFeatureIcon(name:string) {
    return (
      <Spacer row space={ 1 }>
        <IconTrakindoFeature name={ name }/>

        <Spacer horizontal space={ 1 }/>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderNavIcon(name:string, isInverse:bool = false) {
    return (
      <Spacer row space={ 1 }>
        <IconTrakindoNav name={ name } inverse={ isInverse }/>

        <Spacer horizontal space={ 1 }/>
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
        <Spacer top={ 2 } backgroundColor={ COLOR.black }>
          <Padder>
            <Spacer row wrap space={ 2 }>
              { this._renderSysIcon("download") }
              { this._renderSysIcon("close") }
              { this._renderSysIcon("plus") }
              { this._renderSysIcon("back") }
              { this._renderSysIcon("arrow-down") }
              { this._renderSysIcon("arrow-up") }
              { this._renderSysIcon("account") }
              { this._renderSysIcon("money") }
              { this._renderSysIcon("warning") }
              { this._renderSysIcon("copy") }
              { this._renderSysIcon("parts-invoice") }
              { this._renderSysIcon("service-invoice") }
              { this._renderSysIcon("documen") }
              { this._renderSysIcon("settings") }
            </Spacer>

            <Spacer row wrap space={ 2 }>
              { this._renderFeatureIcon("invoice") }
              { this._renderFeatureIcon("parts-tracking-1") }
              { this._renderFeatureIcon("units") }
              { this._renderFeatureIcon("service-order") }
              { this._renderFeatureIcon("request-service") }
              { this._renderFeatureIcon("parts-tracking") }
            </Spacer>

            <Spacer row wrap space={ 2 }>
              { this._renderNavIcon("home") }
              { this._renderNavIcon("orders") }
              { this._renderNavIcon("inbox") }
              { this._renderNavIcon("help") }
              { this._renderNavIcon("landing-profile") }
            </Spacer>
          </Padder>

          <Spacer top={ 2 } backgroundColor={ COLOR.orange }>
            <Padder>
              <Spacer row wrap space={ 1 }>
                { this._renderNavIcon("home", true) }
                { this._renderNavIcon("orders", true) }
                { this._renderNavIcon("inbox", true) }
                { this._renderNavIcon("help", true) }
                { this._renderNavIcon("landing-profile", true) }
              </Spacer>
            </Padder>
          </Spacer>
        </Spacer>
      </Spacer>
    );
  }
}
