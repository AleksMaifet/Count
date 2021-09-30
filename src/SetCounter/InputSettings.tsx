import React, {ChangeEvent} from "react";
import s from '../Caunt/counter.module.css';
import {Input} from "../Caunt/input";
import {countType} from "../App";
import {
	CountHandlerTypes,
	incResetBTNDisableAC,
	maxValueAC,
	setBTNDisableAC,
	startValueAC
} from "../reducer/reducerCaunt";


type InputSettingsType = {
	count: countType
	dispatchCount: (action: CountHandlerTypes) => void
}

export function InputSettings({count, dispatchCount}: InputSettingsType) {
	const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatchCount(maxValueAC(Number(e.currentTarget.value)))
		dispatchCount(setBTNDisableAC(false));
		dispatchCount(incResetBTNDisableAC(true));

	};
	const startValueHadnler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatchCount(startValueAC(Number(e.currentTarget.value)))
		dispatchCount(setBTNDisableAC(false));
		dispatchCount(incResetBTNDisableAC(true));
	};
	const error = count.startValue >= count.maxValue ? s.textCounterInput : '';
	const errorStartValue = count.startValue < 0 ? s.textStartInput : '';
	const errorStartValueHandler = error || errorStartValue;


	return (
		<div className={s.textCounter}>
			<Input labelValue={'max value:'} callback={maxValueHandler} value={count.maxValue} classError={error}/>
			<Input labelValue={'start value:'} callback={startValueHadnler} value={count.startValue}
						 classError={errorStartValueHandler}/>
		</div>
	)
}