import React, { Component } from 'react';

export default class TrafficLight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovering: false,
    };
  }

  onLightClick(color) {
    if (this.props.Clickable) {
      this.props.onLightClick(color);
    }
  }

  setHover(isHovering) {
    if (this.props.Clickable) {
      this.setState({
        isHovering,
      });
    }
  }

  render() {
    const scale = 1 / 0.375;

    /* eslint-disable max-len */
    return (
      <span style={{ cursor: this.state.isHovering ? 'pointer' : 'auto' }}>
        <svg width={`${this.props.Size}px`} height={`${this.props.Size * scale}px`} viewBox="0 0 60 160" version="1.1">
          <defs>
            <circle id="redCirclePath" cx="30" cy="30" r="20"></circle>
            <circle id="yellowCirclePath" cx="30" cy="80" r="20"></circle>
            <circle id="greenCirclePath" cx="30" cy="130" r="20"></circle>

            <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="shadowFilter">
              <feGaussianBlur stdDeviation="3" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
              <feOffset dx="0" dy="4" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
              <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
              <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
            </filter>
          </defs>
          <rect fill={this.props.BlackColor} x="0" y="0" width="60" height="160" rx="8"></rect>

          <use fill={this.props.RedOn ? this.props.RedColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#redCirclePath"></use>
          <use fill={this.props.YellowOn ? this.props.YellowColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#yellowCirclePath"></use>
          <use fill={this.props.GreenOn ? this.props.GreenColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#greenCirclePath"></use>

          <g onMouseEnter={() => this.setHover(true)} onMouseLeave={() => this.setHover(false)}>
            <use onClick={() => this.onLightClick('RED')} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#redCirclePath"></use>
            <use onClick={() => this.onLightClick('YELLOW')} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#yellowCirclePath"></use>
            <use onClick={() => this.onLightClick('GREEN')} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#greenCirclePath"></use>
          </g>
        </svg>
      </span>
    );
    /* eslint-enable max-len */
  }
}

TrafficLight.propTypes = {
  Clickable: React.PropTypes.bool,
  onLightClick: React.PropTypes.func,
  RedOn: React.PropTypes.bool,
  YellowOn: React.PropTypes.bool,
  GreenOn: React.PropTypes.bool,
  Size: React.PropTypes.number,
  BlackColor: React.PropTypes.string,
  DisabledColor: React.PropTypes.string,
  RedColor: React.PropTypes.string,
  YellowColor: React.PropTypes.string,
  GreenColor: React.PropTypes.string,
};

TrafficLight.defaultProps = {
  Clickable: false,
  RedOn: false,
  YellowOn: false,
  GreenOn: false,
  onLightClick: () => {},
  Size: 60,
  BlackColor: '#000000',
  DisabledColor: '#4A4A4A',
  RedColor: '#D0021B',
  YellowColor: '#F8E71C',
  GreenColor: '#7ED321',
};
