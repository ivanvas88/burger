import React from "react";
import styles from './app.module.css'
import AppHeader from '../AppHeader/AppHeader'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import ModalOrder from "../Modal/ModalOrder/ModalOrder";
import ModalIngredient from '../Modal/ModalIngredient/ModalIngredient'
import {useState} from "react";

function App() {

const [state, setState] = useState(false)
const [stateIngredient, setStateIngredient] = useState(false)

const btnOpenModal = () => {
  setState(true)
}

  const ingredientOpenModal = () => {
    setStateIngredient(true)
  }

  const btnCloseModal = () => {
    setState(false)
    setStateIngredient(false)
  }

  return (
    <div className={styles.app}>
      <AppHeader/>
      <section>
        <div className={styles.container}>
          <h2 className={styles.title}>Соберите бургер</h2>
          <div className={styles.body}>
            <BurgerIngredients ingredientOpenModal={ingredientOpenModal}/>
            <BurgerConstructor btnOpenModal={btnOpenModal}/>
          </div>
        </div>
      </section>
      { state && <ModalOrder btnCloseModal={btnCloseModal}/> }
      { stateIngredient && <ModalIngredient btnCloseModal={btnCloseModal}/> }
    </div>
  )
}

export default App;
