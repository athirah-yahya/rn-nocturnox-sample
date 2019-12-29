/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  IMPORTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

// ----------------------------------------
// LOCAL IMPORTS
// ----------------------------------------
import {
  MapperService,
  DummyService,
} from "@core-services";
import App from "@app-configs/App";


/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  CONSTANTS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
const dataMode = App.dataMode;


/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  METHODS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */
export function request(api, param, onSuccess, preFunction) {
  param = MapperService.mapRequestData(api, param)

  if (dataMode === "DUMMY") {
    return (dispatch, getState) => {
      if (preFunction) {
        preFunction(dispatch);       
      }

      DummyService.request(api, param)
        .then(response => onSuccess(response, dispatch));
    };
  }
}

// ----------------------------------------

export function direct(api, param, onSuccess) {
  return (dispatch, getState) => {
    onSuccess(null, dispatch);
  };
}
