import React, {ChangeEvent} from 'react';
import './App.css';
import {Setting} from "./SetCounter/Setteng";
import s from './Caunt/counter.module.css';
import {restoreState, saveState} from "./SetCounter/localstorage";
import {
	countAC, CounterType,
	incResetBTNDisableAC,
	maxValueAC,
	setBTNDisableAC,
	startValueAC
} from "./reducer/reducerCaunt";
import {CounterBody} from "./Caunt/counter";
import {useDispatch, useSelector} from "react-redux";
import {rootReducersType} from "./Redux/Redux";



function App() {
	const counter = useSelector<rootReducersType,CounterType>(state => state.countPage)
	const dispatch = useDispatch()

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
		dispatch(countAC(restoreState('start-value', 0)));
		dispatch(setBTNDisableAC(true));
		dispatch(incResetBTNDisableAC(false));
	};

	// change max and start values
	const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(maxValueAC(Number(e.currentTarget.value)));
		dispatch(setBTNDisableAC(false));
		dispatch(incResetBTNDisableAC(true));

	};
	const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(startValueAC(Number(e.currentTarget.value)));
		dispatch(setBTNDisableAC(false));
		dispatch(incResetBTNDisableAC(true));
	};


	return (
		<div className={s.couterBody}>
			<CounterBody colorCount={colorCount} counterValuesHandler={counterValuesHandler} counter={counter}/>
			<Setting error={error} errorStartValue={errorStartValue} startValueStorageHandler={startValueStorageHandler} counter={counter} maxValueHandler={maxValueHandler} startValueHandler={startValueHandler}/>
		</div>
	);
}

export default App;