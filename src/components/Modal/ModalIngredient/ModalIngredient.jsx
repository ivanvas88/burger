import React from "react";
import styles from './module-ingredient.module.css'
import {createPortal} from 'react-dom';
import tickPath from "../images/done.svg";
import ingrPath from '../images/illustration.svg';

const ModalIngredient = ({btnCloseModal}) => {
	
	const modalIngredientRoot = document.querySelector('#modal-ingredient')
	
	return createPortal (
		(
			<div className={styles.modal} onClick={() => btnCloseModal(false)}>
				<div className={styles.modal__content_ingredient}
				     onClick={(e) => e.stopPropagation()}>
					<div className={styles.modal__close_ingr} onClick={() => btnCloseModal(false)}>
						&#10006;
					</div>
					<div className={styles.modal_title}>Детали ингредиента</div>
					<div className={styles.illustration}><img src={ingrPath} alt=''/></div>
					<div className={styles.name}>Биокотлета из марсианской Магнолии</div>
					<div className={styles.structure}>
						<div className={styles.calories}>
							<div className={styles.structure_title}>Калории,ккал</div>
							<div className={styles.structure_numbers}>244,4</div>
						</div>
						<div className={styles.protein}>
							<div className={styles.structure_title}>Белки, г</div>
							<div className={styles.structure_numbers}>12,2</div>
						</div>
						<div className={styles.fats}>
							<div className={styles.structure_title}>Жиры, г</div>
							<div className={styles.structure_numbers}>17,2</div>
						</div>
						<div className={styles.carbohydrates}>
							<div className={styles.structure_title}>Углеводы, г</div>
							<div className={styles.structure_numbers}>10,2</div>
						</div>
					</div>
				</div>
			</div>
		),
		modalIngredientRoot
	);
}

export default ModalIngredient;