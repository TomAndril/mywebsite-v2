import { configureStore } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import { persistStore } from "redux-persist"
import rebuilderReducer from "../sections/Tools/rebuilder/reducers"

const persistConfig = {
  key: "rebuilder",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rebuilderReducer)

export const store = configureStore({
  reducer: {
    rebuilder: persistedReducer,
  },
  middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
