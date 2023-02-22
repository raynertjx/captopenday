import { useEffect, useRef } from "react";
import ResultCard from "./ResultCard";

export default function Finish(props) {
  const selfRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (selfRef.current !== null) {
      selfRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  let questions = props.questions;
  let answers = props.answers;

  return (
    <div id="finish" className="w-full min-h-screen flex flex-col items-center justify-center" ref={selfRef}>
      <div className="w-full my-24">
        <div className="w-full flex-col content-center">
          <h3 className="text-2xl text-center my-8">Your results are in!</h3>
          <div className="flex flex-row flex-wrap justify-center">
            <ResultCard title={questions[0].titles[answers[1]]} subText="5 Houses, 1 CAPT" />
            <ResultCard title={questions[1].titles[answers[2]]} subText="5 Houses, 1 CAPT" />
            <ResultCard title={questions[2].titles[answers[3]]} subText="5 Houses, 1 CAPT" />
            <ResultCard title={questions[3].titles[answers[4]]} subText="5 Houses, 1 CAPT" />
          </div>
          <p className="text-center my-8">Made with ❤️ by fellow CAPTains</p>
        </div>
      </div>
    </div>
  );
}
