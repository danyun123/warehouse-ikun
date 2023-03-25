/// <reference lib="dom" />
import React from "react";

interface ButtonProps {
	disabled?: boolean,
	size?: "lg" | "sm",
	children?: React.ReactNode,
	btnType?: "primary" | "danger" | "default"
	round?: boolean
}

export type ButtonPropsType = Partial<React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps>
