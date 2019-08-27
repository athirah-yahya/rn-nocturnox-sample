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
  TouchableOpacity,
  Animated,
} from "react-native";

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
} from "@core-utils";
import Styles from "./style";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Spacer extends Component {

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

  getComposedStyle() {
    const spaceVertical = !this.props.horizontal && this.props.space ? this.props.space : 0;
    const spaceHorizontal = this.props.horizontal && this.props.space ? this.props.space : 0;

    return [
      Styles.container,
      this.props.row ? {flexDirection: "row",} : {},
      { marginBottom: Config.base(spaceVertical) },
      { marginLeft: Config.base(spaceHorizontal) },
      this.props.hAlign ? (this.props.row ? {justifyContent: this.props.hAlign} : {alignItems: this.props.hAlign}) : {},
      this.props.vAlign ? (this.props.row ? {alignItems: this.props.vAlign} : {justifyContent: this.props.vAlign}) : {},
      this.props.hPadding ? {paddingHorizontal: Config.base(this.props.hPadding) } : {},
      this.props.vPadding ? {paddingVertical: Config.base(this.props.vPadding) } : {},
      this.props.height ? {height: this.props.height } : {},
      this.props.width ? {width: this.props.width } : {},
      this.props.radius ? {borderRadius: this.props.radius } : {},
      this.props.top ? {paddingTop: Config.base(this.props.top) } : {},
      this.props.bottom ? {paddingBottom: Config.base(this.props.bottom) } : {},
      this.props.flex ? {flex: this.props.flex} : {},
      this.props.wrap ? {flexWrap: "wrap"} : {},
      this.props.backgroundColor ? {backgroundColor: this.props.backgroundColor} : {},
      this.props.borderBottomColor ? {borderBottomWidth: 1, borderColor: this.props.borderBottomColor} : {},
      this.props.borderRightColor ? {borderRightWidth: 1, borderColor: this.props.borderRightColor} : {},
      this.props.style,
    ];
  }

// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------
  render() {
    if (this.props.onPress) {
      return (
        <TouchableOpacity
          style={ this.getComposedStyle() }
          onPress={ this.props.onPress }
        >
          { this.props.children }
        </TouchableOpacity>
      );
    }

    if (this.props.animated) {
      return (
        <Animated.View style={ this.getComposedStyle() }>
          { this.props.children }
        </Animated.View>
      );
    }

    return (
      <View style={ this.getComposedStyle() }>
        { this.props.children }
      </View>
    );
  }


// ----------------------------------------

}
