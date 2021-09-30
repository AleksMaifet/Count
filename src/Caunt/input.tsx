import React, {ChangeEvent} from "react";


type InputType = {
	labelValue: string
	callback: (e: ChangeEvent<HTMLInputElement>) => void
	value: number
	classError: string
}

export const Input = ({labelValue, callback, value, classError}: InputType) => {
	const OnchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		callback(e)
	}
	return <label>{labelValue} <input type={'number'} onChange={OnchangeHandler} value={value} className={classError}/>
	</label>
}