import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useEffect, useRef } from "react";
import ResultCard from "./ResultCard";
import { db } from "../../firebase-config"

async function uploadData(answers) {
  await addDoc(collection(db, "quiz_data"), {
    time: Date.now(),
    colour_ans: answers[1],
    free_ans: answers[2],
    book_ans: answers[3],
    com_ans: answers[4],
  })
}

export default function Finish(props) {
  const selfRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (selfRef.current !== null) {
      selfRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Upload results
  useEffect(() => {
    if (props.answers !== null) {
      uploadData(props.answers)
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
            <ResultCard title={questions[0].titles[answers[1]]} image={questions[0].images[answers[1]]} links={questions[0].links[answers[1]]} />
            <ResultCard title={questions[1].titles[answers[2]]} image={questions[1].images[answers[2]]} links={questions[1].links[answers[2]]} />
            <ResultCard title={questions[2].titles[answers[3]]} image={questions[2].images[answers[3]]} links={questions[2].links[answers[3]]} />
            <ResultCard title={questions[3].titles[answers[4]]} image={questions[3].images[answers[4]]} links={questions[3].links[answers[4]]} />
          </div>
          <p className="text-center my-8">Made with ❤️ by fellow CAPTains</p>
        </div>
      </div>
    </div>
  );
}
