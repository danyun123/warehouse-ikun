import React from "react";

export interface contextType {
	currentIndex: string,
	setIndex?: (index: string) => void
}


interface menuTypes {
	defaultIndex?: string
}

export type menuProps = Partial<React.HTMLAttributes<HTMLDivElement> & menuTypes>
