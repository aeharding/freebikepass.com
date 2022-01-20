import { configureStore } from "@reduxjs/toolkit";
import agesReducer from "./features/ages/ageSlice";

export const store = createStore();

export function createStore() {
  return configureStore({
    reducer: {
      ages: agesReducer,
    },
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
