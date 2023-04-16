import { createSlice } from "@reduxjs/toolkit";
interface Contact {
    id:number;
    firstName: string;
    lastName: string;
   }
   interface ContactsState {
    contacts: Contact[];
  
  }
  const initialState: ContactsState = {
    contacts: []
  };
export const contactSlice = createSlice({
    name:"contact", //name of the store
    initialState,
    reducers:{
        addContact: (state,action): void=>{
            state.contacts.push({
                id:state.contacts.length,
                firstName:action.payload.fname,
                lastName:action.payload.lname
            })
            // localStorage.setItem('contacts', JSON.stringify(state));
           },
           deleteContact: (state, action):void =>{
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
           }
    }
})

export const {addContact,deleteContact} =contactSlice.actions;
export default contactSlice.reducer;