import React from 'react'
import styles from './Header.module.scss'
import { images } from '../../constants'
import Search from '../Icons/Search'
import Bell from '../Icons/Bell'
import Eye from '../Icons/Eye'
import OpenUp from '../Icons/OpenUp'


const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.header__heading}>Мой профиль</h2>
      <div className={styles.header__actions}>
        <Search/>
        <Bell/>
        <Eye/>
        <div className={styles.header__actions__profile}><img src={images.profilePicture} alt="профиль" /></div>
        <OpenUp/>
      </div>
    </header>
  )
}

export default Header