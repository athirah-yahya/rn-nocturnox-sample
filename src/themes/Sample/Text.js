// ------------------------------------------------
// ------------------------------------------------
// IMPORTS
// ------------------------------------------------
import {GET_BASE} from "./Base/Sizes";
import {TEXT as TColor} from "./Base/Colors";



// ------------------------------------------------
// ------------------------------------------------
// CONSTS
// ------------------------------------------------

const TYPE = {
	regular: "regular",
	bold: "bold",
	light: "light",
};

// ------------------------------------------------

const FAMILY = {
  roboto: "Roboto",
};

// ------------------------------------------------

const DEFAULT = {
	size: 14,
	line: 20,
	spacing: 0,
  loadingRadius: 50,
  loadingColor: TColor.dark2,
	color: TColor.dark,
	type: TYPE.regular,
  family: FAMILY.roboto,
};

// ------------------------------------------------

const LARGE = {
  ... DEFAULT,
  size: 16,
  line: 24,
};

// ------------------------------------------------

const MEDIUM = {
  ... DEFAULT,
};

// ------------------------------------------------

const SMALL = {
  ... DEFAULT,
  size: 10,
  line: 15,
};


// ------------------------------------------------
// ------------------------------------------------
// CONFIGS
// ------------------------------------------------
export default {
	default: {
		... DEFAULT,
	},

  ButtonFull: {
    ... LARGE,
  },

  ButtonCompact: {
    ... MEDIUM,
  },

// ------------------------------------------------

	Hero: {
		... DEFAULT,
		size: 32,
		line: 38.4,
		spacing: -.5,
    type: TYPE.bold,
	},

	H1: {
		... DEFAULT,
		size: 24,
		line: 28,
		spacing: -1,
	},

	H2: {
		... LARGE,
	},

	BM: {
		... MEDIUM,
	},

	BS: {
		... DEFAULT,
		size: 12,
		line: 18,
	},

	Small: {
		... SMALL,
	},
};
