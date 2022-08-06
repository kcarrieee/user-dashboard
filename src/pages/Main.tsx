import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card/Card'
import Map from '../components/Map/Map'
import MainContext from '../context/mainContext'

const Main = () => {
  const { data } = useContext(MainContext) 

  return (
    <>
      <div className='appoinments'>
      <h3>Записи на прием</h3>
      <section className='appoinments__list'>
        <div className='cardList'>
        {data.map(item => (
          <Card key={item.id} {...item}/>
        )).slice(0,2)}
        </div>
        <div className='appoinments__list__more'>
          <p>Еще {data.length - 2} записи</p>
          <Link to='/appointment' className='see-moreLink'>Подробнее</Link>
        </div>
      </section>
    </div>
    <Map/>
    </>
  )
}

export default Main