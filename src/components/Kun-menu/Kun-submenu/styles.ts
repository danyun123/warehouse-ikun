import styled from "styled-components";

const SubmenuStyle = styled.div`
  .submenuBox {
    position: relative;
    .submenu {
      cursor: pointer;
      padding: 10px 40px 10px 20px;
      font-weight: var(--font-weight-base);
      font-size: var(--font-size-base);
      white-space: nowrap;
      text-align: center;
      box-shadow: var(--menu-box-shadow);
      display: flex;
      align-content: center;
			
      .submenu-icon {
        &::after {
          content: "";
          color: var(--submenu-icon-color);
          width: ${(props: any) => props.iconSize ?? "8px"};
          height: ${(props: any) => props.iconSize ?? "8px"};
          border-style: solid;
          border-color: var(--hover-icon-color);
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
          transform-origin: 7px 7px;
          transition: transform var(--submenu-transition);
          position: absolute;
          translate: 0 -50%;
          right: 10px;
          top: 50%;
          pointer-events: none;
        }
      }

      &.submenu-spread {
        .submenu-icon::after {
          transform: rotateZ(225deg);
          border-color: var(--menu-item-active-color);
        }
      }
    }

    .submenuChild {
      position: absolute;
      z-index: 999;
      border-radius: 6px;
      box-shadow: var(--menu-item-box-shadow);
      width: 100%;
      top: 110%;
      left: 0;
      transition: all .5s;
			display: none;
      box-sizing: border-box;
      &.showSubmenuChild {
        display: inline-block;
        opacity: 1;
      }

      .isActive {
        background-color: #a1dcf8 !important;
        display: inline-block;
				padding: 10px 20px;
				width: 100%;
				border: none;
        color: black !important;
      }

      .menuItem:hover {
        background-color: #bebebe;
        color: white;
      }
    }

    .submenu-hover {
      background-color: var(--menu-item-active-bgc);
      transition: background-color .2s ease-in-out;
      color: var(--menu-item-active-color);
    }
		.submenu-active {
      padding: 10px 40px 8px 20px;
      border-bottom: var(--menu-item-active-border-width) solid var(--primary);
      color: var(--menu-item-active-color);
			.submenu-icon::after {
        border-color: var(--primary);
      }
    }
  }

`;

export default SubmenuStyle;