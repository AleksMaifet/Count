import s from "../Caunt/counter.module.css";
import {Button} from "../Caunt/button";
import React from "react";
import {InputSettings} from "./InputSettings";
import {CounterType} from "../App";


type SettingType = {
	counter: CounterType
	maxValueHandler:(e:any) => void
	startValueHandler:(e:any) => void
	startValueStorageHandler: () => void
	error: string
	errorStartValue: string
}

export const Setting = React.memo(function Setting ({counter,startValueStorageHandler,...props}: SettingType)  {
	const setValue = 'set';
	const startValueStorage = () => {
		startValueStorageHandler()
	};
	const set = counter.startValue < 0 || counter.startValue >= counter.maxValue || counter.setDisabledBTN;

	return (
		<div>
			<div className={s.wrapper}>
				<InputSettings error={props.error} errorStartValue={props.errorStartValue} maxValueHandler={props.maxValueHandler} startValueHandler={props.startValueHandler} counter={counter}/>
			</div>
			<div className={s.buttonWrapper}>
				<Button title={setValue} callback={startValueStorage} disabled={set}/>
			</div>
		</div>
	)
})