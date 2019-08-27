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
    // backgroundColor: COLOR.black,
    // backgroundColor: THEME.background,
    paddingTop: Device.isAndroid ? Config.base(4) : Config.base(1),
  },

  innerContainer: {
    paddingBottom: Device.isIphoneX ? Config.base(2) : Config.base(1),
  },

  innerContainerStatic: {
    flex: 1,
  },

  backgroundContent: {
    container: {
      flex: -1,
      position: "absolute",
      width: Device.screen.width,
      // backgroundColor: COLOR.black,
    },

    content: {
      height: Config.base(6),
    },

    imageContainer: {
      flex: -1,
      width: Device.windows.width + 2,
      left: -1,
    },
  },

  main: {
    container: {
      flex: 1,
    },

    fullScreen: {
      flex: -1,
      position: "absolute",
      height: Device.screen.height,
      width: Device.screen.width,
      bottom: 0,
    },
  },

  keyboardMargin: {
    height: 0,
  },
};
