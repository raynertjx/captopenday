import { useState } from "react"

export default function MultiChoice(props) {
  const [choices, setChoices] = useState<string[]>([])

  function choiceOnChange(choice: string, cb) {
    if (cb.target.checked) {
      if (!choices.includes(choice)) {
        setChoices(choices.slice().concat([choice]))
      }
    } else {
      if (choices.includes(choice)) {
        let arr = choices.slice()
        arr.splice(choices.indexOf(choice), 1)
        setChoices(arr)
      }
    }
  }

  function next() {
    // Log choices
    props.logAnswer(props.questionNumber, choices);
    // Clear choices
    setChoices([]);
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
              <input type="checkbox" value={x} name={x} onChange={(cb) => choiceOnChange(x, cb)}/>
              <label htmlFor={x}>{x}</label>
            </div>
          )}
          <div>
          </div>
        </form>
      </div>
      <div className="w-1/2 border h-full flex flex-col justify-center">
        <button onClick={next} disabled={!choices}>Next</button>
        <button onClick={() => console.log(choices)}>Log</button>
      </div>
    </div>
  )
}