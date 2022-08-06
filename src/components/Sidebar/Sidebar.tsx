import React from 'react'
import styles from './Sidebar.module.scss'
import { images } from '../../constants'
import Button from '../Button/Button'
import Links from './Links'
import Info from '../Icons/Info'




const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <p className={styles.sidebar__logo}>Логотип</p>
        <ul className={styles.sidebar__links}>
          <Links/>
        </ul>
        <Button text={'Подать заявку'}/>
      </div>
      <footer className={styles.sidebar__footer}>
        <div><Info/><p>Помощь</p></div>
        <img src={images.logo} alt="логотип" />
      </footer>
      </div>
  )
}

export default Sidebar