import React from 'react'
import styles from './app-header.module.css'
import burgerPath from '../AppHeader/images/burger.svg'
import listPath from '../AppHeader/images/list.svg'
import logoPath from '../AppHeader/images/logo.svg'
import personPath from '../AppHeader/images/person.svg'

function AppHeader() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.header__body}>
					<ul className={styles.header__list}>
						<li>
							<a className={styles.header__link} href=''>
								<img src={burgerPath} alt='' />
								Конструктор
							</a>
						</li>
						<li>
							<a className={`${styles.header__link} ${styles.header__link_active}`} href=''>
								<img src={listPath} alt='' />
								Лента заказов
							</a>
						</li>
					</ul>
					<img src={logoPath} alt='' />
					<a className={styles.header__cabinet} href=''>
						<img src={personPath} alt='' />
						Личный кабинет
					</a>
				</div>
			</div>
		</header>
	)
}

export default AppHeader
