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
  Validation,
  Navigation,
} from "@core-utils";
import Styles from "./style";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
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
export default class HorizontalScroller extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------
  
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props != nextProps) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// METHODS
// ----------------------------------------

  getScrollItems() {
    const { children } = this.props;

    if (!children.length) {
      return children;
    }

    const itemRenders = [];
    children.map((item, index) => {
      itemRenders.push(item);

      if (index < children.length - 1) {
        itemRenders.push(
          <Spacer horizontal space={ 2 } key={ `spacer-${index}` }/>
        );
      }
    });

    return itemRenders;
  }


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
      <ScrollView
        horizontal
        contentContainerStyle={ Styles.contentContainer }
        showsHorizontalScrollIndicator={ false }
      >
        { this.getScrollItems() }
      </ScrollView>
    );
  }

}