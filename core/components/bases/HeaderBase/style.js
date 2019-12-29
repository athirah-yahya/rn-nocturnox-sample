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
  filler: {
    position: "absolute",
    top: -Config.base(6),
    width: Device.screen.width,
    height: Config.base(6),
  },
};