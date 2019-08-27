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

const THEME = Config.theme("Button.default");


export default {
  container: {
    flexDirection: "row",
  },

	main: {
		flex: 1,
    borderWidth: 0,
    borderRadius: THEME.radius,
    backgroundColor: THEME.color,
    borderColor: THEME.borderColor,
    paddingHorizontal: THEME.hPadding,
    justifyContent: "center",
    alignItems: "center",
	},
};
