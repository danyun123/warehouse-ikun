// function throttle(fn: Function, wait: number, options?: ThrottleOptions): Function {
// 	let timerId: ReturnType<typeof setTimeout> | null;
// 	let previous: number = 0;
// 	const defaultOptions: ThrottleOptions = {
// 		leading: true,
// 		trailing: true
// 	};
// 	const opts: ThrottleOptions = Object.assign(defaultOptions, options);
//
// 	return (...args: any[]) => {
// 		const now = Date.now();
// 		if (!previous && !opts.leading) {
// 			previous = now;
// 		}
// 		const remaining = wait - (now - previous);
// 		if (remaining <= 0 || remaining > wait) {
// 			if (timerId) {
// 				clearTimeout(timerId);
// 				timerId = null;
// 			}
// 			previous = now;
// 			//@ts-ignore
// 			fn.apply(this, args);
// 		} else if (!timerId && opts.trailing) {
// 			timerId = setTimeout(() => {
// 				previous = opts.leading ? 0 : Date.now();
// 				timerId = null;
// 				//@ts-ignore
// 				fn.apply(this, args);
// 			}, remaining);
// 		}
// 	};
// }
//
// interface ThrottleOptions {
// 	leading?: boolean;
// 	trailing?: boolean;
// }
//
// export default throttle;

// interface ThrottleOptions {
// 	leading?: boolean;
// 	trailing?: boolean;
// }
//
// function throttle<T extends Function>(
// 	fn: T,
// 	wait: number,
// 	options: ThrottleOptions = {}
// ): T {
// 	let timerId: ReturnType<typeof setTimeout> | null;
// 	let previous = 0;
// 	const { leading = true, trailing = true } = options;
//
// 	function throttled(this: any, ...args: any[]) {
// 		const now = Date.now();
//
// 		if (!previous && !leading) {
// 			previous = now;
// 		}
//
// 		const remaining = wait - (now - previous);
//
// 		if (remaining <= 0 || remaining > wait) {
// 			if (timerId) {
// 				clearTimeout(timerId);
// 				timerId = null;
// 			}
// 			previous = now;
// 			return fn.apply(this, args);
// 		} else if (!timerId && trailing) {
// 			timerId = setTimeout(() => {
// 				previous = leading ? 0 : Date.now();
// 				timerId = null;
// 				fn.apply(this, args);
// 			}, remaining);
// 		}
// 	}
//
// 	return throttled as unknown as T;
// }
//
// export default throttle;

const now = (): number => new Date().getTime();

type ThrottleOptions = {
	leading?: boolean;
	trailing?: boolean;
};

export default function throttle<T extends (...args: any[]) => any>(
	func: T,
	wait: number,
	options?: ThrottleOptions
): T & { cancel: () => void } {
	let timeout: number | null |  NodeJS.Timeout, context: any, args: any, result: any;
	let previous = 0;
	if (!options) options = {};

	const later = (): void => {
		previous = options?.leading === false ? 0 : now();
		timeout = null;
		result = func.apply(context, args);
		if (!timeout) context = args = null;
	};

	const throttled = function (this: any, ..._args: any[]): any {
		const _now = now();
		if (!previous && options?.leading === false) previous = _now;
		const remaining = wait - (_now - previous);
		context = this;
		args = _args;
		if (remaining <= 0 || remaining > wait) {
			if (timeout) {
				clearTimeout(timeout);
				timeout = null;
			}
			previous = _now;
			result = func.apply(context, args);
			if (!timeout) context = args = null;
		} else if (!timeout && options?.trailing !== false) {
			timeout = setTimeout(later, remaining);
		}
		return result;
	} as T & { cancel: () => void };

	throttled.cancel = function (): void {
		clearTimeout(timeout!);
		previous = 0;
		timeout = context = args = null;
	};
	return throttled;
}