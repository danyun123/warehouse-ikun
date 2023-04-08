import { InputHTMLAttributes, ReactNode } from "react";
import Partial from "typescript";

interface autoInputTypes {
	fetchOptions: (arg: string) => string[];
	enterKeyDown?: () => any;
	selectOptions?: (arg: string) => any;
	data: string[],
	disabled?: boolean,
	size?: "lg" | "sm",
	addonAfter?: ReactNode,
	addonBefore?: ReactNode,
	placeholder?: string,
	defaultValue: string,
	optionsLength?: number,
}

export type autoInputProps = Partial<autoInputTypes & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>
