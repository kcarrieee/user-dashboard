import React from 'react'
import { useContext } from 'react'
import Container from '../components/Container/Container'
import Card from '../components/Card/Card'
import MainContext from '../context/mainContext'
import Arrow from '../components/Icons/Arrow'
import { Link } from 'react-router-dom'
import Calendar from '../components/Calendar/Calendar'


const Subpage = () => {
  const { data } = useContext(MainContext) 
  return (
    <section className='subpage'>
      <div>
      <Link to={'/'} className='subpage__heading'><Arrow/>Мои записи</Link>
      <Container>
         {data.map(item => (
          <div key={item.id} className="card_list"><Card {...item}/></div>
        ))}
      </Container>
      </div>
      <div>
        <Calendar/>
      </div>
    </section>
  )
}

export default Subpage