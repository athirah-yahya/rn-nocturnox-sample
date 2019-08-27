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
  list: {
    container: {
      flex: -1,
      height: Device.windows.height,
    },

    contentContainer: {
      paddingVertical: Config.base(1),
      paddingBottom: Device.isIphoneX ? Config.base(5) : Config.base(1),
    },
  },
};
