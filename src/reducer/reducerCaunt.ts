import {restoreState} from "../SetCounter/localstorage";

const startNumber = 0;
const maxNumber = 5;

export type CounterType = {
	startCount: number
	maxValue: number
	startValue: number
	disabled: boolean
	setDisabledBTN: boolean
}

const initialization:CounterType = {
	startCount: restoreState('start-value', startNumber),
	maxValue: restoreState('maxvalue-value', maxNumber),
	startValue: restoreState('start-value', startNumber),
	disabled: false,
	setDisabledBTN: true
}


export const ReducerCount = (state = initialization, action:CountHandlerTypes):CounterType => {
	switch(action.type){
		case "COUNT":
			return {...state,startCount: action.number}
		case "MAX-VALUE":
			return {...state,maxValue: action.number}
		case "START-VALUE":
			return {...state,startValue: action.number}
		case "INC-RES-DISABLE":
			return {...state,disabled: action.boolean}
		case "SET-DISABLE":
			return {...state,setDisabledBTN: action.boolean}
		default: return state
	}
}








export type CountHandlerTypes = CountACType | MaxValueType | StartValueACType | IncResetBTNDisableACType | SetBTNDisableACType

export type CountACType = ReturnType<typeof countAC>

export const countAC = (number:number) => {
	return {
		type: 'COUNT',
		number
	} as const
}
export type MaxValueType = ReturnType<typeof maxValueAC>

export const maxValueAC = (number:number) => {
	return {
		type: 'MAX-VALUE',
		number
	} as const
}
export type StartValueACType = ReturnType<typeof startValueAC>

export const startValueAC = (number:number) => {
	return {
		type: 'START-VALUE',
		number
	} as const
}

export type IncResetBTNDisableACType = ReturnType<typeof incResetBTNDisableAC>

export const incResetBTNDisableAC = (boolean:boolean) => {
	return {
		type: 'INC-RES-DISABLE',
		boolean
	} as const
}

export type SetBTNDisableACType = ReturnType<typeof setBTNDisableAC>

export const setBTNDisableAC = (boolean:boolean) => {
	return {
		type: 'SET-DISABLE',
		boolean
	} as const
}












