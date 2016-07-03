import React, { Component } from 'react';

export default class TrafficLight extends Component {
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.redClick = this.redClick.bind(this);
    this.yellowClick = this.yellowClick.bind(this);
    this.greenClick = this.greenClick.bind(this);

    this.state = {
      redOn: true,
      yellowOn: false,
      greenOn: false,
      cursor: 'auto',
    };
  }

  onMouseEnter() {
    this.setState({
      cursor: 'pointer',
    });
  }

  onMouseLeave() {
    this.setState({
      cursor: 'auto',
    });
  }

  redClick() {
    this.setState({
      redOn: true,
      yellowOn: false,
      greenOn: false,
    });
  }

  yellowClick() {
    this.setState({
      yellowOn: true,
      greenOn: false,
    });
  }

  greenClick() {
    this.setState({
      redOn: false,
      yellowOn: false,
      greenOn: true,
    });
  }

  render() {
    const black = '#000000';
    const red = '#D0021B';
    const yellow = '#F8E71C';
    const green = '#7ED321';

    const scale = this.props.Size / 60;
    const width = 60 * scale;
    const height = 160 * scale;

    /* eslint-disable max-len */
    return (
      <div style={{ cursor: this.state.cursor }}>
        <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 60 160" version="1.1">
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
          <rect fill={black} x="0" y="0" width="60" height="160" rx="8"></rect>

          <g onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.redClick}>
            <use fill={this.state.redOn ? red : '#4A4A4A'} fillRule="evenodd" xlinkHref="#redCirclePath"></use>
            <use fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#redCirclePath"></use>
          </g>
          <g onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.yellowClick}>
            <use fill={this.state.yellowOn ? yellow : '#4A4A4A'} fillRule="evenodd" xlinkHref="#yellowCirclePath"></use>
            <use fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#yellowCirclePath"></use>
          </g>
          <g onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.greenClick}>
            <use fill={this.state.greenOn ? green : '#4A4A4A'} fillRule="evenodd" xlinkHref="#greenCirclePath"></use>
            <use fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#greenCirclePath"></use>
          </g>
        </svg>
      </div>
    );
    /* eslint-enable max-len */
  }
}

TrafficLight.propTypes = {
  Size: React.PropTypes.number,
};

TrafficLight.defaultProps = {
  Size: 60,
};
