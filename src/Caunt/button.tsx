import s from "./counter.module.css";
import React from "react";

type ButtonType = {
	callback: () => void
	title:string
	disabled:boolean
}


export const Button = React.memo(function Button (props:ButtonType ) {

	return (
		<div>
			<button className={s.button} onClick={props.callback} disabled={props.disabled}>{props.title}</button>
		</div>
	)
})


