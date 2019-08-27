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
import Styles from "./style";
import {
  COLOR,
} from "./consts";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {
  TextH2,
} from "@app-components-core/Text";
import {
  CardBase,
} from "@app-components-core/Card";
import {
  Spacer,
} from "@core-components-enhancers";
import {
  FieldH2,
} from "@app-components-core/Field";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class SampleCard extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// METHODS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderName() {
    const {
      fullName,
      loading,
    } = this.props;

    return (
      <Spacer space={ 2 }>
        <TextH2
          bold
          loadingWidth={ Config.base(21) }
          loading={ loading }
        >
          { fullName }
        </TextH2>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderId() {
    const {
      recordId,
      loading,
    } = this.props;

    return (
      <FieldH2
        label={ "Record ID" }
        value={ recordId }
        loadingWidth={ Config.base(5) }
        loading={ loading }
      />
    );
  }

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const {
      onPress,
      loading,
    } = this.props;

    return (
      <CardBase
        onPress={ !loading ? onPress : null }
      >
        { this._renderName() }

        { this._renderId() }
      </CardBase>
    );
  }

}
