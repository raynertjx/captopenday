import { useState } from "react";
import Test from "./Test";
import Icles from "./Icles";
import Start from "./questions/Start";
import MultiChoice from "./questions/MultiChoice";
import SingleChoice from "./questions/SingleChoice";

export default function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answers, setAnswers] = useState({});

  function nextQuestion() {
    setQuestionNumber(questionNumber + 1);
  }

  function logAnswer(questionNumber: number, answer: any) {
    let copy = { ...answers };
    copy[questionNumber] = answer;
    setAnswers(copy);
  }

  function renderQuestion(questionNumber: number) {
    let element: JSX.Element;
    switch (questionNumber) {
      case 0:
        element = <Start next={nextQuestion} />;
        break;
      case 1:
        element = (
          <MultiChoice
            question="What interests you most?"
            choices={["1", "2", "3"]}
            questionNumber={questionNumber}
            next={nextQuestion}
            logAnswer={logAnswer}
          />
        );
        break;
      case 2:
        element = (
          <MultiChoice
            question="During your free time..."
            choices={["5", "7", "8"]}
            questionNumber={questionNumber}
            next={nextQuestion}
            logAnswer={logAnswer}
          />
        );
        break;
      case 3:
        element = (
          <SingleChoice
            question="What is your favourite colour?"
            choices={["blue", "yellow"]}
            questionNumber={questionNumber}
            next={nextQuestion}
            logAnswer={logAnswer}
          />
        );
        break;
      default:
        element = <div>Error occurred!</div>;
    }
    return element;
  }

  return (
    <div id="quiz" className="w-full border h-96">
      <h2>Quiz</h2>
      {renderQuestion(questionNumber)}
      <button onClick={() => nextQuestion()}>next</button>
      <div>
        <p>{JSON.stringify(answers)}</p>
      </div>
    </div>
  );
}
