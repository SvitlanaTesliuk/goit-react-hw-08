import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", contact);
    toast.success("Contact added successfully!");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${id}`);
    toast.success("Contact deleted successfully!");
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);