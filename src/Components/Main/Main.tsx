import React from "react";
import style from './Main.module.css'
import {ProductItem} from "../ProductItem/ProductItem";

export const Main: React.FunctionComponent<PropsType> = props => {
  return <main className={style.main}>
    <h1 className={style.header}>Ты сегодня покормил кота? </h1>
    <div className={style.cardsContainer}>
      <ProductItem portionsCount={10}
                   taste={'фуа-гра'}
                   gift={'мышь'}
                   weight={'0,5'}
                   description={'Печень утки разварная с артишоками.'}
                   IsDisabled={false}
                   specialMessage={''}/>
      <ProductItem portionsCount={40}
                   taste={'рыбой'}
                   gift={'2 мыши'}
                   weight={'2'}
                   description={'Головы щучьи с чесноком да свежайшая сёмгушка.'}
                   IsDisabled={false}
                   specialMessage={''}/>
      <ProductItem portionsCount={100}
                   taste={'курой'}
                   gift={'5 мышей'}
                   weight={'5'}
                   description={'Филе из цыплят с трюфелями в бульоне.'}
                   IsDisabled={true}
                   specialMessage={'заказчик доволен'}
      />
    </div>
  </main>
}

type PropsType = {}
