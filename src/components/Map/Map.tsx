import React from 'react'
import AddIcon from '../Icons/AddIcon'
import ClockIcon from '../Icons/ClockIcon'
import LabIcon from '../Icons/LabIcon'
import ReportIcon from '../Icons/ReportIcon'
import styles from './Map.module.scss'

const Map = () => {
  return (
   <section className={styles.map}>
    <h2>Электронная карта</h2>
    <ul className={styles.map__list}>
        <li className={styles.item} >
            <div className={styles.map__image} >
                <ReportIcon/>
            </div>
            <div className={styles.content}>
            <h3>Информация о пациенте</h3>
            <div className={styles.map__list__bullets} >
                <p className={styles.map__list__bullets__text}>Ваши личные данные</p>
                <p className={styles.map__list__bullets__text}>Рекомендации врачей</p>
                <p className={styles.map__list__bullets__text}>История болезней</p>
            </div>
            </div>
        </li>
        <li className={styles.item}>
             <div className={styles.map__image} >
              <LabIcon/>
            </div>
            <div className={styles.content}>
            <h3>Результаты анализов</h3>
            <div  className={styles.cardText}><p>Вы можете узнать здесь результаты своих анализов</p></div>
            </div>
        </li>
        <li className={styles.item}>
             <div className={styles.map__image} >
                <AddIcon/>
            </div>
            <div className={styles.content}>
            <h3>Добавить  информацию</h3>
            <div  className={styles.cardText}><p>Добавляйте в свою электронную медицинскую карту новые данные</p></div>
            </div>
        </li>
        <li className={styles.item}>
             <div className={styles.map__image} >
               <ClockIcon/>
            </div>
            <div className={styles.content}>
            <h3>История приемов</h3>
            <div  className={styles.cardText}><p>Вся информация о полученных услугах за все время хранится здесь</p></div>
            </div>
        </li>
    </ul>
   </section>
  )
}

export default Map