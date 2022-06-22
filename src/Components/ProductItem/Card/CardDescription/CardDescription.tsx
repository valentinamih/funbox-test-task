import React from "react";
import style from "./CardDescription.module.css";

export  const CardDescription: React.FunctionComponent<PropsType> = props => {
  return <div className={style.cardDescription}>
    <p>Сказочное заморское яство</p>
    <h2>Нямушка</h2>
    <h3>c {props.taste}</h3>
    <span>{props.portionsCount} порций</span>
    <span>{props.gift} в подарок</span>
  </div>
}

type PropsType = {
  portionsCount: number
  taste: string
  gift: string
}