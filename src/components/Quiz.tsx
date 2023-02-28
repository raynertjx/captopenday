import { useRef, useState } from "react";
import Start from "./questions/Start";
import MultiChoice from "./questions/MultiChoice";
import SingleChoice from "./questions/SingleChoice";
import Finish from "./questions/Finish";
import { questions } from "./questions/question-data";

export default function Quiz() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [maxQuestionNumber, setMaxQuestionNumber] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [answerTimes, setAnswerTimes] = useState<Record<string, any>>({});
  const questionRefs = useRef<Record<number, HTMLElement | null>>({});

  function nextQuestion(questionNumber: number) {
    const nextQuestionNumber = questionNumber + 1;
    setQuestionNumber(nextQuestionNumber);
    setMaxQuestionNumber(Math.max(nextQuestionNumber, maxQuestionNumber));
    if (nextQuestionNumber in questionRefs.current) {
      const element = questionRefs.current[nextQuestionNumber];
      if (element != null) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function prevQuestion(questionNumber: number) {
    const prevQuestionNumber = questionNumber - 1;
    setQuestionNumber(prevQuestionNumber);
    if (prevQuestionNumber in questionRefs.current) {
      const element = questionRefs.current[prevQuestionNumber];
      if (element != null) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  function logAnswer(questionNumber: number, answer: any) {
    let copy: Record<string, any> = { ...answers };
    copy[questionNumber] = answer;
    let copyTimes: Record<string, any> = { ...answerTimes };
    copyTimes[questionNumber] = Date.now();
    setAnswers(copy);
    setAnswerTimes(copyTimes);
  }

  function renderQuestions(questionNumber: number, maxQuestionNumber: number) {
    let elements: JSX.Element[] = [
      <div
        key={0}
        ref={(x) => {
          questionRefs.current[0] = x;
        }}
      >
        <Start key="0" next={() => nextQuestion(0)} />
      </div>,
    ];
    let len = elements.length;

    elements = elements.concat(
      questions.slice(0, maxQuestionNumber + 1 - len).map((x, i) => (
        <div
          key={len + i}
          ref={(x) => {
            questionRefs.current[len + i] = x;
          }}
        >
          <SingleChoice
            key={len + i}
            question={x["question"]}
            choices={x["choices"]}
            questionNumber={len + i}
            next={() => nextQuestion(len + i)}
            prev={() => prevQuestion(len + i)}
            logAnswer={logAnswer}
          />
        </div>
      ))
    );

    if (maxQuestionNumber >= len + questions.length) {
      elements.push(<Finish key="finish" answers={answers} answerTimes={answerTimes} questions={questions} />)
    }

    return elements;
  }

  return (
    <div id="quiz" className="w-full">
      {renderQuestions(questionNumber, maxQuestionNumber)}
    </div>
  );
}
