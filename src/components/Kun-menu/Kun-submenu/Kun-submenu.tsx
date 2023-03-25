import { memo, useRef, useState } from "react";
import { submenuProps } from "./types";
import classNames from "classnames";
import SubmenuStyle from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {alterSubmenuOnClick} from "@/state/menu";

const KunSubmenu = memo((props: submenuProps) => {
	const { disabled, children, iconSize, title } = props;
	const {submenuOnClick} = useSelector((state: any) => {
		return {
			submenuOnClick: state.menuReducer.submenuOnClick
		}
	})
	const dispatch = useDispatch();
	const [isSpread, setIsSpread] = useState(false);
	const [submenuIsHover, setsubmenuIsHover] = useState(false);
	const [submenuChildShow,setSubmenuChildShow] = useState(false);
	const defaultDisabled = disabled ?? false;
	const clases = classNames("submenu", {
		[`submenu-disabled`]: defaultDisabled,
		[`submenu-spread`]: isSpread,
		[`submenu-hover`]: submenuIsHover,
		[`submenu-active`]: submenuOnClick
	});

	const timeoutID = useRef<any>();
	const setIsShowChildTimeoutFun = () => {
		clearTimeout(timeoutID.current);
		timeoutID.current = setTimeout(() => {
			setIsSpread(false);
			setSubmenuChildShow(false);
		}, 500);
	};
	const handelParentMouseEnter = (event: any) => {
		setIsSpread(true);
		setSubmenuChildShow(true);
		setsubmenuIsHover(true);
	}
	const handelParentMouseOut = (event: any) => {
		setIsSpread(false);
		setsubmenuIsHover(false);
		setIsShowChildTimeoutFun();
	}
	const handelChildMouseEnter = (event: any) => {
		clearTimeout(timeoutID.current);
		setIsSpread(true);
		event.stopPropagation();
	}
	const handelChildMouseOut = (event: any) => {
		setSubmenuChildShow(false);
	}
	const handelChildOnClick = () => {
		dispatch(alterSubmenuOnClick(true));
	}
	return (
		// @ts-ignore
		<SubmenuStyle iconSize={iconSize}>
			<div className="submenuBox">
				<div
					className={clases}
					onMouseOver={e => handelParentMouseEnter(e)}
					onMouseLeave={e => handelParentMouseOut(e)}
				>
					{title}
					<i className="submenu-icon"></i>
				</div>
				<div
					className={classNames(["submenuChild",{"showSubmenuChild": submenuChildShow}])}
					onMouseOver={e => handelChildMouseEnter(e)}
					onMouseLeave={e => handelChildMouseOut(e)}
					onClick={handelChildOnClick}
				>
					{children}
				</div>
			</div>
		</SubmenuStyle>
	);
});

export default KunSubmenu;