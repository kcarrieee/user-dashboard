import React, { useState } from 'react'
import styles from './Sidebar.module.scss'
import Heart from '../Icons/Heart';
import Doctors from '../Icons/Doctors';
import Speak from '../Icons/Speak';
import Test from '../Icons/Test';
import Book from '../Icons/Book';

const sibarLink = [
    {
        image: <Heart/>,
        text: 'Профиль',
    },
    {
        image: <Doctors/>,
        text: 'Врачи и клиники',
    },
    {
        image: <Speak/>,
        text: 'Сообщения',
    },
     {
        image: <Test/>,
        text: 'Тестирование',
    },
     {
        image: <Book/>,
        text: 'Полезно знать',
    },
    

]
const Links = () => {
    const [active, setActive] = useState(0)
    const onClick = (i: number) => {
        setActive(i)
    }
    
  return (
    <>
    {sibarLink.map((link, i) => (
        <li key={i} className={`${styles.link} ${active === i ? styles.activeLink : ''}`} onClick={()=>onClick(i)}>
        {link.image}
        <p>{link.text}</p>
        </li>
    ))}
    </>
    
  )
}

export default Links