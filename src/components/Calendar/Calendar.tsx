import React, { useState } from 'react'
import styles from './Calendar.module.scss'
import { startOfToday, format, endOfWeek, isToday, isEqual, parse} from 'date-fns'
import { eachDayOfInterval, endOfMonth, isSameMonth} from 'date-fns/esm'
import ArrowRight from '../Icons/ArrowRight'
import ArrowLeft from '../Icons/ArrowLeft'



const Calendar = () => {
 
  const today = startOfToday()
  const [selectedDay, setSelectedDay] = useState(today)
  //eslint-disable-next-line
  const [currMonth, setCurrMonth] = useState(format(today,'MMM-yyyy'))
  const firstDayOfCurrentMonth= parse(currMonth, 'MMM-yyyy', new Date())
  const newDays = eachDayOfInterval({start: firstDayOfCurrentMonth, end: endOfWeek(endOfMonth(firstDayOfCurrentMonth))})

  return (
    <div className={styles.container}>
    <div className={styles.month__title}>
      <button className={styles.arrow} ><ArrowLeft/></button> <p>{format(firstDayOfCurrentMonth, 'MMM yyyy')}</p> <button className={styles.arrow}> <ArrowRight/></button>
    </div>
    <div className={styles.weekday}>
      <p>Пн</p>
      <p>Вт</p>
      <p>Ср</p>
      <p>Чт</p>
      <p>Пт</p>
      <p>Сб</p>
      <p>Вс</p>
    </div>
    <div className={styles.grid}>
      {newDays.map((el, index)=> (<div key={el.toString()} >
        <button 
            onClick={()=> setSelectedDay(el)}
            className={`
            ${styles.general} 
            ${(index === 14 || index === 30) ? styles.popUp : '' }
            ${isSameMonth(el,today) && styles.currentMonth  }
            ${isEqual(el, selectedDay) && isToday(el) && styles.currentDay}
            ${isEqual(el, selectedDay) && !isToday(el) && styles.currentDay}
            ${!isEqual(el, selectedDay) && !isToday(el) && !isSameMonth(el,today) && styles.gray}`}>
          <time dateTime={format(el, 'yyyy-MM-dd')}>
          {format(el, 'd')}
          </time>
        </button>
      </div>))}
      </div>
    </div>
  )
}

export default Calendar