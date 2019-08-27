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
export default class Screen {

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

  initBaseState(DATA, MODAL) {
    const props = this.component.props;

    const data = {};
    const loadingState = {};
    for (let x in DATA) {
      data[x] = props[x] !== null &&
        props[x] !== undefined &&
        (typeof props[x] !== "object" || props[x] !== {}) &&
        (!Array.isArray(props[x]) || props[x].length)
      ?
        props[x]
      :
        DATA[x];

      loadingState[x] =  true;
      loadingState[x] = props[x] === null ||
        props[x] === undefined ||
        (typeof props[x] === "object" && Object.entries(props[x]).length === 0) ||
        (Array.isArray(props[x]) && props[x].length === 0)
      ?
        true
      :
        false
    }

    const modalState = {};
    if (MODAL) {
      MODAL.map(item => {
        modalState[item] = false;
      });
    }

    return {
      data,
      loadingState,
      modalState,
    };
  }

// ----------------------------------------

  setData(key:string, nextProps, nextState) {
    if (nextProps[key] !== this.component.state.data[key]) {
      const {
        data,
        loadingState,
      } = this.component.state;

      data[key] = nextProps[key];
      loadingState[key] = false;

      this.component.setState({
        data,
        loadingState,
      });
    }
  }

// ----------------------------------------

  startLoading(key:string, force:bool = false) {
    const {
      data,
      loadingState,
    } = this.component.state;

    if (!data[key] && (!loadingState[key] || force)) {
      loadingState[key] = true;

      this.component.setState({
        loadingState,
      });
    }
  }

// ----------------------------------------

  stopLoading(key:string) {
    const {
      loadingState,
    } = this.component.state;

    if (loadingState[key]) {
      loadingState[key] = false;

      this.component.setState({loadingState});
    }
  }

// ----------------------------------------

  openModal(key:string) {
    const {
      modalState,
    } = this.component.state;

    if (!modalState[key]) {
      modalState[key] = true;

      this.component.setState({modalState});
    }
  }

// ----------------------------------------

  closeModal(key:string) {
    const {
      modalState,
    } = this.component.state;

    if (modalState[key]) {
      modalState[key] = false;

      this.component.setState({modalState});
    }
  }


// ----------------------------------------
// ----------------------------------------
// RENDERS
// ----------------------------------------

}
