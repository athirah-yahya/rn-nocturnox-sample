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
import React, { Component } from "react";




/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class NumberFormat extends Component {

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
// MAIN METHODS
// ----------------------------------------

  format(value:string = "0", delimitter:string = ".") {
    return value
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${delimitter}`);
  }

// ----------------------------------------

  currency(currency:string = "IDR", value:string = "0") {
    switch (currency) {
      case "USD":
        return `$ ${value}`;

      case "IDR":
      default:
        return `Rp. ${value}`;
    }
  }

// ----------------------------------------

  addFormat(stringFormat, value:string) {
    return stringFormat(value);
  }


// ----------------------------------------
// ----------------------------------------
// MAIN RENDER
// ----------------------------------------

  render() {
    const value = this.props.value ? this.props.value + "" : "0";

    let formatted = this.format(value, this.props.delimitter);

    if (this.props.currency) {
     formatted = this.currency(this.props.currency, formatted);
    }

    if (this.props.format) {
     formatted = this.addFormat(this.props.format, formatted);
    }

    return formatted;
  }


// ----------------------------------------

}
