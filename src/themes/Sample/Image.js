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

const SOURCE_TYPE = {
	LOCAL: "LOCAL",
  URI: "URI",
  BASE64: "BASE64",
};

// ------------------------------------------------

const IMAGE = {
  loadingRadius: GET_BASE(1),
  loadingColor: TColor.grayT4,
	sourceType: SOURCE_TYPE.local,
};


// ------------------------------------------------
// ------------------------------------------------
// CONFIGS
// ------------------------------------------------

export default {
	default: {
		... IMAGE,
	},

	Local: {
		... IMAGE,
	},

  Uri: {
    ... IMAGE,
    sourceType: SOURCE_TYPE.uri,
  },

  Base64: {
    ... IMAGE,
    sourceType: SOURCE_TYPE.base64,
  },
};
