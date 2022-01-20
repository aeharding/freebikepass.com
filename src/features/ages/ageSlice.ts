import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { AppDispatch } from "../../store";
import { debounce } from "lodash";
import notEmpty from "../../helpers/notEmpty";

type AgeResult =
  // component has requested an age, to be batched in next bulk request
  | "pending"

  // the age (finished resolving)
  | number

  // API request failed
  | "failed"

  // Returned by Agify when they could not estimate the age, or with api failure
  | null;

interface CharactersState {
  /**
   * Keyed by character's **first** name only
   */
  agesByName: Record<string, AgeResult>;
}

// Define the initial state using that type
const initialState: CharactersState = {
  agesByName: {},
};

export const agesReducer = createSlice({
  name: "ages",
  initialState,
  reducers: {
    /**
     * @param action Action containing payload as the first name of the character
     */
    ageLoading: (state, action: PayloadAction<string>) => {
      if (state.agesByName[action.payload] === undefined) {
        state.agesByName[action.payload] = "pending";
      }
    },

    /**
     * @param action Action containing payload of bulk first names of characters
     */
    agesFailed: (state, action: PayloadAction<string[]>) => {
      action.payload.forEach((name) => {
        state.agesByName[name] = "failed";
      });
    },
  },
});

export const { ageLoading, agesFailed } = agesReducer.actions;

/**
 * Bulk call Agify API with any names marked 'pending' in the dictionary.
 *
 * Debounce to give all components a chance to request an age for a name
 * before rolling everything up into one request.
 */
const debouncedFetchAges = debounce(
  async (dispatch: AppDispatch, getState: () => RootState) => {
    // Get all the names that are marked 'pending' for the request
    const ages = Object.entries(getState().ages.agesByName)
      .map(([key, value]) => (value === "pending" ? key : null))
      .filter(notEmpty);

    if (!ages.length) return;
  },
  25
);

/**
 * @param name The character's first name
 */
export const getAge =
  (name: string) =>
  async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(ageLoading(name));
    debouncedFetchAges(dispatch, getState);
  };

export const agesByName = (state: RootState) => state.ages.agesByName;

export default agesReducer.reducer;
