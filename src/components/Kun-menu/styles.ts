import styled from "styled-components";

const MenuStyle = styled.div`
	.kun-menu {
    display: flex;
    flex-wrap: nowrap;
		border-bottom: var(--menu-border-color) solid var(--menu-border-width);
		width: 100%;
    font-weight: var(--btn-font-weight);
    font-size: var(--btn-font-size);
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    box-shadow: var(--btn-box-shadow);
	}
`

export default MenuStyle;