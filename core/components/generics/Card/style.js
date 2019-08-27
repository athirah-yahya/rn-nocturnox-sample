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

const THEME = Config.theme("Card.default");


export default {
  main: {
		flex: -1,
    borderWidth: 0,
    borderRadius: THEME.radius,
    backgroundColor: THEME.color,
    borderColor: THEME.borderColor,
    paddingHorizontal: THEME.hPadding,
    paddingVertical: THEME.vPadding,
    overflow: "hidden",
	},

  clickableContainer: {
    flex: -1,
  },
};
