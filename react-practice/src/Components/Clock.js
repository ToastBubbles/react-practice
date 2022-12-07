import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), timer: 5 };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.timer <= 0) {
      this.setState({
        timer: "boom",
      });
    } else if (this.state.timer > 0) {
      this.setState({
        date: new Date(),
        timer: (this.state.timer -= 1),
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>{this.state.timer.toString()}.</h2>
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
      </div>
    );
  }
}

export default Clock;
