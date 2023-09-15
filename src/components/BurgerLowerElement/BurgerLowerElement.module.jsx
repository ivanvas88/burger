import React from "react";
import styles from './burger-lower-element.module.css'
import breadUpperPath from "../BurgerIngredientsElement/images/bread-upper.svg";
import moneyPath from "../BurgerIngredientsElement/images/stone-money.svg";
import lockPath from "../BurgerConstructor/images/lock.svg";

function BurgerLowerElement() {
	return (
		<div className={styles.block}>
			<div className={styles.body}>
				<div className={styles.image}><img src={breadUpperPath} alt=''/></div>
				
				<div className={styles.name}>{'Краторная булка N-200i (верх)'}</div>
				
				<div className={styles.price}>{'20'}
					<img src={moneyPath} alt=''/>
				</div>
				
				<div><img className={styles.lock}
				          src={lockPath} alt=''/></div>
			</div>
		</div>
	)
}

export default BurgerLowerElement;