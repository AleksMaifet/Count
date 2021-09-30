import s from "../Caunt/counter.module.css";
import {Button} from "../Caunt/button";
import React from "react";
import {InputSettings} from "./InputSettings";
import {restoreState, saveState} from "./localstorage";
import {countType} from "../App";
import {countAC, CountHandlerTypes, incResetBTNDisableAC, setBTNDisableAC} from "../reducer/reducerCaunt";


type SettingType = {
	count: countType
	dispatchCount: (action: CountHandlerTypes) => void
}

export function Setting({count, dispatchCount}: SettingType) {
	const setValue = 'set';
	const startValueStorage = () => {
		saveState('maxvalue-value', count.maxValue);
		saveState('start-value', count.startValue);
		dispatchCount(countAC(restoreState('start-value', 0)))
		dispatchCount(setBTNDisableAC(true));
		dispatchCount(incResetBTNDisableAC(false));
	};
	const set = count.startValue < 0 || count.startValue >= count.maxValue || count.setDisabledBTN;

	return (
		<div>
			<div className={s.wrapper}>
				<InputSettings count={count} dispatchCount={dispatchCount}/>
			</div>
			<div className={s.buttonWrapper}>
				<Button title={setValue} callback={startValueStorage} disabled={set}/>
			</div>
		</div>
	)
}