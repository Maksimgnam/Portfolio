
import './Contacts.css';
import { useEffect } from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'



const Contacts = () => {
    const ContactCards = [
        { id: 1, name: 'Linkedin', link: 'https://www.linkedin.com/in/maksym-hnap-45575b244' },
        { id: 2, name: 'Instagram', link: 'https://www.linkedin.com/in/maksym-hnap-45575b244' },
        { id: 3, name: 'Github', link: 'https://www.linkedin.com/in/maksym-hnap-45575b244' },
        { id: 4, name: 'Telegram', link: 'https://www.linkedin.com/in/maksym-hnap-45575b244' },
        { id: 5, name: 'Email', link: 'https://www.linkedin.com/in/maksym-hnap-45575b244' },

    ]
    useEffect(() => {
        AOS.init({ duration: 1500 })
    }, [])

    return (

        <div className='Contacts'>
            <div className="ContactsContainer">
                <span className='ContactsName' data-aos='fade-left'>Contact me in</span>



                <div className="ContactsCards" data-aos='fade-right'>
                    {
                        ContactCards.map(contact => (
                            <div className='Contactcard'>

                                <a href={contact.link}>
                                    <button className='ContactBtn'>{contact.name}</button>
                                </a>
                            </div>



                        )



                        )
                    }



                </div>
                <div className="line" ></div>



            </div>

        </div>
    )
}
export default Contacts;
