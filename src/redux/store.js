import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from "redux-persist";

const middleware = [thunk];

const persistConfig = {
  // Root
  key: "root-1",
  // Storage Method (React Native)
  storage: AsyncStorage,

  // Whitelist (Save Specific Reducers)
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: [
  //     "auth"
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware: Redux Persist Persisted Reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // options like actionSanitizer, stateSanitizer
  })
  : compose;

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

// export const store = createStore(persistedReducer)
// export const persistor = persistStore(store)

const persistor = persistStore(store);

// // Exports
export { store, persistor };
