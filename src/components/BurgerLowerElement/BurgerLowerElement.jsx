import React from "react";
import styles from './burger-lower-element.module.css'
import moneyPath from "../BurgerIngredientsElement/images/stone-money.svg";
import lockPath from "../BurgerConstructor/images/lock.svg";
import data from "../app/utils/data.json";

const lower = data.filter(item => item.type === "bun" && item._id === "60666c42cc7b410027a1a9b1")

const BurgerLowerElement = () => {
	return (
		<>
			{lower.map((item) => (
				<div className={styles.block} key={item._id}>
					<div className={styles.body}>
						<div className={styles.image}><img src={item.image_mobile} alt=''/></div>
						
						<div className={styles.name}>{`${item.name} (низ)`}</div>
						
						<div className={styles.price}>{item.price}
							<img src={moneyPath} alt=''/>
						</div>
						
						<div><img className={styles.lock}
						          src={lockPath} alt=''/></div>
					</div>
				</div>
			))}
		</>
	)
}

export default BurgerLowerElement;