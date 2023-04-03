import styled from "styled-components";

const AutoInputStyle = styled.div`
  .kun-autoInput {
    position: relative;
    width: auto;
    display: inline-block;

    .autoInput-options {
      position: absolute;
      z-index: 999;
      background-color: rgb(244, 244, 245);
      left: 0;
      right: 0;
      border: var(--autoInput-border-width) solid var(--autoInput-border-color);
      box-sizing: border-box;
      margin-left: 11px;
      margin-right: 11px;
      border-radius: var(--autoInput-border-raduis);
      box-shadow: var(--autoInput-box-shadow);
      visibility: hidden;
      opacity: 0;
      transition: opacity .3s ease-in-out, visibility .3s ease-in-out;

      .options-item {
        transition: background-color .2s ease-in-out;
        padding: var(--autoInput-padding);
        box-sizing: border-box;
        :hover {
          background-color: #b1eefe;
          transition: background-color 66ms ease-out;
        }
      }

      .arrowSelect {
        background-color: #c0c0c4 !important;
      }
    }

    .show-options {
      opacity: 1;
      visibility: visible;
    }
  }
`

export default AutoInputStyle;