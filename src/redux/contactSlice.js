import axios from "axios";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://6339f23c471b8c3955687d6a.mockapi.io";

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
      
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async ({name, phone}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, phone });
      return response.data;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

  export const contactSlice = createSlice({
    name: 'contacts',

    initialState: {
      contacts: [],
      isLoadig: false,
      error: null,
      filter: '',
    },

    reducers: {
      filterContact(state, action) {
        console.log(action);
        state.filter = action.payload;
      },      
    },

    extraReducers: {
      [fetchContacts.pending](state) {
        state.isLoadig = true;
        state.error = null;
      },
      [fetchContacts.fulfilled](state, action) {
        state.isLoadig = false;
        state.error = null;
        state.contacts = action.payload;
      },
      [fetchContacts.rejected](state, action) {
        state.isLoadig = false;
        state.error = action.payload;
      },


      [addContacts.pending](state) {
        state.isLoadig = true;
      },
      [addContacts.fulfilled](state, action) {
        state.isLoadig = false;
        state.error = null;
        state.contacts.push(action.payload);
      },
      [addContacts.rejected](state, action) {
        state.isLoadig = false;
        state.error = action.payload;
      },


      [deleteContact.pending](state) {
        state.isLoadig = true;
      },
      [deleteContact.fulfilled](state, action) {
        state.isLoadig = false;
        state.error = null;
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
      },
      [deleteContact.rejected](state, action) {
        state.isLoadig = false;
        state.error = action.payload;
      },
    },
  });
  
  export const {  filterContact } = contactSlice.actions;

  export default contactSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async function(_, {rejectWithValue}) {
//     try {
//       const response = await fetch('https://6339f23c471b8c3955687d6a.mockapi.io/contacts');

//       if(!response.ok){
//         throw new Error('Server Error!');
//       }
//       const data = await response.json();
//       return data;
      
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const addContacts = createAsyncThunk(
//   'contacts/addContacts',
//   async function({name, phone}, {rejectWithValue, dispatch}) {
//     try {
//       const contact = {
//         name: name, 
//         phone: phone,
//       };
//       const response = await fetch(`https://6339f23c471b8c3955687d6a.mockapi.io/contacts`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(contact)
//       });

//       if(!response.ok){
//         throw new Error('Can\'t add task. Server error.');
//       }
      
//       const data = await response.json();
//       console.log(data);
//       dispatch(addContact(data));

//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async function(id, {rejectWithValue, dispatch}) {
//     try {
//       const response = await fetch(`https://6339f23c471b8c3955687d6a.mockapi.io/contacts/${id}`, {
//         method: 'DELETE',
//       });

//       if(!response.ok){
//         throw new Error('Can\'t delete task. Server error.');
//       }
      
//       dispatch(removeContact({id}));

//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const setError = (state, action) => {
//   state.isLoadig = false;
//   state.error = action.payload;
// };

//   export const contactSlice = createSlice({
//     name: 'contacts',

//     initialState: {
//       contacts: [],
//       isLoadig: false,
//       error: null,
//       filter: '',
//     },

//     reducers: {
//       addContact(state, action) {
//         state.contacts.push(action.payload);
//       },
//       removeContact(state, action) {
//         state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);

//       },
//       filterContact(state, action) {
//         console.log(action);
//         state.filter = action.payload;
//       },
      
      
//     },
//     extraReducers: {
//       [fetchContacts.pending]: (state) => {
//         state.isLoadig = true;
//         state.error = null;
//       },
//       [fetchContacts.fulfilled]: (state, action) => {
//         state.isLoadig = false;
//         state.contacts = action.payload;
//       },
//       [fetchContacts.rejected]: setError,
//       [deleteContact.rejected]: setError,
//     },
//   });
  
//   export const { addContact, removeContact, filterContact } = contactSlice.actions;
  
//   export default contactSlice.reducer;


