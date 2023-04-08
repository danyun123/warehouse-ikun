import styled from "styled-components";
import { btnSize, btnType } from "./mixin";

const ButtonStyle = styled.div`
  display: inline-block;
  margin: 1px;

  .kun-btn {
    position: relative;
    display: inline-block;
    font-weight: var(--btn-font-weight);
    font-size: var(--btn-font-size);
    line-height: var(--line-height-base);
    color: var(--body-color);
    white-space: nowrap;
    text-align: center;
    vertical-align: middle;
    border: var(--btn-border-width) solid transparent;
    padding: var(--btn-padding-y) var(--btn-padding-x);
    border-radius: var(--btn-border-radius);
    box-shadow: var(--btn-box-shadow);
    cursor: pointer;
    transition: all 50ms ease-in-out;

    > span {
      display: inline-block;
    }

    &[disabled] {
      cursor: not-allowed !important;
      box-shadow: none !important;
      opacity: .5 !important;

      :hover {
        border-color: var(--gray-500);
      }

      * > {
        pointer-events: none;
      }
    }

    :hover {
      opacity: .6;
    }

    :active {
      box-shadow: 0 0 2px 2px #0737f5;
    }
  }

  .btn-lg {
    ${btnSize("lg")}
  }

  .btn-sm {
    ${btnSize("sm")}
  }

  .btn-primary {
    ${btnType("--primary", "--primary", "--white")}
  }

  .btn-default {
    border: 1px solid;
    ${btnType("--white", "--gray-500", "--black", null)}
  }

  .btn-danger {
    ${btnType("--danger", "--danger", "--white")}
  }

  .btn-round {
    min-width: 32px;
    padding: 3px 0;
    padding-inline-start: 0;
    padding-inline-end: 0;
    border-radius: 50%;
    box-sizing: border-box;
    color: var(--black);
    overflow: hidden;
  }
`;
export default ButtonStyle;
