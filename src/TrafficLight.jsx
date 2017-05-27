import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TrafficLight extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const scale = 1 / 0.375;

    /* eslint-disable max-len */
    return (
      <svg width={`${this.props.Size}px`} height={`${this.props.Size * scale}px`} viewBox="0 0 60 160" version="1.1">
        <defs>
          <circle style={{ cursor: this.props.onRedClick ? 'pointer' : undefined }} id="redCirclePath" cx="30" cy="30" r="20" />
          <circle style={{ cursor: this.props.onYellowClick ? 'pointer' : undefined }} id="yellowCirclePath" cx="30" cy="80" r="20" />
          <circle style={{ cursor: this.props.onGreenClick ? 'pointer' : undefined }} id="greenCirclePath" cx="30" cy="130" r="20" />

          <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="shadowFilter">
            <feGaussianBlur stdDeviation="3" in="SourceAlpha" result="shadowBlurInner1" />
            <feOffset dx="0" dy="4" in="shadowBlurInner1" result="shadowOffsetInner1" />
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1" />
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1" />
          </filter>
        </defs>
        <rect fill={this.props.BlackColor} x="0" y="0" width="60" height="160" rx="8" />

        <use fill={this.props.RedOn ? this.props.RedColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#redCirclePath" />
        <use fill={this.props.YellowOn ? this.props.YellowColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#yellowCirclePath" />
        <use fill={this.props.GreenOn ? this.props.GreenColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#greenCirclePath" />

        <g>
          <use onClick={this.props.onRedClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#redCirclePath" />
          <use onClick={this.props.onYellowClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#yellowCirclePath" />
          <use onClick={this.props.onGreenClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#greenCirclePath" />
        </g>
      </svg>
    );
    /* eslint-enable max-len */
  }
}

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
};
