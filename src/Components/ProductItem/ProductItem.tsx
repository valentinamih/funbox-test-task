import React from "react";
import style from './ProductItem.module.css'
import {Card} from "./Card/Card";

export const ProductItem: React.FunctionComponent<PropsType> = props => {
  return <section className={style.productItem}>
    <Card portionsCount={props.portionsCount} taste={props.taste} gift={props.gift} weight={props.weight} IsDisabled={props.IsDisabled}/>
    {props.IsDisabled ? <p>Печалька, с курой закончился.</p> : null}
  </section>
}

type PropsType = {
  portionsCount: number
  taste: string
  gift: string
  weight: string
  description: string
  IsDisabled: boolean
}