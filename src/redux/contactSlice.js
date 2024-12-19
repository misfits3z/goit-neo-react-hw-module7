import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const handlePending = (state) => {
  state.isLoading = true;
};


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null
  }, 

  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, handlePending)
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload)
    })
  },
})

    // addContact: (state, action) => {
    //   state.items.push(action.payload); // додаємо контакт
    // },
    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(
    //     (contact) => contact.id !== action.payload // видаляємо контакт
    //   );
    // },


export const selectContacts = (state) => state.contacts.items

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
