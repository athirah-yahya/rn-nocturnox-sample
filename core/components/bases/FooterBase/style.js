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
import {
  COLOR,
} from "./consts";


export default {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  filler: {
    position: "absolute",
    bottom: -Config.base(5),
    width: Device.screen.width,
    height: Config.base(5),
    backgroundColor: COLOR.gray,
  },
};
