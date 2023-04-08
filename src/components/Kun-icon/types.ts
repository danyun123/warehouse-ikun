import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default interface iconProps extends Omit<FontAwesomeIconProps, "icon"> {
	type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark',
	icon: string | IconProp
}
