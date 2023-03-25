export function btnSize(size: string) {
	return {
		padding: `var(--btn-padding-y-${size})` + `var(--btn-padding-x-${size})`,
		fontSize: `var(--btn-font-size-${size})`,
		borderRadius: `var(--btn-border-radius-${size})`
	};
}

export function btnType(bgc: string | null = null, border: string | null  = null, color: string | null  = null, hoverBgc: string | null  = null, hoverBorder: string | null  = null, hoverColor: string | null  = null) {
	return {
		backgroundColor: `var(${bgc})`,
		borderColor: `var(${border})`,
		color: `var(${color})`,
		"&:hover": {
			color: `var(${hoverColor})`,
			background: `var(${hoverBgc})`,
			borderColor: `var(${hoverBorder})`
		},
		"&:focus,&.focus": {
			color: `var(${hoverColor})`,
			background: `var(${hoverBgc})`,
			borderColor: `var(${hoverBorder})`
		}
	};
}