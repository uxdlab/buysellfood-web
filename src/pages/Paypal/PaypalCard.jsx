import React from 'react'
import style from './paypal.module.css'
import { Button } from '../../components/Buttons/Button'

export const PaypalCard = ({
  heading,
  text1,
  text2,
  text3,
  children,
  planDays
}) => {
  return (
    <div className={style.paypal_card}>
      <div className={style.days_text}>{planDays}</div>
      <div className={style.heading}>{heading}</div>
      <div className={style.sub_text}> {text1}</div>
      <div className={`${style.sub_text} my-2`}>{text2}</div>
      <div className={style.sub_text}>{text3}</div>

      {children}
    </div>
  )
}
