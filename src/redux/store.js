
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./contactsSlice";
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

// import storage from 'redux-persist/lib/storage'; This is the correct one

const storage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),
    setItem: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
};

const contactPersistConfig = {
    key: "contactValue",
    storage,
    whitelist: ["contact"],
};

const pContactReducer = persistReducer(
    contactPersistConfig,
    contactReducer
);

export const store = configureStore({
    reducer: {
        contacts: pContactReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});

export const persistor = persistStore(store);