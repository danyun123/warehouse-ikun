import { InputHTMLAttributes, ReactNode } from "react";
import Partial from "typescript";
import { string } from "prop-types";

interface autoInputTypes {
	fetchOptions: (arg: string) => string[];
	disabled?: boolean,
	selectOptions?: (arg: string) => any;
	size?: "lg" | "sm",
	addonAfter?: ReactNode,
	addonBefore?: ReactNode,
	placeholder?: string,
	defaultValue: string,
	data: string[],
	optionsLength?: number,
	enterKeyDown?: (key: string) => any;
}

export type autoInputProps = Partial<autoInputTypes & Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>>
