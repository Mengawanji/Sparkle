import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import type { PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer";
import { cartListener } from "./listeners/cartListener";
import { wishlistListener } from "./listeners/wishlistListener";

/* ---------- Persist Config ---------- */

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* ---------- Store ---------- */

export const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });

    return middleware
      .prepend(cartListener.middleware)
      .prepend(wishlistListener.middleware);
  },
});

/* ---------- Persistor ---------- */

export const persistor = persistStore(store);

/* ---------- Types ---------- */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;