import React from 'react'
import styles from './app-header.module.css'
import burgerPath from '../AppHeader/images/burger.svg'
import listPath from '../AppHeader/images/list.svg'
import personPath from '../AppHeader/images/person.svg'
import Logo from "../Logo/Logo";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__body}>
          <ul className={styles.header__list}>
            <li>
              <a className={styles.header__link} href=''>
                <img src={burgerPath} alt=''/>
                Конструктор
              </a>
            </li>
            <li>
              <a className={`${styles.header__link} ${styles.header__link_active}`} href=''>
                <img src={listPath} alt=''/>
                Лента заказов
              </a>
            </li>
          </ul>
          <div>
            <Logo />
          </div>
          <a className={styles.header__cabinet} href=''>
            <img src={personPath} alt=''/>
            Личный кабинет
          </a>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
