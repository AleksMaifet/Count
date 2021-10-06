import React from "react";

type CoutBaseType = {
	counterValuesHandler:  number | JSX.Element
	colorCount:string
}


export const CoutBody = React.memo(function CoutBody({colorCount,counterValuesHandler}: CoutBaseType) {

	return <div className={colorCount}>{counterValuesHandler}</div>
})