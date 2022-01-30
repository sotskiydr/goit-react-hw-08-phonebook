import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { actions } from './';
import { fetchContacts, addContact, deleteContact } from './operations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload.contactId),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.fulfilled]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: () => null,
});

const filter = createReducer('', {
  [actions.filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  entities,
  isLoading,
  error,
  filter,
});
