import {render,fireEvent} from "@testing-library/react";
import KunButton from "./Kun-button";
import { ButtonProps } from "./types"
import '@testing-library/jest-dom'
import React from "react";

const defaultProps = {
	// 创建一个mock事件
	onClick: jest.fn()
}

const testProps: ButtonProps = {
	btnType: 'danger',
	size: 'lg',
	round: true,
}

const disabledProps: ButtonProps = {
	disabled: true,
	onClick: jest.fn(),
}

describe('test KunButton', () => {
	it('default', () => {
		const wrapper = render(<KunButton {...defaultProps}>Nice</KunButton>)
		const element = wrapper.getByText('Nice') as HTMLButtonElement
		expect(element).toBeInTheDocument()
		expect(element.tagName).toEqual('BUTTON')
		expect(element).toHaveClass('btn btn-default')
		// 判断disabled值是否为false
		expect(element.disabled).toBeFalsy()
		// 手动触发点击
		fireEvent.click(element)
		// 判断是否正常触发点击事件
		expect(defaultProps.onClick).toHaveBeenCalled()
	})
	it('different props', () => {
		const wrapper = render(<KunButton {...testProps}><span>hhh</span></KunButton>)
		const element = wrapper.getByRole("button")
		expect(element).toHaveClass('btn btn-danger btn-lg btn-round')
	})
	it('when disabled', () => {
		const wrapper = render(<KunButton {...disabledProps}>Nice</KunButton>)
		const element = wrapper.getByText('Nice') as HTMLButtonElement
		expect(element.disabled).toBeTruthy()
		fireEvent.click(element)
		expect(disabledProps.onClick).not.toHaveBeenCalled()
	})
})