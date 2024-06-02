import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import application from "./slice/application/reducer";
import applicationSlice from "./slice/applicationSlice/applicationSlice";
import profileSlice from "./slice/applicationSlice/profileSlice";

const authPersistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  application,
  applicationSlice,
  profileSlice,
});

const persistedReducer = persistReducer(authPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
