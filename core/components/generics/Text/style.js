/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// LOCAL & CONFIG IMPORTS
// ----------------------------------------
import {
  Config,
  Device,
} from "@core-utils";

const THEME = Config.theme("Text.default");


export default {
	main: {
		fontSize: THEME.size,
		lineHeight: THEME.line,
		letterSpacing: THEME.spacing,
		color: THEME.color,
    fontFamily: THEME.family,
	},

  loadingContainer: {
    flex: -1,
    paddingTop: 6,
  },

  loading: {
    flex: -1,
    width: "100%",
    borderRadius: THEME.loadingRadius,
    backgroundColor: THEME.loadingColor,
    opacity: .2,
  },
};
