import React from 'react'
import styles from './Container.module.scss';

interface IProp{
   children: React.ReactNode
}
const Container = ({children}:IProp) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Container