import React from "react";
import s from "./counter.module.css";
import {countType} from "../App";

type CoutBaseType = {
	count: countType
	maxValue: number
	disabled: boolean
	startValue: number
}


export function CoutBody({count, maxValue, ...props}: CoutBaseType) {
	const colorCaunt = count.startCount === maxValue || maxValue <= props.startValue || props.startValue < 0 ? s.cuant : '';
	const counterValues = maxValue <= props.startValue || props.startValue < 0
		? <div className={s.errorValue}>Incorrect value!</div>
		: props.disabled
			? <div className={s.enterValue}>enter values and press "set"</div>
			: count.startCount;

	return <div className={colorCaunt}>{counterValues}</div>
}