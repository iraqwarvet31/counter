import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h4>0</h4>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    );
  }
}
export default App;
