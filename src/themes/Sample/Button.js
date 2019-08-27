// ------------------------------------------------
// ------------------------------------------------
// IMPORTS
// ------------------------------------------------
import {GET_BASE} from "./Base/Sizes";
import {BUTTON as TColor} from "./Base/Colors";


// ------------------------------------------------
// ------------------------------------------------
// CONSTS
// ------------------------------------------------

const TYPE = {
	FULL: "FULL",
	COMPACT: "COMPACT",
};

// ------------------------------------------------

const BASE = {
	bordered: false,
  borderColor: null,
	radius: GET_BASE(1),
};

// ------------------------------------------------

const FULL = {
  height: GET_BASE(6),
  hPadding: 0,
  type: TYPE.FULL,
  textTheme: "ButtonFull",
};

// ------------------------------------------------

const COMPACT = {
  height: GET_BASE(4),
  hPadding: GET_BASE(2.5),
  type: TYPE.COMPACT,
  textTheme: "ButtonCompact",
};

// ------------------------------------------------

const PRIMARY = {
  color: TColor.primary,
  colorPressed: TColor.primaryPressed,
  colorDisabled: TColor.primaryDisabled,
  textMode: "dark",
  textDisableMode: "light2",
};

// ------------------------------------------------

const SECONDARY = {
  color: TColor.secondary,
  colorPressed: TColor.secondaryPressed,
  colorDisabled: TColor.secondaryDisabled,
  textMode: "light",
  textDisableMode: "light2",
};

// ------------------------------------------------

const BUTTON = {
  ... BASE,
  ... FULL,
  ... PRIMARY,
};


// ------------------------------------------------
// ------------------------------------------------
// CONFIGS
// ------------------------------------------------

export default {
	default: {
		... BUTTON,
	},

// ------------------------------------------------

	FullPrimary: {
		... BUTTON,
	},

	FullSecondary: {
		... BUTTON,
		... SECONDARY,
	},

	CompactPrimary: {
		... BUTTON,
    ... COMPACT,
	},

	CompactSecondary: {
    ... BUTTON,
    ... COMPACT,
    ... SECONDARY,
	},
};
