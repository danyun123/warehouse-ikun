import React from "react";

interface carouselTypes {
	height?: string,
	dotSize?: string,
	autoplayTime?: number,
	dotSite?: "left" | "top" | "bottom" | "right",
	direction?: "level" | "vertical"
}

export type CarouselProps = Partial<React.HTMLAttributes<HTMLDivElement> & carouselTypes>
