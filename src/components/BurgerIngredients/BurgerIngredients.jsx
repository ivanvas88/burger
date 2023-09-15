import React from "react";
import BurgerIngredientsElement from '../BurgerIngredientsElement/BurgerIngredientsElement.module';
import styles from './burger-ingredients.module.css';
import data from '../app/utils/data.json'
import moneyPath from "../BurgerIngredients/images/stone-money.svg";

function BurgerIngredients() {
	
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
					
					{newDataBun.map((item) => (
						<li className={styles.card} key={item._id}>
							<div>
								<img className={styles.image} src={item.image} alt=''/>
							</div>
							<div className={styles.price}>{item.price} <img src={moneyPath} alt=''/></div>
							<div className={styles.name}>{item.name}</div>
							<div className={styles.count}>1</div>
						</li>
					))}
				</ul>
				
				<h2 data-subtitle='Соусы' className={styles.subtitle}>{subtitleMenu[1].title}</h2>
				<ul className={styles.body}>
					{newDataSause.map((item) => (
						<li className={styles.card} key={item._id}>
							<div>
								<img className={styles.image} src={item.image} alt=''/>
							</div>
							<div className={styles.price}>{item.price} <img src={moneyPath} alt=''/></div>
							<div className={styles.name}>{item.name}</div>
							<div className={styles.count}>1</div>
						</li>
					))}
				</ul>
				
				<h2 data-subtitle='Начинки' className={styles.subtitle}>{subtitleMenu[2].title}</h2>
				<ul className={styles.body}>
					{newDataMain.map((item) => (
						<li className={styles.card} key={item._id}>
							<div>
								<img className={styles.image} src={item.image} alt=''/>
							</div>
							<div className={styles.price}>{item.price} <img src={moneyPath} alt=''/></div>
							<div className={styles.name}>{item.name}</div>
							<div className={styles.count}>1</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default BurgerIngredients;
