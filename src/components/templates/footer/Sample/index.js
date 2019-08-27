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
  MENU,
} from "./consts";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------
import {
  IconFA5,
} from "@app-components-core/Icon";
import {
  Spacer,
} from "@core-components-enhancers";
import {
  FooterBase,
} from "@core-components-bases";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class Sample extends Component {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  constructor(props) {
    super(props);

    const activeFooter = props.activeFooter ? props.activeFooter : MENU[0].menu;

    this.state = {
      activeFooter,
    };
  }

// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (this.props.activeFooter !== nextProps.activeFooter) {
        this.switchMenu(nextProps.activeFooter);
      }

      return true;
    }

    if (this.state !== nextState) {
      return true;
    }

    return false;
  }


// ----------------------------------------
// ----------------------------------------
// METHODS
// ----------------------------------------

  switchMenu(menu) {
    const {
      activeFooter,
    } = this.state;

    if (activeFooter === menu) {
      return null;
    }

    this.setState({activeFooter: menu});

    const {
      onSwitch,
    } = this.props;

    if (onSwitch) {
      onSwitch(menu);
    }
  }

// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderMenu(menu:string, icon:string, index:number) {
    const isActive = this.state.activeFooter === menu;

    return (
      <Spacer
        style={ Styles.menu.container }
        onPress={ () => this.switchMenu(menu) }
        key={ index }
      >
        <Spacer flex={ 1 } vAlign="center" hAlign="center">
          <IconFA5 name={ icon } solid color={ isActive ? COLOR.orange : COLOR.white }/>
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
      <FooterBase
        color={ COLOR.gray }
        height={ Config.base(6) }
      >
        {
          MENU.map((menuItem, index) => {
            const {
              menu,
              icon,
            } = menuItem;

            return this._renderMenu(menu, icon, index);
          })
        }
      </FooterBase>
    );
  }

}
