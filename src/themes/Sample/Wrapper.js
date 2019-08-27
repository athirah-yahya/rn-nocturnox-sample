// ------------------------------------------------
// ------------------------------------------------
// IMPORTS
// ------------------------------------------------
import {GET_BASE} from "./Base/Sizes";
import {BASE as TColor} from "./Base/Colors";



// ------------------------------------------------
// ------------------------------------------------
// CONSTS
// ------------------------------------------------

const WRAPPER = {
  bordered: false,
  absolute: false,
  width: GET_BASE(4),
  height: GET_BASE(4),
  radius: 50,
  vAlign: "center",
  hAlign: "center",
  vPadding: "auto",
  hPadding: "auto",
  color: TColor.black,
  textTheme: null,
};


// ------------------------------------------------
// ------------------------------------------------
// CONFIGS
// ------------------------------------------------

export default {
	default: {
		... WRAPPER,
	},

// ------------------------------------------------

  CircledIcon: {
    ... WRAPPER,
  },

  ItemImage: {
    ... WRAPPER,
    radius: GET_BASE(1),
    width: GET_BASE(10),
    height: GET_BASE(10),
    vPadding: 0,
    hPadding: 0,
    color: TColor.white,
  },
};
