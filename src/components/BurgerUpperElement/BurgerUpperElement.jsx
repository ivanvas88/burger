import React from "react";
import styles from './burger-upper-element.module.css'
import moneyPath from "../BurgerIngredientsElement/images/stone-money.svg";
import lockPath from '../BurgerConstructor/images/lock.svg'
import data from '../app/utils/data.json'

const upper = data.filter(item => item.type === "bun" && item._id === "60666c42cc7b410027a1a9b1")

const BurgerUpperElement = (props) => {

	return (
		<>
			{upper.map((item) => (
				<div className={styles.block__upper} key={item._id}>
					<div className={styles.body}>
						<div className={styles.image}><img src={item.image_mobile} alt=''/></div>
						
						<div className={styles.name}>
							{`${item.name} (верх)`}
						</div>
						
						<div className={styles.price}>
							{item.price}
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

export default BurgerUpperElement;