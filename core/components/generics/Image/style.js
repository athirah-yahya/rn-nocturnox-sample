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

const THEME = Config.theme("Image.default");

export default {
	main: {
		flex: -1,
		width: undefined,
		height: undefined,
	},

  loading: {
    flex: -1,
    width: "100%",
    borderRadius: THEME.loadingRadius,
    backgroundColor: THEME.loadingColor,
    opacity: .2,
  },
};
