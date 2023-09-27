import React from "react";
import styles from './burger-central-elements.module.css'
import moneyPath from "../BurgerIngredientsElement/images/stone-money.svg";
import trashPath from './images/delete.svg'
import data from "../app/utils/data.json";

const ingredient = data.filter(item => item.type === "main" || item.type === "sauce")

const BurgerCentralElements = () => {
	return (
		<>
			{ingredient.map((item) => (
				<div className={styles.body} key={item._id}>
					<div className={styles.image}><img src={item.image_mobile} alt=''/></div>
					
					<div className={styles.name}>{item.name}</div>
					
					<div className={styles.price}>{item.price}
						<img src={moneyPath} alt=''/>
					</div>
					
					<div className={styles.lock}><img src={trashPath} alt=''/></div>
				</div>
			))}
		</>
	)
}

export default BurgerCentralElements;