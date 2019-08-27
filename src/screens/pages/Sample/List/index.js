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
  TextH1,
} from "@app-components-core/Text";
import ScreenContainer from "@app-components-containers/SampleBase";
import {
  Padder,
  Spacer,
  HorizontalAnimator,
} from "@core-components-enhancers";
import {
  SampleList,
} from "@app-components-lists";

// ----------------------------------------
// MODAL IMPORTS
// ----------------------------------------

import {
  Detail as SampleDetailModal,
} from "@app-modals/Sample";

// ----------------------------------------
// SELECTOR IMPORTS
// ----------------------------------------
import * as SampleSelector from "@app-selectors/sample";

// ----------------------------------------
// ACTION CREATOR IMPORTS
// ----------------------------------------
import {
  SampleAction,
} from "@app-actions";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
class List extends Component {

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

  componentDidMount() {
    this.getSampleList();
  }

// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    this.Base.setData("sampleList", nextProps, nextState);

    return true;
  }


// ----------------------------------------
// ----------------------------------------
// DATA METHODS
// ----------------------------------------

  getSampleList() {
    this.Base.startLoading("sampleList");
    this.props.getSampleList(null, () => this.Base.stopLoading("sampleList"));
  }

// ----------------------------------------

  onSampleSelected(data) {
    this.Base.openModal("Detail");
  }


// ----------------------------------------
// ----------------------------------------
// MAIN METHODS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderHeader() {
    return (
      <Spacer space={ 1 }>
        <HorizontalAnimator order={ 2 }>
          <TextH1
            bold
            mode="light"
          >
            List of Customer
          </TextH1>
        </HorizontalAnimator>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderCompanies() {
    const data = this.state.data.sampleList;

    return (
      <SampleList
        data={ data }
        onItemPress={ (data) => this.onSampleSelected(data) }
        loading={ this.state.loadingState.sampleList }
        order={ 2 }
      />
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <ScreenContainer
        inverseStatus
        hasFooter
        title={ "Sample List" }
        activeFooter="sample"
      >
        <Spacer top={ 2 } flex={ 1 }>
          <Padder>
            { this._renderCompanies() }
          </Padder>
        </Spacer>

        <SampleDetailModal
          isActive={ this.state.modalState.Detail }
          onClosePress={ () => this.Base.closeModal("Detail") }
        />
      </ScreenContainer>
    );
  }

}


// ----------------------------------------
// ----------------------------------------
// CONNECT
// ----------------------------------------

const mapStateToProps = (state, props) => {
  return {
    sampleList: SampleSelector.list(state, props),
  };
};

// ----------------------------------------

const mapDispatchToProps = (dispatch) => {
  return {
    getSampleList: (data, onComplete) => dispatch(SampleAction.getList(data, onComplete)),
  };
};

// ----------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(List);

