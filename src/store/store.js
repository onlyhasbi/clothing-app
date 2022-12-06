import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";
// import thunk from "redux-thunk";

const isProduction = process.env.NODE_ENV !== "production";

// const middlewares = [isProduction && logger, thunk].filter(Boolean);
const sagaMiddlewares = createSagaMiddleware();
const middlewares = [isProduction && logger, sagaMiddlewares].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancer =
  (isProduction && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const composeEnhancers = composeEnhancer(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddlewares.run(rootSaga);

export const persistor = persistStore(store);
