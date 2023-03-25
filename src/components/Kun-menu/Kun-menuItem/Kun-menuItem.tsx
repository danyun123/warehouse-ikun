import { memo, useContext } from "react";
import { menuItemProps } from "./types";
import classNames from "classnames";
import MenuItemStyle from "./styles";
import {activeItemContext} from "../Kun-menu";
import { useDispatch } from "react-redux";
import { alterSubmenuOnClick } from "@/state/menu/index";

const KunMenuItem = memo((props: menuItemProps) => {
	const { children,index,disabled } = props;
	const defaultDisabled = disabled ?? false;
	const clases = classNames("menuItem", {
		[`menuItem-disabled`]: defaultDisabled
	});
	const {currentIndex,setIndex} = useContext(activeItemContext);
	const dispatch = useDispatch();
	const handelOnClick = () => {
		setIndex?.(typeof index === "string" ? index : "");
		dispatch(alterSubmenuOnClick(false))
	}
	return (
		<MenuItemStyle>
			<div className={
						classNames(clases,{"isActive": index === currentIndex})}
					 	onClick={handelOnClick}>
				{children}
			</div>
		</MenuItemStyle>
	);
});

export default KunMenuItem;