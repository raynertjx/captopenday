import { useEffect, useRef, useState } from "react";
import Button from "./Button";

export default function SingleChoice(props) {
  const [choice, setChoice] = useState<number>(-1);
  const selfRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (selfRef.current !== null) {
      selfRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  function next() {
    // Log choices
    props.logAnswer(props.questionNumber, props.choices[choice]);
    // Clear choices
    // setChoice(-1);
    // Go to next question
    props.next();
  }

  function prev() {
    props.prev();
  }

  return (
    <div
      id={"question-" + props.questionNumber}
      className="w-full flex flex-col items-center justify-center p-4 min-h-screen"
      ref={selfRef}
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

        <div className="flex flex-row mt-12 justify-between">
          <Button onClick={prev} label="Back" />
          <Button onClick={next} label="Next" />
        </div>
      </div>
    </div>
  );
}
