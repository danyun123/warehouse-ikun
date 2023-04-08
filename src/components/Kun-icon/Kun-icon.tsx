import React from 'react';
import { memo } from "react";
import iconProps from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { IconStyle } from "./style";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


const KunIcon = memo((props: iconProps) => {
	const { type, icon, ...restProps } = props;
	const clases = classNames("kun-icon", {
		[`icon-${type}`]: type
	});
	return (
		<IconStyle>
			<FontAwesomeIcon icon={icon as IconProp} className={clases} {...restProps} />
		</IconStyle>
	);
});

export default KunIcon;