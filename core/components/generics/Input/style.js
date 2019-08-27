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

const THEME = Config.theme("Input.default");


export default {
	main: {
		flex: 1,
    paddingHorizontal: THEME.paddingHorizontal,
    paddingVertical: THEME.paddingVertical,
		color: THEME.textColor,
    fontSize: THEME.size,
		lineHeight: THEME.line,
		letterSpacing: THEME.spacing,
	}
};