# Traffic light component for React
![Traffic light](https://github.com/sgnh/react-trafficlight/raw/master/docs/trafficlight.png "Traffic light")

## Installation
```
npm install --save react-trafficlight
```

## Example use
![Traffic light status example](https://github.com/sgnh/react-trafficlight/raw/master/docs/trafficlight-status.png "Traffic light status example")

## Usage example 1
```javascript
import React from 'react';
import TrafficLight from 'react-trafficlight';

const TrafficLightContainerExample1 = () => (
  <div>
    <TrafficLight RedOn />
    <TrafficLight RedOn YellowOn />
    <TrafficLight YellowOn />
    <TrafficLight GreenOn />
  </div>
);

export default TrafficLightContainerExample1;
```

## Usage example 2 - Clickable
```javascript
import React, { Component } from 'react';
import TrafficLight from 'react-trafficlight';

class TrafficLightContainerExample2 extends Component {
  state = {
    redOn: true,
    yellowOn: false,
    greenOn: false,
  }

  render() {
    return (
      <TrafficLight
        onRedClick={() => this.setState({ redOn: !this.state.redOn })}
        onYellowClick={() => this.setState({ yellowOn: !this.state.yellowOn })}
        onGreenClick={() => this.setState({ greenOn: !this.state.greenOn })}
        RedOn={this.state.redOn}
        YellowOn={this.state.yellowOn}
        GreenOn={this.state.greenOn}
      />
    );
  }
}

export default TrafficLightContainerExample2;
```
