import { memo } from "react";
import iconProps from "@/components/Kun-icon/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { IconStyle } from "./style";

const KunIcon = memo((props: iconProps) => {
	const { type, ...restProps } = props;
	const clases = classNames("kun-icon", {
		[`icon-${type}`]: type
	});
	return (
		<IconStyle>
			<FontAwesomeIcon className={clases} {...restProps} />
		</IconStyle>
	);
});

export default KunIcon;