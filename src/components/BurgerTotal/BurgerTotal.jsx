import React, {useState} from "react";
import styles from './burger-total.module.css'
import moneyPath from './images/money-result.svg'
// import {state, setState} from '../app/App'

const BurgerTotal = ({btnOpenModal}) => {

	// const [modalActive, setModalActive] = useState(true)
	
	return (
		<div className={styles.block}>
			<div className={styles.price}>{'610'}
				<img src={moneyPath} alt=''/>
			</div>
			<button onClick={() => btnOpenModal()} className={styles.btn} type='button'>{'Оформить заказ'}</button>
		</div>
	)
}

export default BurgerTotal;

// git add .
// git commit -m'some commit'
// git push