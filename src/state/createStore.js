import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import reducer from "./reducer"

const persistConfig = {
  key: "ad-summum-data",
  storage,
}
const persistedReducer = persistReducer(persistConfig, reducer)
export default preloadedState => createStore(persistedReducer, preloadedState)
