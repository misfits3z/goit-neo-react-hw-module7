import { useSelector, useDispatch } from "react-redux"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { selectContacts } from "../../redux/contactSlice"
import { selectNameFilter } from '../../redux/filtersSlice'


export default function ContactList (){
    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter)
    const dispatch = useDispatch()


    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase()))

    return(
        <div className={css.contacts}>
            <ul className={css.list}>
                {filteredContacts.map(({id, name, number}) => (
                    <Contact key={id} id={id} name={name} number={number}  />

                ))}
               
            </ul>
        </div>
    )
}