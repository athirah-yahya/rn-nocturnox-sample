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

const THEME = Config.theme("Wrapper.default");


export default {
  container: {
    flexDirection: "row",
  },

  main: {
		flex: -1,
    borderWidth: 0,
    borderRadius: THEME.radius,
    width: THEME.width,
    height: THEME.height,
    backgroundColor: THEME.color,
    borderColor: THEME.borderColor,
    justifyContent: THEME.hAlign,
    alignItems: THEME.vAlign,
    paddingHorizontal: THEME.hPadding,
    paddingVertical: THEME.vPadding,
	},
};
