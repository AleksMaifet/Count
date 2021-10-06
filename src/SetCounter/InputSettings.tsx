import React, {ChangeEvent} from "react";
import s from '../Caunt/counter.module.css';
import {Input} from "../Caunt/input";
import {CounterType} from "../App";


type InputSettingsType = {
	counter: CounterType
	maxValueHandler: (e:any) => void
	startValueHandler: (e:any) => void
	error: string
	errorStartValue: string
}

export const InputSettings = React.memo(function InputSettings({counter,maxValueHandler,startValueHandler,error,errorStartValue}: InputSettingsType) {
	const maxValueCallbackHandler = (e: ChangeEvent<HTMLInputElement>) => {
		maxValueHandler(e);
	};
	const startValueCallbackHadnler = (e: ChangeEvent<HTMLInputElement>) => {
		startValueHandler(e);
	};
	const errorStartValueHandler = error || errorStartValue;


	return (
		<div className={s.textCounter}>
			<Input labelValue={'max value:'} callback={maxValueCallbackHandler} value={counter.maxValue} classError={error}/>
			<Input labelValue={'start value:'} callback={startValueCallbackHadnler} value={counter.startValue}
						 classError={errorStartValueHandler}/>
		</div>
	)
})