// ----------------------------------------
// ----------------------------------------
// BASE
// ----------------------------------------
export const BASE = {
  orange: "#ffbd00",
  orange2: "#efa000",

  green: "#009f53",
  green2: "#00af5c",

  blue: "#29388f",
  blue2: "#00a7e2",
  blue3: "#41c2ff",

  red: "#cf0000",

  black: "#0a1016",
  // black: "#0c1217",
  black2: "#0f1821",

  gray: "#273039",
  grayT0: "rgba(215, 235, 255, .06)",
  grayT1: "rgba(215, 235, 255, .1)",
  grayT15: "rgba(12, 18, 23, 0.15)",
  grayT2: "rgba(215, 235, 255, .2)",
  grayT4: "rgba(15, 24, 33, .4)",

  white: "#fff",
  whiteT1: "rgba(255, 255, 255, .1)",
  whiteT4: "rgba(255, 255, 255, .4)",
};


// ----------------------------------------
// ----------------------------------------
// DERIVATIVES
// ----------------------------------------
export const PRIMARY = {
  brightYellow: BASE.orange,
};

// ----------------------------------------

export const SECONDARY = {
  green: BASE.green,
  skyBlue: BASE.blue2,
  blue: BASE.blue,
};

// ----------------------------------------

export const BACKGROUND = {
  black: BASE.black,
  gray: BASE.gray,
  whiteOpacity: BASE.whiteT1,
};

// ----------------------------------------
export const TEXT = {
  dark: BASE.black2,
  dark2: BASE.grayT4,
  light: BASE.white,
  light2: BASE.whiteT4,
  orange: BASE.orange,
};

// ----------------------------------------

export const BUTTON = {
  primary: BASE.orange,
  primaryPressed: BASE.orange2,
  primaryDisabled: BASE.grayT0,
  secondary: BASE.grayT1,
  secondaryPressed: BASE.grayT2,
  secondaryDisabled: BASE.grayT0,
};

// ----------------------------------------

export const CHECK = {
  active: BASE.green2,
};

// ----------------------------------------

export const TOGGLE = {
  activeBackground: BASE.green2,
  activeIcon: BASE.blue3,
};


// ----------------------------------------
// ----------------------------------------
// EXPORT DEFAULT
// ----------------------------------------

export default {
  BASE: BASE,
  PRIMARY: PRIMARY,
  SECONDARY: SECONDARY,
  BACKGROUND: BACKGROUND,
  TEXT: TEXT,
  BUTTON: BUTTON,
  CHECK: CHECK,
  TOGGLE: TOGGLE,
};
