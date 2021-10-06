import React, {ChangeEvent, useReducer} from 'react';
import './App.css';
import {Setting} from "./SetCounter/Setteng";
import s from './Caunt/counter.module.css';
import {restoreState, saveState} from "./SetCounter/localstorage";
import {
	countAC,
	incResetBTNDisableAC,
	maxValueAC,
	ReducerCount,
	setBTNDisableAC,
	startValueAC
} from "./reducer/reducerCaunt";
import {CounterBody} from "./Caunt/counter";


export type CounterType = {
	startCount: number
	maxValue: number
	startValue: number
	disabled: boolean
	setDisabledBTN: boolean
}

function App() {
	const startNumber = 0;
	const maxNumber = 5;
	const [counter, dispatchCounter] = useReducer(ReducerCount, {
		startCount: restoreState('start-value', startNumber),
		maxValue: restoreState('maxvalue-value', maxNumber),
		startValue: restoreState('start-value', startNumber),
		disabled: false,
		setDisabledBTN: true
	})
 // counter boyd + counter color
	const counterValuesHandler = counter.maxValue <= counter.startValue || counter.startValue < 0
			? <div className={s.errorValue}>Incorrect value!</div>
			: counter.disabled
				? <div className={s.enterValue}>enter values and press "set"</div>
				: counter.startCount;
	const colorCount = counter.startCount === counter.maxValue || counter.maxValue <= counter.startValue || counter.startValue < 0 ? s.cuant : '';
	const error = counter.startValue >= counter.maxValue ? s.textCounterInput : '';
	const errorStartValue = counter.startValue < 0 ? s.textStartInput : '';

	// first body counter
	const startValueStorageHandler = () => {
		saveState('maxvalue-value', counter.maxValue);
		saveState('start-value', counter.startValue);
		dispatchCounter(countAC(restoreState('start-value', 0)));
		dispatchCounter(setBTNDisableAC(true));
		dispatchCounter(incResetBTNDisableAC(false));
	};

	// change max and start values
	const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatchCounter(maxValueAC(Number(e.currentTarget.value)));
		dispatchCounter(setBTNDisableAC(false));
		dispatchCounter(incResetBTNDisableAC(true));

	};
	const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatchCounter(startValueAC(Number(e.currentTarget.value)));
		dispatchCounter(setBTNDisableAC(false));
		dispatchCounter(incResetBTNDisableAC(true));
	};


	return (
		<div className={s.couterBody}>
			<CounterBody colorCount={colorCount} counterValuesHandler={counterValuesHandler} dispatchCounter={dispatchCounter} counter={counter}/>
			<Setting error={error} errorStartValue={errorStartValue} startValueStorageHandler={startValueStorageHandler} counter={counter} maxValueHandler={maxValueHandler} startValueHandler={startValueHandler}/>
		</div>
	);
}

export default App;