import React from "react";
import styles from './burger-constructor.module.css'
import BurgerUpperElement from "../BurgerUpperElement/BurgerUpperElement";
import BurgerCentralElements from "../BurgerCentralElements/BurgerCentralElements";
import BurgerTotal from '../BurgerTotal/BurgerTotal'
// import data from '../app/utils/data.json'
import BurgerLowerElement from "../BurgerLowerElement/BurgerLowerElement";


const BurgerConstructor = ({btnOpenModal}) => {
	// const upper = data.filter(item => item.type === "bun" && item._id === "60666c42cc7b410027a1a9b1")
	// const ingr = data.filter(item => item.type === "main" || item.type === "sauce")
	// const lower = data.filter(item => item.type === "bun" && item._id === "60666c42cc7b410027a1a9b1")
	
	return (
		<>
			<div className={styles.constructor__body}>
				<BurgerUpperElement type="top" isLocked={true}/>
				
				<div className={styles.ingredients__body}>
					<BurgerCentralElements/>
				</div>
				
				<BurgerLowerElement type="bottom" isLocked={true}/>
				
				<BurgerTotal btnOpenModal={btnOpenModal}/>
			</div>
		</>
	)
}

export default BurgerConstructor;