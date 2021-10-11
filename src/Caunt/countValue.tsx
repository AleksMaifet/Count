import React from "react";

type CountBaseType = {
	counterValuesHandler:  number | JSX.Element
	colorCount:string
}


export const CountBody = React.memo(function CoutBody({colorCount,counterValuesHandler}: CountBaseType) {

	return <div className={colorCount}>{counterValuesHandler}</div>
})