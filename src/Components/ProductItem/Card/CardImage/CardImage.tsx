import React from "react";
import style from './CardImage.module.css'

export const CardImage: React.FunctionComponent<PropsType> = props => {
  return <div className={style.cardImage}>
    <div className={style.weight}/>
  </div>
}

type PropsType = {
  weight: string
}