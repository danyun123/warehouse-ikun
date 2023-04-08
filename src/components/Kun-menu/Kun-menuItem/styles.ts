import styled from "styled-components";


const MenuItemStyle = styled.div`
  .menuItem {
		cursor: pointer;
    padding: 10px 20px;
    font-weight: var(--btn-font-weight);
    font-size: var(--btn-font-size);
    white-space: nowrap;
    text-align: center;
    overflow:hidden;
    vertical-align: middle;
    box-shadow: var(--btn-box-shadow);
    box-sizing: border-box;
    transition: background-color var(--menu-item-transition),border-bottom var(--menu-item-transition);
    &:hover {
      background-color: var(--menu-item-active-bgc);
			transition: background-color .2s ease-in-out;
      color: var(--menu-item-active-color);
    }
  }

  .isActive {
    border-bottom: var(--menu-item-active-border-width) solid var(--primary);
		padding: 10px 20px 8px 20px;
    background-color: var(--menu-item-active-bgc);
		color: var(--menu-item-active-color);
  }
	.menuItem-disabled {
    cursor: not-allowed;
    opacity: .5 !important;
    background: var(--disabled-bgc);
    border: none;
    :hover,
    :active,
    :focus {
      border:none;
    }
    * {
      pointer-events: none;
      background: var(--disabled-bgc);
    }
	}
`

export default MenuItemStyle;