import React from "react";
// import {_id, image_mobile, name, price} from '../BurgerUpperElement/BurgerUpperElement.module'
import styles from './burger-constructor.module.css'
// import BurgerUpperElementModule from "../BurgerUpperElement/BurgerUpperElement.module";
// import BurgerLowerElement from '../BurgerLowerElement/BurgerLowerElement.module'
// import BurgerCentralElements from '../BurgerCentralElements/BurgerCentralElements.module'
import BurgerTotal from '../BurgerTotal/BurgerTotal.module'
import data from '../app/utils/data.json'
import moneyPath from "../BurgerConstructor/images/stone-money.svg";
import lockPath from '../BurgerConstructor/images/lock.svg'
import trashPath from "../BurgerConstructor/images/delete.svg";

function BurgerConstructor() {
	const upper = data.filter(item => item.type === "bun" && item._id === "60666c42cc7b410027a1a9b1")
	const ingr = data.filter(item => item.type === "main" || item.type === "sauce")
	const lower = data.filter(item => item.type === "bun" && item._id === "60666c42cc7b410027a1a9b1")
	
	return (
		<>
			<div className={styles.constructor__body}>
				
				{upper.map((item) => (
					<div className={styles.block} key={item._id}>
						<div className={styles.body__upper}>
							<div className={styles.image}><img src={item.image_mobile} alt=''/></div>
							<div className={styles.name}>{`${item.name} (верх)`}</div>
							<div className={styles.price}>{item.price}
								<img src={moneyPath} alt=''/>
							</div>
							<div className={styles.lock}><img src={lockPath} alt=''/></div>
						</div>
					</div>
				))}
				
				<div className={styles.ingredients__body}>
					{ingr.map((item) => (
						<div className={styles.body}>
							<div className={styles.image}><img src={item.image_mobile} alt=''/></div>
							<div className={styles.name}>{item.name}</div>
							<div className={styles.price}>{item.price}
								<img src={moneyPath} alt=''/>
							</div>
							<div className={styles.lock}><img src={trashPath} alt=''/></div>
						</div>
					))}
				</div>
				
				{lower.map((item) => (
					<div className={styles.block} key={item._id}>
						<div className={styles.body__lower}>
							<div className={styles.image}><img src={item.image_mobile} alt=''/></div>
							<div className={styles.name}>{`${item.name} (низ)`}</div>
							<div className={styles.price}>{item.price}
								<img src={moneyPath} alt=''/>
							</div>
							<div className={styles.lock}><img src={lockPath} alt=''/></div>
						</div>
					</div>
				))}

				<BurgerTotal/>
			</div>
		</>
	)
}

export default BurgerConstructor;