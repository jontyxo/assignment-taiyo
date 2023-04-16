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
            localStorage.setItem('contacts', JSON.stringify(state));
            const s=localStorage.getItem('contacts');
         
           },
           deleteContact: (state, action):void =>{
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
           },
           editContact:(state, action) =>{
            const { id } = action.payload;
            
            const contactIndex = state.contacts.findIndex((contact) => contact.id === id);
            if (contactIndex !== -1 && state.contacts[contactIndex]) {
              state.contacts[contactIndex].firstName = action.payload.fname;
              state.contacts[contactIndex].lastName = action.payload.lname;
            }
          }
    }
})

export const {addContact,deleteContact,editContact} =contactSlice.actions;
export default contactSlice.reducer;