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


export default {
  container: {
    flex: 1,
  },

	topContainer: {
    flex: -1,
    flexDirection: "row",
    borderBottomWidth: 1,
  },

  input: {
    bottom: Config.base(-1.2),
    paddingBottom: Config.base(1.3)
  },

  left: {
    container: {
      flex: -1,
      width: Config.base(4),
      justifyContent: "flex-end",
    },

    icon: {
      container: {
        flex: -1,
        marginBottom: Config.base(.5),
      },
    },
  },

  right: {
    container: {
      flex: 1,
      marginBottom: Config.base(.5),
    },

    input: {
      flex: -1,
      height: Config.base(4),
    },
  },

  bottomText: {
    grouper: {
      flex: -1,
    },
  },
};