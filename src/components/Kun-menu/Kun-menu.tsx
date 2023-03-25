import { memo, useState } from "react";
import classNames from "classnames";
import { menuProps,contextType } from "./types";
import MenuStyle from "./styles";
import { createContext } from "react";

export const activeItemContext = createContext<contextType>({
	currentIndex: ""
});

const KunMenu = memo((props: menuProps) => {
	const { children,defaultIndex } = props;
	const clases = classNames("kun-menu");

	const [activeItem,setActiveItem] = useState(defaultIndex);
	const handelSetIndex = (index: string) => {
		setActiveItem(index);
	}
	const currentIndex: contextType = {
		currentIndex: activeItem ?? "",
		setIndex: handelSetIndex
	}
	return (
		<MenuStyle>
			<div className={clases}>
				<activeItemContext.Provider value={currentIndex}>
					{children}
				</activeItemContext.Provider>
			</div>
		</MenuStyle>
	);
});

export default KunMenu;