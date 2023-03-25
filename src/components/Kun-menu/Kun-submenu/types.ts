import React from "react";

interface submenuType {
	index: string,
	disabled?: boolean,
	children?: React.ReactNode,
	iconSize?: string,
	title?: string
}

export type submenuProps = Partial<React.HTMLAttributes<HTMLDivElement> & submenuType>

