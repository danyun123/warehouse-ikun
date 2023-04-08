import styled from "styled-components";

const InputStyle = styled.div`
  width: auto;
  .kun-input {
    display: inline-flex;
    vertical-align: center;
    justify-content: center;
    align-content: center;
    margin: 10px 10px;
    width: 26vw;
    border: var(--input-border-width) var(--input-border-color) solid;
    border-radius: var(--input-border-radius);
    background-color: var(--input-bg);
    padding: var(--input-padding-y) var(--input-padding-x);
    color: var(--input-color);
    font: var(--input-font-size) var(--input-font-family) var(--input-font-weight);
    transition: var(--input-transition);
    overflow: auto;

    label {
      display: flex;
      width: 100%;

      input {
        outline: none;
        border: none;
        font: inherit;
        color: inherit;
        width: 100%;

        :hover {
          border-color: rgb(179, 202, 245);
        }
      }

      span {
        display: inline-block;
      }

      .input-after {
        margin: 0 -3px 0 3px;
      }

      .input-before {
        margin: 0 3px 0 -3px;
      }

      .connectBefore {
        background-color: var(--input-connet-bgc);
        border-right: 1px solid var(--input-connet-border-color);
        margin: -4px 6px -4px -11px;
        padding: 4px;
        color: inherit;
      }

      .connectAfter {
        background-color: var(--input-connet-bgc);
        border-left: 1px solid var(--input-connet-border-color);
        margin: -4px -11px -4px 2px;
        padding: 4px;
        color: inherit;
      }
    }

    :hover {
      border-color: #4180e1;
    }
  }

  .input-focus {
    border-color: var(--primary);
    box-shadow: var(--input-box-shadow);
  }

  .input-size-lg {
    padding: var(--input-padding-y-lg) var(--input-padding-x-lg);
    font-size: var(--input-font-size-lg);
  }

  .input-size-sm {
    padding: var(--input-padding-y-sm) var(--input-padding-x-sm);
    font-size: var(--input-font-size-sm);
  }

  .input-disabled {
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
`;

export default InputStyle;