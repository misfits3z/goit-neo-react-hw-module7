import { useSelector } from "react-redux"
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import {selectFilteredContacts } from "../../redux/contactSlice"


export default function ContactList (){
    const nameFilter = useSelector(selectFilteredContacts)
   

    return(
        <div className={css.contacts}>
            <ul className={css.list}>
                {nameFilter.map(({id, name, number}) => (
                    <Contact key={id} id={id} name={name} number={number}  />

                ))}
               
            </ul>
        </div>
    )
}