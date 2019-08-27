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

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
  Navigation,
} from "@core-utils";

// ----------------------------------------
// COMPONENT IMPORTS
// ----------------------------------------


/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  MAIN CLASS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export default class List {

// ----------------------------------------
// ----------------------------------------
// CONSTRUCTOR AND LIFE CYCLES
// ----------------------------------------

  constructor(props) {
    this.component = props;
  }


// ----------------------------------------
// ----------------------------------------
// MAIN METHODS
// ----------------------------------------

  shouldComponentUpdate(nextProps, nextState) {
    if (this.component.props.data && this.component.props.data.length > 0 && nextProps.loading) {
      return false;
    }

    if (this.component.props !== nextProps) {
      return true;
    }

    if (this.scomponent.tate !== nextState) {
      return true;
    }

    return false;
  }

// ----------------------------------------

  getState(data = [], loading) {
    if (!loading && data.length > 0) {
      return "READY";
    } else if (!loading && data.length === 0) {
      return "EMPTY";
    }

    return "LOADING";
  }


// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

  _renderLoadingState(iteration = 3) {
    const items = [];
    for (let x = 0; x < iteration; x++) {
      items.push(this.component._renderCard(null, x));
    }

    return this.component._renderLister(items);
  }

// ----------------------------------------

  _renderMain(data) {
    const {
      sort,
    } = this.component.props;

    if (sort) {
      data = data.sort((a, b) => sort(a, b));
    }

    const items = data.map((item, index) => {
      return this.component._renderCard(item, index);
    });

    return this.component._renderLister(items);
  }

// ----------------------------------------

  render() {
    const {
      data,
      loading,
      loadingCounter,
    } = this.component.props;

    switch (this.getState(data, loading)) {
      case "EMPTY":
        if (this.component._renderEmptyState) {
          return this.component._renderEmptyState();
        } else {
          return null;
        }

      case "READY":
        return this._renderMain(data);

      case "LOADING":
      default:
        return this._renderLoadingState(loadingCounter ? loadingCounter : 3);
    }
  }

}
