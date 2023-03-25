import { memo } from "react";
import React from "react";
import type { ButtonPropsType } from "./types";
import classNames from "classnames";
import ButtonStyle from "./styles";

const KunButton = memo((props: ButtonPropsType): JSX.Element => {
	const { children, size, disabled, btnType,round, ...restPorps } = props;
	const disabledDefault = disabled ?? false;
	const btnTypeDefault = btnType ?? "default";
	const classes = classNames(
		"btn",
		{
			[`btn-${btnTypeDefault}`]: btnTypeDefault,
			[`btn-${size}`]: size,
			[`btn-round`]: round,
		}
	);
		return (
			<ButtonStyle>
				<button
					className={classes}
					disabled={disabledDefault}
					data-round={round}
					role="button"
					{...restPorps}
				>
					{round ? <span>{children}</span> : children}
				</button>
			</ButtonStyle>
		);
});

export default KunButton;