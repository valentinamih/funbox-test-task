import React from "react";
import style from './Main.module.css'
import {ProductItem} from "../ProductItem/ProductItem";

export const Main: React.FunctionComponent<PropsType> = props => {
  return <main>
    <h1 className={style.header}>Ты сегодня покормил кота? </h1>
    <ProductItem portionsCount={10}
                 taste={'фуа-гра'}
                 gift={'мышь'}
                 weight={'0,5'}
                 description={'Печень утки разварная с артишоками'}
                 IsDisabled={false} />
  </main>
}

type PropsType = {}
