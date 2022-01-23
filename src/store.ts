import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/form/formSlice";

export const store = createStore();

export function createStore() {
  return configureStore({
    reducer: {
      form: formReducer,
    },
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
