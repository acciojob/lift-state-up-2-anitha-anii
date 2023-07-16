import React, { Component } from 'react';
import ChildComponent from './ChildComponent';


class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="parent">
        <h2>Parent Component</h2>
        <p>{this.state.inputValue}</p>
        <ChildComponent inputValue={this.state.inputValue} onInputChange={this.handleInputChange} />
            </div>
    );
  }
}

export default ParentComponent;

