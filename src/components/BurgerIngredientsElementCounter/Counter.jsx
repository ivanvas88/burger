import React from "react";
import styles from './counter.module.css'

const Counter = ({count}) => {
	
	return (
		<div className={styles.count}>{count}</div>
	)
}

export default Counter;