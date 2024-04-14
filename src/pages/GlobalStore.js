import React from 'react';

class GlobalStore extends React.Component {
  static instance;

  state = {
    GLOBAL_VAR: 0
  };

  static getInstance() {
    if (!GlobalStore.instance) {
      GlobalStore.instance = new GlobalStore();
    }
    return GlobalStore.instance;
  }

  incrementGlobalVar = () => {
    this.setState({ GLOBAL_VAR: this.state.GLOBAL_VAR + 1 });
  };

  render() {
    return (
      <div>
        <h1>Global Store</h1>
        <p>Global variable value: {this.state.GLOBAL_VAR}</p>
        <button onClick={this.incrementGlobalVar}>Increment Global Var</button>
      </div>
    );
  }
}

export default GlobalStore;