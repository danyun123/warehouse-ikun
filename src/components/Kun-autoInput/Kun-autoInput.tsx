import { ChangeEvent, memo, SyntheticEvent, useState } from "react";
import { autoInputProps } from "./types";
import classNames from "classnames";
import KunInput from "../Kun-input/Kun-input";
import AutoInputStyle from "./style";

const KunAutoInput = memo((props: autoInputProps) => {
	const {
		selectOptions, fetchOptions, disabled, size, addonAfter, data, optionsLength, enterKeyDown,
		addonBefore, placeholder, defaultValue, ...restProps
	} = props;
	const defaultDisabled = disabled ?? false;
	const [value, setValue] = useState(defaultValue ?? "");
	const [options, setoptions] = useState<string[] | null>();
	const [showOptions, setShowOptions] = useState(false);
	const [currentKeyIndex, setKeyIndex] = useState(-1);
	const handelValueChange = (event: ChangeEvent) => {
		const inputValue = (event.target as HTMLInputElement)?.value;
		const formatValue = inputValue.trim();
		let options: any;
		if (formatValue) {
			if (fetchOptions) {
				options = fetchOptions(formatValue);
			} else {
				options = data?.filter(item => item.includes(formatValue));
			}
			if (options?.length) {
				setoptions(options);
				setShowOptions(true);
			}
		} else {
			setoptions([]);
			setShowOptions(false);
		}
	};
	const handelInputFocus = (event: SyntheticEvent) => {
		handelValueChange(event as ChangeEvent);
	};
	const handelOptions = (event: SyntheticEvent, isCLick: boolean = false, value?: string) => {
		setKeyIndex(-1);
		if (isCLick && value) {
			setValue(value);
			setoptions([]);
		}
		setShowOptions(false);
	};
	const handelkeyDown = (key: string) => {
		switch (key) {
			case "Enter": {
				if (enterKeyDown) {
					enterKeyDown();
				}
				setoptions(null);
				setShowOptions(false);
				break;
			}
			case "ArrowDown": {
				if (!options || currentKeyIndex === (options?.length as number) - 1) break;
				if(selectOptions) {
					selectOptions(options[currentKeyIndex + 1]);
				}
				setKeyIndex(currentKeyIndex + 1);
				setValue(options[currentKeyIndex + 1]);
				break;
			}
			case "ArrowUp": {
				if (!options || currentKeyIndex === 0) break;
				if(selectOptions) {
					selectOptions(options[currentKeyIndex - 1]);
				}
				setKeyIndex(currentKeyIndex - 1);
				setValue(options[currentKeyIndex - 1]);
				break;
			}
		}
	};
	return (
		<AutoInputStyle>
			<div className="kun-autoInput">
				<KunInput
					size={size}
					addonAfter={addonAfter}
					addonBefore={addonBefore}
					placeholder={placeholder}
					value={value}
					onChange={e => handelValueChange(e)}
					onFocus={e => handelInputFocus(e)}
					onBlur={e => handelOptions(e)}
					disabled={defaultDisabled}
					onKeyDown={(key) => handelkeyDown(key)}
					{...restProps}
				/>
				{
					<ul className={classNames("autoInput-options", {
						[`show-options`]: showOptions
					})}>
						{
							options?.slice(0, optionsLength ?? 6).map((item, index) => (
								<li
									key={item}
									className={classNames("options-item", {
										"arrowSelect": index === currentKeyIndex
									})}
									onClick={e => handelOptions(e, true, item)}
								>{item}</li>
							))
						}
					</ul>
				}
			</div>
		</AutoInputStyle>
	);
});

export default KunAutoInput;
