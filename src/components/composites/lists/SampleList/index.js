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
// BASE IMPORTS
// ----------------------------------------
import {
  List,
} from "@core-abstracts";

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
  Padder,
  Spacer,
  Lister,
  VerticalAnimator,
} from "@core-components-enhancers";
import {
  SampleCard,
} from "@app-components-cards";





/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class SampleList extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  constructor(props) {
    super(props);

    this.Base = new List(this);
  }

// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    return this.Base.shouldComponentUpdate(nextProps, nextState);
  }


// ----------------------------------------
// ----------------------------------------
// METHODS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderLister(items = []) {
    return (
      <Spacer>
        <Lister space={ 1 }>
          { items }
        </Lister>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderCard(item = {}, index:number) {
    const {
      order,
      onItemPress,
      loading,
    } = this.props;

    return (
      <VerticalAnimator order={ index + order } key={ !loading ? index : `${index}-loading` }>
        <SampleCard
          { ... item }
          onPress={ onItemPress ? () => onItemPress(item, index) : () => {} }
          loading={ loading }
        />
      </VerticalAnimator>
    );
  }

// ----------------------------------------

  _renderEmptyState() {
    return (
      <Padder>
        <Spacer top={ 8 } space={ 8 } vAlign="center" hAlign="center">
          <TextH2
            bold
            mode="light2"
          >
            No Sample Data Found
          </TextH2>
        </Spacer>
      </Padder>
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return this.Base.render();
  }

}
