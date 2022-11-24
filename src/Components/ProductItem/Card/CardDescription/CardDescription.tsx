import React from "react";
import style from "./CardDescription.module.css";

export  const CardDescription: React.FunctionComponent<PropsType> = props => {
  return <div className={style.cardDescription}>
    <p>Сказочное заморское яство</p>
    <h2 className={style.name}>Нямушка</h2>
    <h3 className={style.taste}>c {props.taste}</h3>
    <span>{props.portionsCount} порций <br/>
      {props.gift} в подарок <br/>
      {props.specialMessage}
    </span>
  </div>
}

type PropsType = {
  portionsCount: number
  taste: string
  gift: string
  specialMessage: string
}