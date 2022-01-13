import React from "react";
import Loading from "./loading.svg";
import "./App.css";

interface AppProps {
  isLoading: boolean;
  emoji: string;
  icon: any;
}

class App extends React.Component<{}, AppProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      emoji: "❔",
      icon: <div className="Emoji">❔</div>,
    };
  }

  click(): void {
    if (!this.state.isLoading) {
      this.setState({
        icon: <img className="Loading" src={Loading} alt="Loading icon." />,
        isLoading: true,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.icon}

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
