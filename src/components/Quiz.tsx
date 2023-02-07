import { useRef, useState } from "react";
import Start from "./questions/Start";
import MultiChoice from "./questions/MultiChoice";
import SingleChoice from "./questions/SingleChoice";

export default function Quiz() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [maxQuestionNumber, setMaxQuestionNumber] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  function nextQuestion(questionNumber: number) {
    setQuestionNumber(questionNumber + 1);
    setMaxQuestionNumber(Math.max(questionNumber + 1, maxQuestionNumber));
  }

  function logAnswer(questionNumber: number, answer: any) {
    let copy: Record<string, any> = { ...answers };
    copy[questionNumber] = answer;
    setAnswers(copy);
  }

  const questions = [
    {
      question: "What is your favourite colour?",
      choices: ["Blue", "Green", "Yellow", "Black", "Red"],
    },
    {
      question: "What do you like to do during your free time?",
      choices: [
        "Playing sports with my friends!",
        "Arts and Craft",
        "Dancing",
        "Enjoying music",
        "Cooking and Baking",
        "Explore a different activity!",
      ],
    },
    {
      question:
        "Imagine you are at the library, pick the book title that interests you most!",
      choices: [
        "Pursuit of Happiness",
        "Bioethics in the 21st Century",
        "Beyond Borders: Migrants",
        "Inside the Museum",
      ],
    },
    {
      question: "Pick a community you want to engage with!",
      choices: [
        "Deaf Community",
        "Underprivileged Elderly",
        "Foster Children",
        "Animals",
        "Migrants",
        "Explore a different community!",
      ],
    },
  ];

  function renderQuestions(questionNumber: number, maxQuestionNumber: number) {
    let elements: JSX.Element[] = [
      <Start key="0" next={() => nextQuestion(0)} />,
    ];
    let len = elements.length;

    elements = elements.concat(
      questions
        .slice(0, maxQuestionNumber + 1 - len)
        .map((x, i) => (
          <SingleChoice
            key={len + i}
            question={x["question"]}
            choices={x["choices"]}
            questionNumber={len + i}
            next={() => nextQuestion(len + i)}
            logAnswer={logAnswer}
          />
        ))
    );

    return elements;
  }

  return (
    <div id="quiz" className="w-full">
      {renderQuestions(questionNumber, maxQuestionNumber)}
      <div>
        <p>{JSON.stringify(answers)}</p>
      </div>
    </div>
  );
}
