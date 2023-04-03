import { InputHTMLAttributes, ReactNode } from "react";
import Partial from "typescript"

interface inputType {
	disabled?: boolean,
	size?: "lg" | "sm",
	addonAfter?: ReactNode,
	addonBefore?: ReactNode,
	password?: boolean,
	placeholder?: string,
	connectAfter?: string,
	connectBefore?: string,
	value?: any,
	onChange?: (arg: any) => any,
	onBlur?: (arg: any) => any,
	onFocus?: (arg: any) => any,
	onKeyDown?: (arg: any) => any
}
export type inputProps = Partial<inputType & Omit<InputHTMLAttributes<HTMLInputElement>,"size" | "value">>
