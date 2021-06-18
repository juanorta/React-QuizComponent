import React, { Component } from "react";

class QuizQuestionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(button_text) {
    this.props.clickHandler(button_text);
  }

  render() {
    return (
      <div>
        <li>
          <button onClick={this.handleClick(this.props.button_text)}>
            {this.props.button_text}
          </button>
        </li>
      </div>
    );
  }
}

export default QuizQuestionButton;
