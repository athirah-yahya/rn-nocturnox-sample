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
  SampleList,
} from "@app-components-lists";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class List extends Component {

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
      <Spacer backgroundColor={ COLOR.black }>
        <Padder>
          <Spacer space={ 2 }>
            <Spacer top={ 1 } space={ 1 }>
              <TextH1 bold mode="light2">Default</TextH1>
            </Spacer>

            <SampleList
              data={[
                {
                  recordId: 1,
                  fullName: "Record Sample",
                },
                {
                  recordId: 1,
                  fullName: "Record Sample",
                },
                {
                  recordId: 1,
                  fullName: "Record Sample",
                },
              ]}
              onItemPress={ (item, index) => alert(`Pressed on Sample Card #${(index+1)}`) }
              order={ 1 }
            />
          </Spacer>

          <Spacer top={ 1 } space={ 1 }>
            <Spacer top={ 1 } space={ 1 }>
              <TextH1 bold mode="light2">Loading</TextH1>
            </Spacer>

            <SampleList
              loading
              order={ 1 }
            />
          </Spacer>

          <Spacer top={ 1 } space={ 1 }>
            <Spacer top={ 1 } space={ 1 }>
              <TextH1 bold mode="light2">Empty</TextH1>
            </Spacer>

            <SampleList
              order={ 1 }
            />
          </Spacer>
        </Padder>
      </Spacer>
    );
  }
}
