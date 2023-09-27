import React from "react";
import {createPortal} from 'react-dom';
import styles from './modal-order.module.css';
import tickPath from '../images/done.svg';
import ingrPath from '../images/illustration.svg';

const ModalOrder = ({btnCloseModal}) => {
	const modalRoot = document.querySelector('#modal-order');
	
	return createPortal (
		(
			// <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
			<div className={styles.modal} onClick={() => btnCloseModal(false)}>
				<div className={styles.modal__content} onClick={(e) => {e.stopPropagation()
				console.log(e)}}>
					<div className={styles.modal__close} onClick={() => btnCloseModal(false)}>
						&#10006;
					</div>
					<div className={styles.header}>034536</div>
					<div className={styles.subtitle}>идентификатор заказа</div>
					<div className={styles.image}><img src={tickPath} alt=''/></div>
					<div className={styles.status}>Ваш заказ начали готовить</div>
					<div className={styles.placetowait}>Дождитесь готовности на орбитальной станции</div>
				</div>
			</div>
		),
		modalRoot
	);
}

export default ModalOrder;