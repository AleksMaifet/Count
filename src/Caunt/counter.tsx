import React from "react";
import s from './counter.module.css';
import {Button} from "./button";
import {CountBody} from "./countValue";
import {restoreState} from "../SetCounter/localstorage";
import {countAC, CounterType} from "../reducer/reducerCaunt";
import {useDispatch} from "react-redux";

type CounterBodyType = {
	counterValuesHandler: number | JSX.Element
	colorCount: string
	counter: CounterType
}


export const CounterBody = React.memo(function Counter({counter,counterValuesHandler,colorCount}: CounterBodyType)  {
	const dispatch = useDispatch()
	const incPlus = () => {
		if (counter.startCount < counter.maxValue) dispatch(countAC(counter.startCount + 1))
	};
	const resetCount = () => dispatch(countAC(restoreState('start-value', counter.startCount)));
	const incValue = 'inc';
	const resetValue = 'reset';
	const inc = counter.startCount === counter.maxValue || counter.disabled;
	const reset = counter.disabled;

	return (
		<div>
			<div className={s.wrapper}>
				<CountBody colorCount={colorCount} counterValuesHandler={counterValuesHandler}/>
			</div>
			<div className={s.buttonWrapper}>
				<Button title={incValue} callback={incPlus} disabled={inc}/>
				<Button title={resetValue} callback={resetCount} disabled={reset}/>
			</div>
		</div>
	)
})