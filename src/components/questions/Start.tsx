export default function Start(props) {
  return (
    <div id="start-question" className="w-full flex flex-row flex-wrap">
      <div className="w-1/2 border">
        <h2 className="text-2xl">What kind of <strong>CAPTain</strong> are you?</h2>
        <h3 className="text-lg">Ready to find out?</h3>
      </div>
      <div className="w-1/2 border h-full flex flex-col justify-center">
        <button onClick={() => props.next()}>Take Quiz</button>
      </div>
    </div>
  )
}