/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// PACKAGE IMPORTS
// ----------------------------------------
import { Actions } from "react-native-router-flux";


/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  METHODS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// VARIABLES
// ----------------------------------------

  let lastMoveTime = 0;


// ----------------------------------------
// MAIN METHODS
// ----------------------------------------

  const push = (destination, params) => {
    const time = Date.now();

    if (Actions.currentScene === destination && (time - lastMoveTime) < 500) {
      return null;
    }
   
    lastMoveTime = time;
    Actions.push(destination, {navData: params});
  }

// ----------------------------------------

  const replace = (destination, params) => {
    const time = Date.now();

    if (Actions.currentScene === destination && (time - lastMoveTime) < 500) {
      return null;
    }
   
    lastMoveTime = time;
    Actions.replace(destination, {navData: params});
  }


/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  EXPORT
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

export default {
	... Actions,
  push,
}