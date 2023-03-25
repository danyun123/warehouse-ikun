import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";


export default interface iconProps extends FontAwesomeIconProps{
	type?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark'
}
