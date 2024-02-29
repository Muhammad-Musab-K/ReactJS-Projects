import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import UserSlice from "./Slices/UserSlice";
// import ProtectedRoute from "./Slices/ProtectedRoute";
import AddSlice from "./Slices/AddSlice";
import SignUpSlice from "./Slices/SignUpSlice";
import SignInSlice from "./Slices/SignInSlice";
import CurdSlice from "./Slices/CurdSlice";
import SignOutSlice from "./Slices/SignOutSlice";

const rootReducer = combineReducers({
    "users": UserSlice,
    "newuser": AddSlice,
    "signUpUser": SignUpSlice,
    "signInUser": SignInSlice,
    "signOutUser": SignOutSlice,
    "updateUser": CurdSlice
});

const persistConfig = {
    key: 'EmployeeSystem',
    storage,

};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
});

const persistor = persistStore(store);

export { store, persistor };
