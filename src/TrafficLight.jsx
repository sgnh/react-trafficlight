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
          <rect fill={this.props.BlackColor} x="0" y="0" width="60" height="160" rx="8"></rect>

          <use fill={this.state.redOn ? this.props.RedColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#redCirclePath"></use>
          <use fill={this.state.yellowOn ? this.props.YellowColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#yellowCirclePath"></use>
          <use fill={this.state.greenOn ? this.props.GreenColor : this.props.DisabledColor} fillRule="evenodd" xlinkHref="#greenCirclePath"></use>

          <g onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            <use onClick={this.redClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#redCirclePath"></use>
            <use onClick={this.yellowClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#yellowCirclePath"></use>
            <use onClick={this.greenClick} fill="black" fillOpacity="1" filter="url(#shadowFilter)" xlinkHref="#greenCirclePath"></use>
          </g>
        </svg>
      </div>
    );
    /* eslint-enable max-len */
  }
}

TrafficLight.propTypes = {
  Size: React.PropTypes.number,
  BlackColor: React.PropTypes.string,
  DisabledColor: React.PropTypes.string,
  RedColor: React.PropTypes.string,
  YellowColor: React.PropTypes.string,
  GreenColor: React.PropTypes.string,
};

TrafficLight.defaultProps = {
  Size: 60,
  BlackColor: '#000000',
  DisabledColor: '#4A4A4A',
  RedColor: '#D0021B',
  YellowColor: '#F8E71C',
  GreenColor: '#7ED321',
};
