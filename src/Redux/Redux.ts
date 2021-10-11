import {combineReducers, createStore} from "redux";
import {ReducerCount} from "../reducer/reducerCaunt";




export const rootReducers = combineReducers({
			countPage : ReducerCount
})

export type rootReducersType = ReturnType<typeof rootReducers>

export const store = createStore(rootReducers)