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
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from "react-native";
import SaveAreaView from "react-native-safe-area-view";

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
  Spacer,
} from "@core-components-enhancers";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class ScreenBase extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  constructor(props) {
    super(props);

    this.state = {
      isKeyboarUp: false,
      showFixedTitle: false,

      yOffset: 0,

      isMoreMenuModalVisible: false,
    };

    if (!Device.isAndroid){
      Keyboard.addListener("keyboardWillShow", () => {
        this.setState({isKeyboarUp: true});
      });

      Keyboard.addListener("keyboardWillHide", () => {
        this.setState({isKeyboarUp: false});
      });
    } else {
      Keyboard.addListener("keyboardDidShow", () => {
        this.setState({isKeyboarUp: true});
      });

      Keyboard.addListener("keyboardDidHide", () => {
        this.setState({isKeyboarUp: false});
      });
    }
  }

// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state !== nextState) {
      return true;
    }

    if (this.props !== nextProps) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// METHODS
// ----------------------------------------

  onContentScrolled(event) {
    const {
      onScroll,
    } = this.props;

    const yOffset = event.nativeEvent.contentOffset.y;

    // if (this.props.persistScrollTitle) {
    //   persistScrollOffset = this.props.persistScrollOffset ? this.props.persistScrollOffset : 45;

    //   if (yOffset >= persistScrollOffset && !this.state.showFixedTitle) {
    //     this.setState({showFixedTitle: true});
    //   }

    //   if (yOffset < persistScrollOffset && this.state.showFixedTitle) {
    //     this.setState({showFixedTitle: false});
    //   }
    // }

    // this.setState({
    //   yOffset,
    // })

    if (!onScroll) {
      return null;
    }

    onScroll(yOffset);
  }

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderStatusBar() {
    const {
      inverseStatus,
    } = this.props;

    return (
      <StatusBar
        translucent
        barStyle={ !inverseStatus ? "dark-content" : "light-content" }
        // barStyle={ !inverse && THEME.statusBar != "inverse" ? "dark-content" : "light-content" }
        backgroundColor={ "transparent" }
      />
    );
  }

// ----------------------------------------

  _renderTopColor() {
    const {
      topColor,
    } = this.props;

    if (!topColor) {
      return null;
    }

    return (
      <Spacer style={ [Styles.backgroundContent.container, {backgroundColor: this.props.baseColor}] }>
        <Spacer style={ [Styles.backgroundContent.content, {backgroundColor: topColor ? topColor : "transparent"}] }/>
        {/*<Spacer style={ [Styles.backgroundContent.content, {backgroundColor: topColor ? topColor : THEME.core,}] }/>*/}
      </Spacer>
    );
  }

// ----------------------------------------

  _renderBackgroundContent() {
    if (!this.props.backgroundContent) {
      return null;
    }

    return (
      <Spacer style={ [Styles.backgroundContent.container, {backgroundColor: this.props.baseColor}] }>
        { this.props.backgroundContent }
      </Spacer>
    );
  }

// ----------------------------------------

  _renderBackgroundImage() {
    if (!this.props.backgroundImage) {
      return null;
    }

    return (
      <Spacer style={ [Styles.backgroundContent.container, {backgroundColor: this.props.baseColor}] }>
        <Spacer style={ Styles.backgroundContent.imageContainer }>
          { this.props.backgroundImage }
        </Spacer>
      </Spacer>
    );
  }

// ----------------------------------------

  _renderHeader(isFloatingHeader = false) {
    if (!this.props.showFloatingHeader && isFloatingHeader) {
      return null;
    }

    return this.props.headerRender;
  }

// ----------------------------------------

  _renderMainContent() {
    const {
      noBounce,
    } = this.props;

    if (this.props.static) {
      return (
        <Spacer style={ Styles.innerContainerStatic }>
          { this.props.children }
        </Spacer>
      );
    }

    return (
      <ScrollView
        contentContainerStyle={ Styles.innerContainer }
        onScroll={ (event) => this.onContentScrolled(event) }
        scrollEventThrottle={ 16 }
        bounces={ !noBounce }
        overScrollMode={ noBounce ? "never" : "auto" }
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        { this.props.children }
      </ScrollView>
    );
  }

// ----------------------------------------

  renderKeyboardMargin() {
    return (
      <Spacer style={ Styles.keyboardMargin }/>
    );
  }

// ----------------------------------------

  _renderBottomContent() {
    const {
      bottomContent,
      baseColor,
    } = this.props;

    if (!bottomContent) {
      return null;
    }

    return (
      <Spacer style={{paddingBottom: (this.state.isKeyboarUp ? 8 : 0), backgroundColor: baseColor}}>
      {/*<Spacer style={{paddingBottom: (this.state.isKeyboarUp ? 8 : 0), backgroundColor: THEME.background}}>*/}
        { bottomContent }
      </Spacer>
    );
  }

// ----------------------------------------

  _renderMain() {
    const {
      backgroundColor,
      fullScreen,
      baseColor
    } = this.props;

    return (
      <KeyboardAvoidingView
        style={[
          Styles.main.container, 
          // {backgroundColor: backgroundColor ? backgroundColor : baseColor},
          // {backgroundColor: backgroundColor ? backgroundColor : THEME.background,},
          fullScreen ? Styles.main.fullScreen : {},
        ]}
        behavior={ !Device.isAndroid ? "padding" : null }
      >
        { this._renderMainContent() }

        { this.renderKeyboardMargin() }

        { this._renderBottomContent() }
      </KeyboardAvoidingView>
    );
  }

// ----------------------------------------

  _renderFooter() {
    return this.props.footerRender;
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const {
      baseColor,
      backgroundColor,
      hasFooter,
      bottomContent,
    } = this.props;

    return (
      <SaveAreaView
        style={ [Styles.container, {backgroundColor: backgroundColor ? backgroundColor : baseColor}] }
        // style={ [Styles.container, {backgroundColor: backgroundColor ? backgroundColor : THEME.background},] }
        forceInset={{
          bottom: (hasFooter || bottomContent ? "always" : "never"),
        }}
      >
        { this._renderStatusBar() }

        { this._renderTopColor() }

        { this._renderBackgroundImage() }

        { this._renderBackgroundContent() }

        { this._renderHeader() }

        { this._renderMain() }

        { this._renderHeader(true) }

        { this._renderFooter() }
      </SaveAreaView>
    );
  }

}
