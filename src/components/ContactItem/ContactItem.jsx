import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { useDispatch } from "react-redux";
import { removeContact } from "redux/contactSlice";

const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();

    return (

            <li className={s.contactItem}>
                {name}: {number}
                <button type='button' className={s.button} onClick={() => dispatch(removeContact({id}))}>Delete</button>
           </li>
        )
} 

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};






// import PropTypes from 'prop-types';
// import s from './ContactItem.module.css'

// const ContactItem = ({id, name, number, onClick}) => {
//     return (
//             <li className={s.contactItem} key={id}>
//                 {name}: {number}
//                 <button type='button' className={s.button} onClick={() => onClick(id)}>Delete</button>
//             </li>
//         )
// } 

// export default ContactItem;

// ContactItem.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
// };