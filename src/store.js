import { createStore, applyMiddleware } from "redux";
import {
  persistStore,
  persistReducer,
  persistCombineReducers
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { AsyncStorage } from "react-native";

const persistConfig = {
  key: "root",
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
