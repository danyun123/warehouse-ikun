/// <reference lib="dom" />
import React from "react";

interface ButtonTypes {
	disabled?: boolean,
	size?: "lg" | "sm",
	children?: React.ReactNode,
	btnType?: "primary" | "danger" | "default"
	round?: boolean
}

export type ButtonProps = Partial<React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonTypes>
