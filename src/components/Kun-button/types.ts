import React from "react";

interface ButtonTypes {
	disabled?: boolean,
	size?: "lg" | "sm",
	btnType?: "primary" | "danger" | "default"
	round?: boolean
}

export type ButtonProps = Partial<React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonTypes>
