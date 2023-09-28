import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await fetch(
      '/https://65140b928e505cebc2ea9bcc.mockapi.io/contacts/'
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contactData => {
    try {
      const response = await fetch(
        '/https://65140b928e505cebc2ea9bcc.mockapi.io/contacts/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const response = await fetch(
        `/https://65140b928e505cebc2ea9bcc.mockapi.io/contacts//${contactId}`,
        {
          method: 'DELETE',
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return contactId;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  contacts: [],
  filter: '',
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.err = undefined;
        state.contacts = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.err = undefined;
        state.contacts.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.err = undefined;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export const { updateFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
