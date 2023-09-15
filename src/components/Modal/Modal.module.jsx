import React from "react";
import './modal.css';
import tickPath from './images/done.svg';
import ingrPath from './images/illustration.svg';

const Modal = ({active, setActive}) => {
	return (
		<div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
			
			<div className='modal__content-order'>
			{/*<div className='modal__content-order' onClick={e => e.stopPropagation()}>*/}
				<div className='modal__close'>
					&#10006;
				</div>
				<div className='header'>034536</div>
				<div className='subtitle'>идентификатор заказа</div>
				<div className='image'><img src={tickPath} alt=''/></div>
				<div className='status'>Ваш заказ начали готовить</div>
				<div className='placetowait'>Дождитесь готовности на орбитальной станции</div>
			</div>
			
			
			<div className='modal__content-ingredient'>
				<div className='modal__close-ingr'>
					&#10006;
				</div>
				<div className='modal-title'>Детали ингредиента</div>
				<div className='illustration'><img src={ingrPath} alt=''/></div>
				<div className='name'>Биокотлета из марсианской Магнолии</div>
				<div className='structure'>
					<div className='calories'>
						<div className='structure-title'>Калории,ккал</div>
						<div className='structure-numbers'>244,4</div>
					</div>
					<div className='protein'>
						<div className='structure-title'>Белки, г</div>
						<div className='structure-numbers'>12,2</div>
					</div>
					<div className='fats'>
						<div className='structure-title'>Жиры, г</div>
						<div className='structure-numbers'>17,2</div>
					</div>
					<div className='carbohydrates'>
						<div className='structure-title'>Углеводы, г</div>
						<div className='structure-numbers'>10,2</div>
					</div>
				</div>
			</div>
		
		</div>
	)
}

export default Modal;