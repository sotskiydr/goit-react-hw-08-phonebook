import { createAsyncThunk } from '@reduxjs/toolkit';
import * as fetchService from './services';

// console.log(getToken());
// const getHeaders = () => {};

export const fetchContacts = createAsyncThunk(
  'fetchContactsSuccess',
  async (token, { rejectWithValue }) => {
    try {
      if (!token) return;
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await fetchService.fetchContacts(config);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = { name, number };
      const response = await fetchService.addContacts(contact);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await fetchService.deleteContacts(contactId);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
