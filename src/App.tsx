import React from "react";
import Loading from "./loading.svg";
import "./App.css";

interface AppProps {
  isLoading: boolean;
  emoji: string;
  loading: any;
}

class App extends React.Component<{}, AppProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      emoji: "❔",
      loading: <img className="Loading" src={Loading} alt="Loading icon." />,
    };
  }

  click(): void {
    if (this.state.isLoading) {
      this.setState({ emoji: "." });
    } else {
      this.setState({ emoji: "❔" });
    }
    console.log(this.state.isLoading);

    this.setState({ isLoading: !this.state.isLoading });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.loading}
          <div className="Emoji">{this.state.emoji}</div>

          <div className="Input">
            <select name="Language" id="lang">
              <option value="en">🇬🇧</option>
              <option value="fr">🇫🇷</option>
            </select>
            <input type="text" placeholder="Search term" />
            <button onClick={() => this.click()}>Calculate</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
