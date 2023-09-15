import React, {useState} from 'react'
import styles from './components/app/app.module.css'
import AppHeader from './components/AppHeader/AppHeader.module'
import BurgerIngredients from './components/BurgerIngredients/BurgerIngredients'
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor.module";
import Modal from "./components/Modal/Modal.module";

function App() {

  // const [modalActive, setModalActive] = useState(true)

  return (
    <div className={styles.app}>
      <AppHeader/>
      <section>
        <div className={styles.container}>
          <h2 className={styles.title}>Соберите бургер</h2>
            <div className={styles.body}>
              <BurgerIngredients/>
              <BurgerConstructor/>
            </div>
        </div>
      </section>
      {/*<Modal active={modalActive} setActive={setModalActive}/>*/}
    </div>
  )
}

export default App;
