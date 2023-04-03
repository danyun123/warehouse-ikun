import styled from "styled-components";

interface styleProps {
	height: string,
	entireWidth: number,
	entireHeight: number,
	dotSize: string,
	isVertical: boolean
}

const CarouselStyle = styled.div<styleProps>`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  color: white;

  .kun-carousel {
    width: ${props => props.isVertical ? `100%` : props.entireWidth + `px`};
    height: ${props => props.isVertical ? props.entireHeight + `px` : `100%`};
    background-color: #323f50;
    overflow: hidden;
    display: flex;
		flex-direction: ${props => props.isVertical ? `column` : `row`};
    .carousel-item {
      width: 100%;
      height: 100%;
    }
  }

  .isTransition {
    transition: transform var(--carousel-transition);
  }

  .dot {
    position: absolute;
    bottom: 6%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;

    .dot-item {
      width: ${props => props.dotSize ?? 8 + `px`};
      height: ${props => props.dotSize ?? 8 + `px`};
      border-radius: 50%;
      background-color: #969191;
      margin: 0 5px;
      transition: scale var(--carousel-transition), background-color var(--carousel-transition);

      :hover {
        scale: var(--carousel-hover-scale);
        background-color: #d5e7ff;
      }
    }

    .dot-isActive {
      background-color: white !important;
      scale: var(--carousel-active-scale) !important;
    }
  }

  .top-dot {
    top: 6%;
		bottom: auto;
  }

  .left-dot {
    left: 6%;
    right: auto;
    flex-direction: column;
    bottom: 50%;
    transform: translateY(50%);

    .dot-item {
      margin: 5px 0 !important;
    }
  }

  .right-dot {
    right: 6%;
    left: auto;
    flex-direction: column;
    bottom: 50%;
    transform: translateY(50%);

    .dot-item {
      margin: 5px 0 !important;
    }
  }

  .arrow {
    visibility: hidden;
    opacity: 0;
    transition: visibility var(--carousel-transition), opacity var(--carousel-transition);
		
    .arrow-item {
      position: absolute;
      bottom: 50%;
      font-size: 25px;
      transform: translateY(50%);
      transition: font-size var(--carousel-transition), color var(--carousel-transition);
      padding: 5px;
      box-sizing: border-box;

      &:hover {
        font-size: 30px;
        color: #9cc4ff;
      }
    }

    .arrow-left {
      left: 1%;
    }

    .arrow-right {
      right: 1%;
    }
  }

  .disabled-arrow {
    visibility: visible;
    opacity: 1;
  }

  .right-dotToArrow,
  .left-dotToArrow {
		left: 48.5% !important;
		transform: translateX(-50%) !important;
    height: 2em;
  }
  .left-dotToArrow.arrow-left,
  .right-dotToArrow.arrow-left {
		top: 1% !important;
		bottom: auto;
    left: auto;
		transform: rotate(-270deg) !important;
  }
  .right-dotToArrow.arrow-right ,
  .left-dotToArrow.arrow-right {
    bottom: 1% !important;
		top: auto;
		right: auto;
    transform: rotate(90deg) !important;
  }
`;
export default CarouselStyle;
