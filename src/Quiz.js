import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizEnd from "./QuizEnd";
let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz_position: 1,
    };
  }

  showNextQuestion() {
    this.setState({
      quiz_position: this.state.quiz_position + 1,
    });
  }

  render() {
    let quizend = false;
    if (this.state.quiz_position - 1 == quizData.quiz_questions.length) {
      quizend = true;
    }

    const isQuizEnd = quizend;
    console.log(quizData.quiz_questions);
    return (
      <div>
        {isQuizEnd ? (
          <QuizEnd />
        ) : (
          <div>
            <QuizQuestion
              showNextQuestionHandler={this.showNextQuestion.bind(this)}
              quiz_question={
                quizData.quiz_questions[this.state.quiz_position - 1]
              }
            />
          </div>
        )}
      </div>
    );
  }
}

export default Quiz;
