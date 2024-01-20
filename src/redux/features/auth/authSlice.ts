import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

type TAuthState = {
  user: null | object;
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const persistConfig = {
  key: "ph-university-auth",
  storage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export const persistedAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
export default authSlice.reducer;
