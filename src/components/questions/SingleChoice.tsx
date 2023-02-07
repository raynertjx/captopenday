import { useState } from "react";
import Button from "./Button";

export default function SingleChoice(props) {
  const [choice, setChoice] = useState<number>(-1);

  function next() {
    // Log choices
    props.logAnswer(props.questionNumber, props.choices[choice]);
    // Clear choices
    // setChoice(-1);
    // Go to next question
    props.next();
  }

  return (
    <div
      id={"question-" + props.questionNumber}
      className="w-full flex flex-col items-center p-4"
    >
      <div className="question">
        <h2 className="text-2xl font-semibold my-8">{props.question}</h2>

        <div className="flex flex-wrap gap-x-4">
          {props.choices
            .map((x) => x.toString())
            .map((x, i) => (
              <Button
                key={x}
                label={x}
                isSelected={choice == i}
                onClick={() => setChoice(i)}
              />
            ))}
        </div>

        <div className="flex flex-row-reverse mt-12">
          <Button onClick={next} label="Next" className="self-end" />
        </div>
      </div>
    </div>
  );
}
