import React, { ReactNode } from "react";

interface  menuItemTypes {
	index: string,
	children?: ReactNode,
	disabled?: boolean,
}

export type menuItemProps = Partial<React.HTMLAttributes<HTMLDivElement> & menuItemTypes>;
