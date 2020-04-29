/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const scale = 1 / 0.375;

const TrafficLight = ({
  onRedClick,
  onYellowClick,
  onGreenClick,
  RedOn,
  YellowOn,
  GreenOn,
  Size,
  BlackColor,
  DisabledColor,
  RedColor,
  YellowColor,
  GreenColor,
  Horizontal,
  ...props
}) => (
  <svg width={`${Size * (Horizontal ? scale : 1)}px`} height={`${Size * (Horizontal ? 1 : scale)}px`} viewBox={Horizontal ? "0 0 160 60" : "0 0 60 160"} version="1.1" {...props}>
    <defs>
      <circle style={{ cursor: onRedClick ? 'pointer' : undefined }} id="redCirclePath" cx="30" cy="30" r="20" />
      <circle style={{ cursor: onYellowClick ? 'pointer' : undefined }} id="yellowCirclePath" cx="30" cy="80" r="20" />
      <circle style={{ cursor: onGreenClick ? 'pointer' : undefined }} id="greenCirclePath" cx="30" cy="130" r="20" />

      <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="shadowFilter">
        <feGaussianBlur stdDeviation="3" in="SourceAlpha" result="shadowBlurInner1" />
        <feOffset dx="0" dy="4" in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1" />
        <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1" />
      </filter>
    </defs>
    <g transform={Horizontal ? `rotate(-90 30 30)` : undefined}>
      <rect fill={BlackColor} x="0" y="0" width="60" height="160" rx="8" />

      <use fill={RedOn ? RedColor : DisabledColor} fillRule="evenodd" xlinkHref="#redCirclePath" />
      <use fill={YellowOn ? YellowColor : DisabledColor} fillRule="evenodd" xlinkHref="#yellowCirclePath" />
      <use fill={GreenOn ? GreenColor : DisabledColor} fillRule="evenodd" xlinkHref="#greenCirclePath" />

      <use onClick={onRedClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#redCirclePath" />
      <use onClick={onYellowClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#yellowCirclePath" />
      <use onClick={onGreenClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#greenCirclePath" />
    </g>
  </svg>
);

TrafficLight.propTypes = {
  onRedClick: PropTypes.func,
  onYellowClick: PropTypes.func,
  onGreenClick: PropTypes.func,
  RedOn: PropTypes.bool,
  YellowOn: PropTypes.bool,
  GreenOn: PropTypes.bool,
  Size: PropTypes.number,
  BlackColor: PropTypes.string,
  DisabledColor: PropTypes.string,
  RedColor: PropTypes.string,
  YellowColor: PropTypes.string,
  GreenColor: PropTypes.string,
  Horizontal: PropTypes.bool,
};

TrafficLight.defaultProps = {
  onRedClick: undefined,
  onYellowClick: undefined,
  onGreenClick: undefined,
  RedOn: false,
  YellowOn: false,
  GreenOn: false,
  Size: 60,
  BlackColor: '#000000',
  DisabledColor: '#4A4A4A',
  RedColor: '#D0021B',
  YellowColor: '#F8E71C',
  GreenColor: '#7ED321',
  Horizontal: false,
};

export default TrafficLight;
