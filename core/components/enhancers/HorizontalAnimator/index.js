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
  View,
  Animated,
  Easing,
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




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class HorizontalAnimator extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  constructor(props) {
    super(props);
  
    this.state = {
      position: new Animated.Value(Device.windows.width),
      opacity: new Animated.Value(0),
      hasSlide: false,
    };
  }

// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state != nextState) {
      return true;
    }

    if (this.props != nextProps) {
      return true;
    }

    return false;
  }

// ----------------------------------------

  componentDidMount() {
    if (!this.state.hasSlide) {
      Animated.parallel([
        Animated.timing(this.state.position, {
          toValue: 0,
          duration: 400,
          delay: !this.props.order ? 100 : (this.props.order * 60),
        }),

        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500,
          delay: !this.props.order ? 100 : (this.props.order * 60),
        }),
      ]).start();

      this.setState({
        hasSlide: true,
      });
    }
  }

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const style = [];
    style.push({
        left: this.state.position,
        opacity: this.state.opacity,
      });

    return (
      <Animated.View style={ style }>
        { this.props.children }
      </Animated.View>
    );
  }


// ----------------------------------------

}
