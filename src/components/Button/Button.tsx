import React from 'react'
import styles from './Button.module.scss'
interface IButton{
  text: string
}
const Button = ({text}:IButton) => {
  return (
   <button className={styles.btn}>{text}</button>
  )
}

export default Button