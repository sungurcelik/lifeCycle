import { Component } from "react";

class Sayac extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("didMount çalıştı");
  }

  componentWillUnmount() {
    console.log("ClassComponent ekrandan gitti");
  }

  changeCount = (changeType) => {
    if (changeType === "arttir") {
      this.setState({ count: this.state.count + 1 });
    } else if (changeType === "azalt") {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={() => this.changeCount("arttir")}>ARTTIR</button>
        <p>{this.state.count}</p>
        <button onClick={() => this.changeCount("azalt")}>AZALT</button>
      </div>
    );
  }
}
export default Sayac;
