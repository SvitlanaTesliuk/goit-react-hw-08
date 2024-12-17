import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const token = {
  set(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
  unset() {
    delete axios.defaults.headers.common["Authorization"];
  },
};

export const register = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
  try {
    const { name, email, password } = credentials;

    if (!name || !email || !password) {
      return thunkAPI.rejectWithValue("Name, email, and password are required.");
    }

    if (password.length < 7) {
      return thunkAPI.rejectWithValue("Password must be at least 7 characters long.");
    }

    console.log("Sending credentials:", credentials);

    const { data } = await axios.post("/users/signup", { name, email, password });

    token.set(data.token);

    return data;
  } catch (error) {
    console.error("Registration failed:", error.response?.data || error.message);
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Registration failed. Please try again."
    );
  }
});

export const login = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials); 
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout"); 
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) {
    return thunkAPI.rejectWithValue("No token found");
  }

  try {
    token.set(persistedToken);
    const { data } = await axios.get("/users/current"); 
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export { token };