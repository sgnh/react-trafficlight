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
import TrafficLight from 'react-trafficlight';

const TrafficLightContainerExample1 = () => (
  <div>
    <TrafficLight RedOn />
    <TrafficLight RedOn YellowOn />
    <TrafficLight YellowOn />
    <TrafficLight GreenOn />
  </div>
);
```

# Usage example 2 - Clickable
```javascript
import TrafficLight from 'react-trafficlight';

class TrafficLightContainerExample2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redOn: true,
      yellowOn: false,
      greenOn: false,
    };
  }

  onLightClick(color) {
    this.setState({
      redOn: color === 'RED',
      yellowOn: color === 'YELLOW',
      greenOn: color === 'GREEN',
    });
  }

  render() {
    return (
      <div>
        <TrafficLight
          Clickable
          onLightClick={(color) => this.onLightClick(color)}
          RedOn={this.state.redOn}
          YellowOn={this.state.yellowOn}
          GreenOn={this.state.greenOn}
        />
      </div>
    );
  }
}
```
