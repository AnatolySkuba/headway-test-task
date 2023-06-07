import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";

import { questionsApi } from "./questions/questionsApi";
import { questionsSlice } from "./questions/questionsSlice";

const questionsPersistConfig = {
  key: "questions",
  storage,
};

const questionsReducer = persistReducer(
  questionsPersistConfig,
  questionsSlice.reducer,
);

export const store = configureStore({
  reducer: {
    [questionsApi.reducerPath]: questionsApi.reducer,
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    questionsApi.middleware,
  ],
});

export const persistor = persistStore(store);
