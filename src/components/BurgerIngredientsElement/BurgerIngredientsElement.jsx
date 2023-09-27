import React from "react";
import styles from './burger-ingredients-element.module.css';
import Counter from "../BurgerIngredientsElementCounter/Counter";
import moneyPath from '../BurgerIngredientsElement/images/stone-money.svg';


const BurgerIngredientsElement = ({props, ingredientOpenModal}) => {

  return (
    <>
      {props.map((item) => (
        <li className={styles.card} key={item._id} onClick={() => ingredientOpenModal()}>
          <div>
            <img className={styles.image} src={item.image} alt=''/>
          </div>
          <div className={styles.price}>{item.price} <img src={moneyPath} alt=''/></div>
          <div className={styles.name}>{item.name}</div>
          <Counter count={1} size="default" extraClass="m-1" />
        </li>
      ))}
    </>
  )
}

export default BurgerIngredientsElement;