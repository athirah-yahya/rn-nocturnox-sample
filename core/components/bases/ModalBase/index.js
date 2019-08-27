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
  Modal,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
} from "@core-utils";
import Styles from "./style";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import BaseContainer from "@core-components-bases/ScreenBase";
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
export default class ModalBase extends Component {

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
// RENDERS
// ----------------------------------------

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    return (
      <Modal
        visible={ this.props.visible }
        animationType={ this.props.animationType ? this.props.animationType : "slide" }
        transparent
        onRequestClose={ this.props.onClosePress }
        onShow={ this.props.onShow }
      >

        <BaseContainer
          static
          inverseStatus
          backgroundColor={ this.props.backgroundColor }
        >

          <Spacer style={ Styles.container }>
            { this.props.children }
          </Spacer>

        </BaseContainer>

      </Modal>
    );
  }


// ----------------------------------------

}
