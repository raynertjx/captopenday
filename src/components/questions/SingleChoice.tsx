import { useState } from "react"

export default function SingleChoice(props) {
  const [choice, setChoice] = useState<string>("")

  function next() {
    // Log choices
    props.logAnswer(props.questionNumber, choice);
    // Clear choices
    setChoice("");
    // Go to next question
    props.next()
  }

  return (
    <div id="start-question" className="w-full flex flex-row flex-wrap">
      <div className="w-1/2 border">
        <h2 className="text-2xl">{props.question}</h2>
        <form>
          { props.choices.map((x) => x.toString()).map((x, i) => 
            <div key={x}>
              <input type="radio" value={x} name={props.question} onChange={(cb) => setChoice(x)}/>
              <label htmlFor={x}>{x}</label>
            </div>
          )}
          <div>
          </div>
        </form>
      </div>
      <div className="w-1/2 border h-full flex flex-col justify-center">
        <button onClick={next} disabled={!choice}>Next</button>
      </div>
    </div>
  )
}