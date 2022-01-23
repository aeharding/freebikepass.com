import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { FormPayload } from "./Download";

interface FormState {
  /**
   * The form data that the user has entered
   */
  data: FormPayload | undefined;

  /**
   * Whether the user has agreed to the terms
   */
  agreed: boolean;
}

// Define the initial state using that type
const initialState: FormState = {
  data: undefined,
  agreed: false,
};

export const formReducer = createSlice({
  name: "form",
  initialState,
  reducers: {
    /**
     * @param action Action containing whether the user has agreed or not
     */
    agreeChange: (state, action: PayloadAction<boolean>) => {
      state.agreed = action.payload;
    },

    /**
     * @param action Action containing form payload from user entry
     */
    dataReceived: (state, action: PayloadAction<FormPayload>) => {
      state.data = action.payload;
    },

    clear: () => initialState,
  },
});

export const { agreeChange, dataReceived, clear } = formReducer.actions;

export const form = (state: RootState) => state.form.data;
export const agreed = (state: RootState) => state.form.agreed;

export default formReducer.reducer;
