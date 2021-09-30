
export function saveState(key: string, state:number) {
	const stateAsString = JSON.stringify(state)
	localStorage.setItem(key, stateAsString )
}

export function restoreState(key: string, defaultState: number) {
	let state = defaultState
	const stateAsString = localStorage.getItem(key)
	if (stateAsString !== null) state = JSON.parse(stateAsString) as number
	return state
}
