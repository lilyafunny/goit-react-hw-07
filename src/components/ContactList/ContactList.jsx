import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

import { useSelector } from 'react-redux'

const ContactList = () => {

    const contacts = useSelector(state => state.contacts.items);

    const filters = useSelector(state => state.filters.name);

    const visible = contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()));


    return (
        <>
            <ul>
                {visible.map((contact) => (
                    <li className={s.list} key={contact.id}>
                        <Contact data={contact} />
                    </li>
                ))}
            </ul>
        </>
    )

}

export default ContactList