import React from "react";
import s from './counter.module.css';
import {Button} from "./button";
import {CoutBody} from "./countValue";
import {restoreState} from "../SetCounter/localstorage";
import {countAC, CountHandlerTypes} from "../reducer/reducerCaunt";
import {CounterType} from "../App";

type CounterBodyType = {
	counterValuesHandler: number | JSX.Element
	colorCount: string
	counter: CounterType
	dispatchCounter: (action: CountHandlerTypes) => void
}


export const CounterBody = React.memo(function Counter({counter, dispatchCounter,counterValuesHandler,colorCount}: CounterBodyType)  {
	const incPlus = () => {
		if (counter.startCount < counter.maxValue) dispatchCounter(countAC(counter.startCount + 1))
	};
	const resetCaunt = () => dispatchCounter(countAC(restoreState('start-value', counter.startCount)));
	const incValue = 'inc';
	const resetValue = 'reset';
	const inc = counter.startCount === counter.maxValue || counter.disabled;
	const reset = counter.disabled;

	return (
		<div>
			<div className={s.wrapper}>
				<CoutBody colorCount={colorCount} counterValuesHandler={counterValuesHandler}/>
			</div>
			<div className={s.buttonWrapper}>
				<Button title={incValue} callback={incPlus} disabled={inc}/>
				<Button title={resetValue} callback={resetCaunt} disabled={reset}/>
			</div>
		</div>
	)
})