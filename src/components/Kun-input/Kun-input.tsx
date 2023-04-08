import {
	memo,
	HTMLInputTypeAttribute,
	useState,
	ChangeEvent,
	useEffect,
	SyntheticEvent,
	KeyboardEvent
} from "react";
import { inputProps } from "./type";
import classNames from "classnames";
import InputStyle from "./style";

const KunInput = memo((props: inputProps) => {
	const {
		size, password, addonAfter, addonBefore, disabled, onChange, value, onFocus, onKeyDown,
		onBlur, placeholder, connectAfter, connectBefore, ...restProps
	} = props;
	const [inputValue, setValue] = useState(value ?? "");
	const [isFocus, setIsFocus] = useState(false);
	useEffect(() => {
		if (value) setValue(value);
	}, [value]);
	const inputType: HTMLInputTypeAttribute = password ? "password" : "text";
	const clases = classNames("kun-input", {
		[`input-disabled`]: disabled ?? false,
		[`input-size-${size}`]: size,
		[`input-focus`]: isFocus
	});
	const handleInputValueChange = (event: ChangeEvent) => {
		if (onChange) {
			onChange(event);
		}
		setValue((event.target as HTMLInputElement).value);
	};
	const handleInputFocus = (event: SyntheticEvent) => {
		if (onFocus) {
			onFocus(event);
		}
		setIsFocus(true);
	};
	const handleInputBlur = (event: SyntheticEvent) => {
		if (onBlur) {
			onBlur(event);
		}
		setIsFocus(false);
	};
	const handelKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
		if (onKeyDown) {
			onKeyDown(event.key);
		}
	};
	return (
		<InputStyle>
			<div
				className={clases}
			>
				<label>
					{
						(
							connectBefore ? (
								<span className="connectBefore">
									{connectBefore}
								</span>
							) : null
						) ||
						(
							addonBefore ? (
								<span className="input-before">
									{addonBefore}
								</span>
							) : null
						)
					}
					<input
						type={inputType}
						value={inputValue}
						placeholder={placeholder}
						onChange={e => handleInputValueChange(e)}
						onFocus={e => handleInputFocus(e)}
						onBlur={e => handleInputBlur(e)}
						onKeyDown={e => handelKeyDown(e)}
						{...restProps}
					/>
					{
						(
							connectAfter ? (
								<span className="connectAfter">
									{connectAfter}
								</span>
							) : null
						) ||
						(
							addonAfter ? (
								<span className="input-after">
							{addonAfter}
						</span>
							) : null
						)
					}
				</label>
			</div>
		</InputStyle>
	);
});

export default KunInput;