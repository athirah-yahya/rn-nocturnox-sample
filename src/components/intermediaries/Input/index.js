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
import Styles from "./style";
import {
  Config,
  Device,
} from "@core-utils";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {
  TextS,
  TextXS,
} from "@app-components-derivatives/Text";
import GInput from "@core-components-generics/Input";
import Text from "@core-components-generics/Text";
import {
  IconFA5
} from "@app-components-derivatives/Icon";

// ----------------------------------------
// CONSTANTS
// ----------------------------------------
const THEME = Config.theme("Input");

const LABEL = {
  active: {
    position: Config.base(0),
    size: 12,
    line: 16,
    opacity: 1,
  },
  inactive: {
    position: Config.base(3.7),
    size: 14,
    line: 16,
    opacity: .8,
  },
};




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Input extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  constructor(props) {
    super(props);
  
    this.state = {
      position: new Animated.Value(this.props.value ? LABEL.active.position : LABEL.inactive.position),
      size: new Animated.Value(this.props.value ? LABEL.active.size : LABEL.inactive.size),
      line: new Animated.Value(this.props.value ? LABEL.active.line : LABEL.inactive.line),
      opacity: new Animated.Value(this.props.value ? LABEL.active.opacity : LABEL.inactive.opacity),

      isFocused: false,
      isSecured: true,

      value: this.props.value,
    };
  }

// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state != nextState) {
      return true;
    }

    if (this.props != nextProps) {
      if (!this.props.value && nextProps.value) {
        this.setState({
          position: new Animated.Value(0),
          size: new Animated.Value(12),
          line: new Animated.Value(16),
          opacity: new Animated.Value(1),

          value: nextProps.value,
        });

        if (nextProps.editable === false) {
          this.focus(true);
        }
      } else if (!!this.props.value && !nextProps.value && nextProps.editable === false) {
        this.setState({
          value: nextProps.value,
        });

        this.focus(false, true);
      }

      return true;
    }

    return false;
  }

// ---------------------------------------------------

  componentDidMount() {
    if (this.props.cref) {
      this.props.cref(this.inpRef);
    }
  }


// ----------------------------------------
// ----------------------------------------
// METHODS
// ----------------------------------------

  focus(isUp = false, useForce = false) {
    if (isUp) {

      if (this.props.onFocus) {
        this.props.onFocus();
      }

      Animated.timing(this.state.position, {
        toValue: LABEL.active.position,
        duration: 100,
        delay: 0,
      }).start();
      Animated.timing(this.state.size, {
        toValue: LABEL.active.size,
        duration: 100,
        delay: 0,
      }).start();
      Animated.timing(this.state.line, {
        toValue: LABEL.active.line,
        duration: 100,
        delay: 0,
      }).start();
      Animated.timing(this.state.opacity, {
        toValue: LABEL.active.opacity,
        duration: 100,
        delay: 0,
      }).start();

      this.setState({
        isFocused: true,
      })

    } else {

      if (this.props.onBlur) {
        this.props.onBlur();
      }

      if (this.state.value === null || this.state.value === undefined || this.state.value.trim().length < 1 || useForce) {
        Animated.timing(this.state.position, {
          toValue: LABEL.inactive.position,
          duration: 100,
          delay: 0,
        }).start();
        Animated.timing(this.state.size, {
          toValue: LABEL.inactive.size,
          duration: 100,
          delay: 0,
        }).start();
        Animated.timing(this.state.line, {
          toValue: LABEL.inactive.line,
          duration: 100,
          delay: 0,
        }).start();
        Animated.timing(this.state.opacity, {
          toValue: LABEL.inactive.opacity,
          duration: 100,
          delay: 0,
        }).start();
      }

      this.setState({
        isFocused: false,
      })

    }
  }

// ----------------------------------------

  updateValue(value) {
    this.setState({value});

    if (this.props.onChangeText) {
      this.props.onChangeText(value);
    }
  }


// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderError(mainConfig) {
    if (!this.props.error) {
      return null;
    }

    return (
      <TextXS color={ mainConfig.errorColor }>{ this.props.error }</TextXS>
    );
  }

// ----------------------------------------

  _renderHint(mainConfig) {
    if (!this.props.hint) {
      return null;
    }

    return (
      <TextS color={ mainConfig.hintColor } light style={ Styles.hint }>{ this.props.hint }</TextS>
    );
  }

// ----------------------------------------

  _renderLeftIcon(mainConfig) {
    if (!this.props.leftIcon) {
      return null;
    }

    return (
      <View style={ Styles.left.container }>
        <View style={ Styles.left.icon.container }>
          <IconFA5 name={ this.props.leftIcon } color={ this.state.isFocused ? mainConfig.activeColor : mainConfig.inactiveColor }/>
        </View>
      </View>
    );
  }

// ----------------------------------------

  _renderRightButton(mainConfig) {
    if (!this.props.rightIcon && !mainConfig.secured) {
      return null;
    }

    let rightIcon = this.props.rightIcon;
    let color = this.props.rightIconColor ? this.props.rightIconColor : mainConfig.rightIconColor;
    let onPress = null;

    if (this.props.onRightIconPress) {
      onPress = () => this.props.onRightIconPress();;
    }

    if (mainConfig.secured && this.state.isSecured) {
      rightIcon = "eye";
      onPress = () => this.setState({isSecured: false});
    } else if (mainConfig.secured && !this.state.isSecured) {
      rightIcon = "eye-slash";
      onPress = () => this.setState({isSecured: true});
    }

    const main = <View style={ [Styles.left.icon.container, {alignItems: "flex-end"}] }>
      <IconFA5 name={ rightIcon } color={ color }/>
    </View>

    if (onPress) {
      return (
        <TouchableOpacity style={ Styles.left.container } onPress={ () => onPress() }>
          { main }
        </TouchableOpacity>
      );
    }

    return (
      <View style={ Styles.left.container }>
        { main }
      </View>
    );
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const mainConfig = THEME[this.props.theme ? this.props.theme : "default"];

    return (
      <TouchableOpacity
        style={ [Styles.container, this.props.style] }
        onPress={ () => this.inpRef.focus() }
      >

        <View style={ [
          Styles.topContainer, 
          {borderColor: (
            this.props.error ?
              mainConfig.errorColor : (
                this.state.isFocused ? 
                  mainConfig.activeColor : (
                    this.props.borderColor ? this.props.borderColor : mainConfig.inactiveColor
                  )
                )
              )
          },
          !this.props.hint && !this.props.error ? {marginBottom: Config.base(1)} : {}
        ] }>

          { this._renderLeftIcon(mainConfig) }

          <View style={ Styles.right.container }>

            <Text
              animated
              color={ mainConfig.labelColor }
              size={ this.state.size }
              line={ this.state.line }
              style={{
                top: this.state.position,
                opacity: this.state.opacity,
              }}
            >
              { this.props.label }
            </Text>

            <GInput
              { ... mainConfig }
              { ... this.props }
              onFocus={ () => this.focus(true) }
              onBlur={ () => this.focus(false) }
              onChangeText={ (value) => this.updateValue(value) }
              secured={ mainConfig.secured && this.state.isSecured }
              cref={ (r) => this.inpRef = r }
              style={ Styles.input }
              returnKeyType={ this.props.nextInput ? "next" : "default" }
              onSubmitEditing={ this.props.nextInput ? () => this.props.nextInput.focus() : () => {} }
            />
          </View>

          { this._renderRightButton(mainConfig) }

        </View>
        
        <View style={ Styles.bottomText.grouper }>
          { this._renderError(mainConfig) }
          
          { this._renderHint(mainConfig) }
        </View>

      </TouchableOpacity>
    );
  }


// ----------------------------------------

}
