import React, {useState} from "react";
import styles from './burger-total.module.css'
import moneyPath from './images/money-result.svg'

function BurgerTotal() {
	
	const [modalActive, setModalActive] = useState(true)
	
	return (
		<div className={styles.block}>
			<div className={styles.price}>{'610'}
				<img src={moneyPath} alt=''/>
			</div>
			<button className={styles.btn} type='button' onClick={() => setModalActive(true)}>{'Оформить заказ важно'}</button>
		</div>
	)
}

export default BurgerTotal;

// git add .
// git commit -m'some commit'
// git push