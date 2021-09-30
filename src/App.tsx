import React, {useReducer} from 'react';
import './App.css';
import {Counter} from "./Caunt/counter";
import {Setting} from "./SetCounter/Setteng";
import s from './Caunt/counter.module.css';
import {restoreState} from "./SetCounter/localstorage";
import {ReducerCaunt} from "./reducer/reducerCaunt";


export type countType = {
	startCount: number
	maxValue: number
	startValue: number
	disabled: boolean
	setDisabledBTN: boolean
}

function App() {
	const startNumber = 0;
	const maxNumber = 5;
	const [count, dispatchCount] = useReducer(ReducerCaunt, {
		startCount: restoreState('start-value', startNumber),
		maxValue: restoreState('maxvalue-value', maxNumber),
		startValue: restoreState('start-value', startNumber),
		disabled: false,
		setDisabledBTN: true
	})

	return (
		<div className={s.couterBody}>
			<Counter dispatchCount={dispatchCount} count={count}/>
			<Setting count={count} dispatchCount={dispatchCount}/>
		</div>
	);
}

export default App;