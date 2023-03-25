function throttle(fn: Function, wait: number, options?: ThrottleOptions): Function {
	let timerId: ReturnType<typeof setTimeout> | null;
	let previous: number = 0;
	const defaultOptions: ThrottleOptions = {
		leading: true,
		trailing: true
	};
	const opts: ThrottleOptions = Object.assign(defaultOptions, options);

	return (...args: any[]) => {
		const now = Date.now();
		if (!previous && !opts.leading) {
			previous = now;
		}
		const remaining = wait - (now - previous);
		if (remaining <= 0 || remaining > wait) {
			if (timerId) {
				clearTimeout(timerId);
				timerId = null;
			}
			previous = now;
			//@ts-ignore
			fn.apply(this, args);
		} else if (!timerId && opts.trailing) {
			timerId = setTimeout(() => {
				previous = opts.leading ? 0 : Date.now();
				timerId = null;
				//@ts-ignore
				fn.apply(this, args);
			}, remaining);
		}
	};
}

interface ThrottleOptions {
	leading?: boolean;
	trailing?: boolean;
}

export default throttle;