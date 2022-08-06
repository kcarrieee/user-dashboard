import React from 'react'
import { IData } from '../../types/shared'
import Button from '../Button/Button'
import styles from './Card.module.scss';


const Card = ({ dayAndTime, hospital, doctorRef}: IData) => {
  return (
    <div className={styles.card}>
        <p className={styles.card__text}>{dayAndTime}</p>
        <p className={styles.card__hospital}>{hospital}</p>
      <div className={styles.card__doctor}>
        <div className={styles.card__doctor__info}>
        <img src={doctorRef.image} alt="доктор" />
        <div>
        <p className={styles.card__doctor__name}>{doctorRef.name}</p>
        <p className={styles.card__doctor__field}>{doctorRef.field}</p>
        </div>
        </div>
        <Button text='Отменить'/>
      </div>
    </div>
  )
}

export default Card