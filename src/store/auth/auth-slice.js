import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  refreshing: false,
  errorLog: false,
  errorReg: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registration.fulfilled](state, action) {
      if (action.payload) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.errorReg = false;
      } else {
        state.errorReg = true;
      }
    },
    [authOperations.logIn.fulfilled](state, action) {
      if (action.payload) {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.errorLog = false;
      } else {
        state.errorLog = true;
      }
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.refreshing = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.refreshing = false;
      state.isLoggedIn = true;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.refreshing = false;
    },
  },
});

export default authSlice.reducer;
