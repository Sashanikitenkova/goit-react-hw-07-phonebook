import { ContactForm } from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

export function App() {
  
    return (
        <div>

        <h1>Phonebook</h1>
         <ContactForm />

         <h2>Contacts</h2>

         <Filter />

        <ContactList /> 

        </div>
    );
};







// import React, {useState, useEffect} from "react";
// import { ContactForm } from "./ContactForm/ContactForm";
// import { nanoid } from "nanoid";
// import ContactList from "./ContactList/ContactList";
// import Filter from "./Filter/Filter";


// export function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     const constant = localStorage.getItem('contacts');
//     const parsedConstant = JSON.parse(constant);

//     if(parsedConstant) {
//       setContacts(parsedConstant);
//     }
//   }, []);

//   useEffect(() => {
//       localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const formSubmit  = ({name, number}) => {
//     const findName = contacts.find(contact => 
//       contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (findName) {
//       return alert(`${name} is already in contacts.`);
//     };

//     const findNumber = contacts.find(contact => 
//       contact.number === number
//     );
//     if (findNumber) {
//       return alert(`This phone number is already in use.`);
//     };

//     setContacts(contacts => [...contacts, { id: nanoid(), name, number }]);
//   }

//   const deleteContact = contactId => {
//     setContacts(contacts => 
//       contacts.filter(contact => contact.id !== contactId));
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const filterContacts = () => {
//     return contacts.filter(constant =>
//       constant.name.toLowerCase().includes(filter.toLowerCase()));
//   };

//     return (
//         <div>
//           <h1>Phonebook</h1>
//           <ContactForm onSubmit={formSubmit}/>
          
//           <h2>Contacts</h2>

//           <Filter 
//              filter={filter}
//              onChange={changeFilter}
//           />

//           <ContactList 
//              contacts={filterContacts()}
//              onClick={deleteContact}
//           />
           
//         </div>
//     );
// };







