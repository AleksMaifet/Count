import React from "react";
import s from './counter.module.css';
import {Button} from "./button";
import {CoutBody} from "./countValue";
import {restoreState} from "../SetCounter/localstorage";
import {countAC, CountHandlerTypes} from "../reducer/reducerCaunt";
import {countType} from "../App";

type CounterType = {
	count: countType
	dispatchCount: (action: CountHandlerTypes) => void
}


export function Counter({count, dispatchCount}: CounterType) {
	const incPlus = () => {
		if (count.startCount < count.maxValue) dispatchCount(countAC(count.startCount + 1))
	};
	const resetCaunt = () => dispatchCount(countAC(restoreState('start-value', count.startCount)));
	const incValue = 'inc';
	const resetValue = 'reset';
	const inc = count.startCount === count.maxValue || count.disabled;
	const reset = count.disabled;

	return (
		<div>
			<div className={s.wrapper}>
				<CoutBody startValue={count.startValue} disabled={count.disabled} count={count}
									maxValue={count.maxValue}/>
			</div>
			<div className={s.buttonWrapper}>
				<Button title={incValue} callback={incPlus} disabled={inc}/>
				<Button title={resetValue} callback={resetCaunt} disabled={reset}/>
			</div>
		</div>
	)
}
