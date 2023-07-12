import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginWithGoogle, onSingIn } from "../firebaseConfig";

export const login = createAsyncThunk(
  "login",
  async (argument, { rejectWithValue }) => {
    let res = await onSingIn(argument);
    if (res.user.accessToken) {
      return res.user;
    } else {
      rejectWithValue("Ocurrió un error");
    }
  }
);

export const loginGoogle = createAsyncThunk(
  "loginGoogle",
  async (_, { rejectWithValue }) => {
    let res = await loginWithGoogle();
    if (res.user.accessToken) {
      return res.user;
    } else {
      rejectWithValue("Ocurrió un error");
    }
  }
);
