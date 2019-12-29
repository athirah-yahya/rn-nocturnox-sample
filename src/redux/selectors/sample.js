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
import { is } from "immutable";
import { createSelectorCreator, defaultMemoize } from "reselect";
const createSelector = createSelectorCreator(defaultMemoize, is);


/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  STATES
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

const samples = (state, props) => state.sample.get("list");



/*
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 *  SELECTORS
 * ---------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------
 */

export const list = createSelector(
  [samples],
  (items) => items.toJS()
);