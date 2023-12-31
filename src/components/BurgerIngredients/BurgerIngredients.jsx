import React from "react";
import BurgerIngredientsElement from '../BurgerIngredientsElement/BurgerIngredientsElement';
import styles from './burger-ingredients.module.css';
import data from '../app/utils/data.json'

const BurgerIngredients = ({ingredientOpenModal}) => {
	
	const subtitleMenu = [
		{title: 'Булки'},
		{title: 'Соусы'},
		{title: 'Начинки'}
	]
	
	const newDataBun = data.filter((item) => item.type === "bun");
	const newDataMain = data.filter((item) => item.type === "main");
	const newDataSause = data.filter((item) => item.type === "sauce");
	
	let subtitle;
	
	const clickOnTab = (e) => {
	
		const tab = document.querySelectorAll('#tabs div');
		subtitle = document.querySelectorAll('[data-subtitle]');
		
		tab.forEach(item => {
			item.classList.remove(`${styles.tab_active}`);
		})
		
		e.target.classList.add(`${styles.tab_active}`)
		
		subtitle.forEach(item => {
			if (e.target.textContent === item.getAttribute('data-subtitle')) {
				item.scrollIntoView({behavior: 'smooth'})
			}
		})
	}
	
	return (
		<div className={styles.ingredients}>
			<div className={styles.tabs} id='tabs'>
				<div onClick={clickOnTab} className={`${styles.tab} ${styles.tab_active}`}>Булки</div>
				<div onClick={clickOnTab} className={styles.tab}>Соусы</div>
				<div onClick={clickOnTab} className={styles.tab}>Начинки</div>
			</div>
			<div className={styles.items}>
				<h2 data-subtitle='Булки' className={styles.subtitle}>{subtitleMenu[0].title}</h2>
				<ul className={styles.body}>
				<BurgerIngredientsElement props={newDataBun} ingredientOpenModal={ingredientOpenModal}/>
				</ul>
				
				<h2 data-subtitle='Соусы' className={styles.subtitle}>{subtitleMenu[1].title}</h2>
				<ul className={styles.body}>
					<BurgerIngredientsElement props={newDataSause} ingredientOpenModal={ingredientOpenModal}/>
				</ul>
				
				<h2 data-subtitle='Начинки' className={styles.subtitle}>{subtitleMenu[2].title}</h2>
				<ul className={styles.body}>
					<BurgerIngredientsElement props={newDataMain} ingredientOpenModal={ingredientOpenModal}/>
				</ul>
			</div>
		</div>
	)
}

export default BurgerIngredients;
