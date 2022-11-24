import React from "react";
import style from './Card.module.css'
import {CardDescription} from "./CardDescription/CardDescription";
import {CardImage} from "./CardImage/CardImage";

export const Card: React.FunctionComponent<PropsType> = props => {
  return <div className={style.cardContainer}>
    <div className={style.card}>
      <CardDescription portionsCount={props.portionsCount}
                       taste={props.taste}
                       gift={props.gift}
                       specialMessage={props.specialMessage}
      />
      <CardImage weight={props.weight} />
    </div>
  </div>
}

type PropsType = {
  portionsCount: number
  taste: string
  gift: string
  weight: string
  IsDisabled: boolean
  specialMessage: string
}