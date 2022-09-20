import React, {useState} from "react";
import { nanoid } from "nanoid";
import s from './ContactForm.module.css';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = e => {
      const { name, value } = e.currentTarget;

      switch (name) {
        case 'name':
          setName(value);
          break;
  
        case 'number':
          setNumber(value);
          break;
  
        default:
          break;
      }
  };

  const handleSubmit = e => {
      e.preventDefault();
      onSubmit({ name: name, number: number });
      reset();
  };

  const reset = () => {
      setName('');
      setNumber('');
  };

    return (
      <form onSubmit={handleSubmit} className={s.form}>
          <label htmlFor={nameInputId} className={s.label}>Name</label>
          <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              id = {nameInputId}
              onChange={handleChange}
              className={s.input}
          />

          <label htmlFor={numberInputId} className={s.label}>Number</label>
          <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              id = {numberInputId}
              onChange={handleChange}
              className={s.input}
          />
          <button type="submit" className={s.button}>Add contact</button>
     </form>
    );
}







// import React, {useState} from "react";
// import { nanoid } from "nanoid";
// import s from './ContactForm.module.css'

// export function ContactForm({ onSubmit }) {
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');
   
//     const nameInputId = nanoid();
//     const numberInputId = nanoid();

//     const handleChange = e => {
//         const { name, value } = e.currentTarget;

//         switch (name) {
//           case 'name':
//             setName(value);
//             break;
    
//           case 'number':
//             setNumber(value);
//             break;
    
//           default:
//             break;
//         }
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         onSubmit({ name: name, number: number });
//         reset();
//     };

//     const reset = () => {
//         setName('');
//         setNumber('');
//     };

//       return (
//         <form onSubmit={handleSubmit} className={s.form}>
//             <label htmlFor={nameInputId} className={s.label}>Name</label>
//             <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 value={name}
//                 id = {nameInputId}
//                 onChange={handleChange}
//                 className={s.input}
//             />

//             <label htmlFor={numberInputId} className={s.label}>Number</label>
//             <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 value={number}
//                 id = {numberInputId}
//                 onChange={handleChange}
//                 className={s.input}
//             />
//             <button type="submit" className={s.button}>Add contact</button>
//        </form>
//       );
//   }

