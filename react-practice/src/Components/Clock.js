import React from "react";

// Components must be capitolized
// returning JSX requires ( /../ ) parenthesis

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), timer: Math.ceil(Math.random() * 10) };
    this.cancelCountdown = this.cancelCountdown.bind(this); //alternate listener
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
      this.setState((state) => ({
        timer: state.timer - 1,
      }));
    }
  }

  cancelCountdown() {
    if (this.state.timer !== "boom") {
      this.setState({
        timer: "cancelled",
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>{this.state.timer.toString()}.</h2>
        <button onClick={this.cancelCountdown}>Cancel Countdown</button>
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
      </div>
    );
  }
}

export default Clock;
