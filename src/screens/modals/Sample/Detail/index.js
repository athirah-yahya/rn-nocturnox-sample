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
import { connect } from "react-redux";

// ----------------------------------------
// BASE IMPORTS
// ----------------------------------------
import {
  Screen,
} from "@core-abstracts";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
  Navigation,
} from "@core-utils";
import Styles from "./style";
import {
  COLOR,
  DATA,
  MODAL,
} from "./consts";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {
  TextH2,
  TextBS,
} from "@app-components-core/Text";
import {
  IconFA5,
} from "@app-components-core/Icon";
import ModalContainer from "@app-components-containers/SampleModalBase";
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
class Detail extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  constructor(props) {
    super(props);

    this.Base = new Screen(this);

    this.state = {
      ... this.Base.initBaseState(DATA, MODAL),
    };
  }

// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

// ----------------------------------------
// ----------------------------------------
// DATA METHODS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// MAIN METHODS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderCloseButton() {
    const {
      onClosePress,
    } = this.props;

    return (
      <Spacer hAlign="flex-end">
        <Spacer row hPadding={ 2 } vPadding={ 2 } onPress={ onClosePress }>
          <IconFA5 name="times"/>
        </Spacer>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderTitle() {
    return (
      <Spacer top={ 20 } space={ 20 } hAlign="center">
        <Spacer>
          <TextH2
            mode="light"
            bold
          >
            Sample Modal
          </TextH2>
          <TextBS
            mode="light2"
          >
            Sample Detail
          </TextBS>
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
      <ModalContainer
        visible={ this.props.isActive }
        onClosePress={ this.props.onClosePress }
        partial
      >
        <Padder flex={ 1 }>
          <Spacer radius={ Config.base(1) } space={ 20 } backgroundColor={ COLOR.gray }>
            { this._renderCloseButton() }

            { this._renderTitle() }
          </Spacer>
        </Padder>

      </ModalContainer>
    );
  }

}


// ----------------------------------------
// ----------------------------------------
// CONNECT
// ----------------------------------------

const mapStateToProps = (state) => {
  return {

  };
};

// ----------------------------------------

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

// ----------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(Detail);

