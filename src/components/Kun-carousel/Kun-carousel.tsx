import React, { memo, ReactNode, useEffect, useState, useRef, SyntheticEvent } from "react";
import classNames from "classnames";
import CarouselStyle from "./styles";
import { CarouselProps } from "@/components/Kun-carousel/types";
import KunIcon from "../Kun-icon/Kun-icon";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const KunCarousel = memo((props: CarouselProps) => {
		const { height, children, dotSize, autoplayTime, dotSite, direction,...restProps } = props;
		const [childNumber, setchildNumber] = useState(0);
		const [allCarouselWidth, setAllcarouselWidth] = useState(0);
		const [oneCarouselWidth, setOnecarouselWidth] = useState(0);
		const [allCarouselHeight, setAllcarouselHeight] = useState(0);
		const [oneCarouselHeight, setOnecarouselHeight] = useState(0);
		const [disabledArrow, setDisabledArrow] = useState(false);
		const [currentIndex, setCurrentIndex] = useState(0);
		const [isTransition, setIsTransition] = useState(true);
		const [pauseTimeout, setPauseTimeout] = useState(false);
		const [carouselChild, setCarouselChild] = useState<any[]>([]);
		const timeoutID = useRef<any>();
		const carouselParentRef = useRef<HTMLDivElement>(null);
		const childNumberRef = useRef(childNumber);
		const carouselRef = useRef<HTMLDivElement>(null);
		const clases = classNames("kun-carousel", {
			isTransition: isTransition
		});
		useEffect(() => {
			const carouselInfo = carouselParentRef.current!.getBoundingClientRect();
			setchildNumber((children as ReactNode[])?.length);
			childNumberRef.current = childNumber;
			setAllcarouselWidth(carouselInfo.width * (Number(childNumberRef.current) + 2));
			setAllcarouselHeight(carouselInfo.height * (Number(childNumberRef.current) + 2));
		}, [children, childNumber]);
		useEffect(() => {
			const carouselInfo = carouselParentRef.current!.getBoundingClientRect();
			setOnecarouselWidth(carouselInfo.width);
			setOnecarouselHeight(carouselInfo.height);
		}, [children]);
		useEffect(() => {
			const arr = Array.from(carouselRef.current!.parentNode!.childNodes);
			setCarouselChild(arr);
		}, [childNumber]);
		let dotItem: ReactNode[] = [];
		const handelDotClick = (index: number) => {
			setCurrentIndex(index);
		};
		for (let i = 0; i < childNumberRef.current; i++) {
			dotItem.push(<li
				className={classNames("dot-item", { [`dot-isActive`]: i === currentIndex })}
				key={i}
				onClick={() => handelDotClick(i)}
			> </li>);
		}
		const handelMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
			if (autoplayTime) {
				setPauseTimeout(true);
				clearTimeout(timeoutID.current);
			}
			setDisabledArrow(true);
		};
		const handelMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
			let isEnd: boolean = true;
			for (const item of carouselChild) {
				if (item.contains(event.relatedTarget as Node)) {
					isEnd = false;
				}
			}
			if (!isEnd) {
				return;
			}
			setDisabledArrow(false);
			if (autoplayTime) {
				setPauseTimeout(false);
			}
		};
		const handelArrowClick = (isLeft: boolean) => {
			setIsTransition(true);
			if (isLeft) {
				setCurrentIndex(currentIndex === -1 ? childNumber - 1 : currentIndex - 1);
			} else {
				setCurrentIndex(currentIndex === childNumber ? 0 : currentIndex + 1);
			}
		};
		const childArray = React.Children.toArray(children);
		const firstChild = childArray[0];
		const lastChild = childArray[childArray.length - 1];
		const clonedFirstChild = React.cloneElement(
			React.Children.map(firstChild, child => React.isValidElement(child) ? child : null)![0],
			{ key: "cloned-fist" }
		);
		const clonedLastChild = React.cloneElement(
			React.Children.map(lastChild, child => React.isValidElement(child) ? child : null)![0],
			{ key: "cloned-last" }
		);
		const handleTransitionEnd = () => {
			if (currentIndex === childNumber) {
				setIsTransition(false);
				setCurrentIndex(0);
			} else if (currentIndex === -1) {
				setIsTransition(false);
				setCurrentIndex(childNumber - 1);
			}
		};
		if (autoplayTime && !pauseTimeout) {
			clearTimeout(timeoutID.current);
			timeoutID.current = setInterval(() => {
				handelArrowClick(false);
			}, autoplayTime);
		}

		const carouselStyle = direction !== "vertical" ? {
			transform: `translateX(-${(currentIndex + 1) * oneCarouselWidth}px)`
		} : {
			transform: `translateY(-${(currentIndex + 1) * oneCarouselHeight}px)`
		};
		return (
			//@ts-ignore
			<CarouselStyle
				ref={carouselParentRef}
				height={height}
				entireWidth={allCarouselWidth}
				entireHeight={allCarouselHeight}
				dotSize={dotSize}
				isVertical={direction === "vertical" ?? false}
			>
				<div
					{...restProps}
					ref={carouselRef}
					className={clases}
					onMouseEnter={(e) => handelMouseEnter(e)}
					onMouseLeave={(e) => handelMouseLeave(e)}
					onTransitionEnd={handleTransitionEnd}
					style={carouselStyle}
				>
					{
						<div className="carousel-item">
							{clonedLastChild}
						</div>
					}
					{
						React.Children.map(children, (child) => (
							<div className="carousel-item">
								{child}
							</div>
						))
					}
					<div className="carousel-item">
						{clonedFirstChild}
					</div>
				</div>
				{
					childNumber > 1 && (
						<div className={classNames("dot", {
							[`${dotSite}-dot`]: dotSite
						})}>
							{dotItem}
						</div>
					)
				}
				{
					childNumber > 1 && (
						<div className={classNames("arrow", {
							"disabled-arrow": disabledArrow
						})}>
							<div
								className={classNames("arrow-left arrow-item", {
									[`${dotSite}-dotToArrow`]: dotSite
								})}
								onClick={() => handelArrowClick(true)}
							>
								<KunIcon icon={faAngleLeft} />
							</div>
							<div
								className={classNames("arrow-right arrow-item", {
									[`${dotSite}-dotToArrow`]: dotSite
								})}
								onClick={() => handelArrowClick(false)}
							>
								<KunIcon icon={faAngleRight} />
							</div>
						</div>
					)}
			</CarouselStyle>
		);
	})
;

export default KunCarousel;