export const theme = {
	disabledStyle: `
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
	`
};