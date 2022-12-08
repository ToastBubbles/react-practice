import React from "react";
import Clock from "./Clock";

class ClockMapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numbers: [1, 2, 3, 4, 5] };
  }

  componentDidMount() {
    this.setState({
      //numbers: Math.ceil(Math.random() * 10),
    });
    // this.mapClocks();
  }

  //   mapClocks() {
  //     this.setState((state) => ({
  //       //listItems: state.numbers.map((number) => (
  //         <Clock key={state.number.toString()} />
  //       //)),
  //     }));
  //   }
  //   componentWillUnmount() {
  //     clearInterval(this.timerID);
  //   }
  render() {
    return (
      <div>
        <Clock key={this.state.numbers[0].toString()} />
        <Clock key={this.state.numbers[1].toString()} />
        <Clock key={this.state.numbers[2].toString()} />
      </div>
    );
  }
}

export default ClockMapper;
