import { createWrapper } from "next-redux-wrapper";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer, { rootSaga } from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();
// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [sagaMiddleware],
// });

// sagaMiddleware.run(rootSaga);

const configureStores = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper(configureStores);
export type RootState = ReturnType<typeof rootReducer>;
