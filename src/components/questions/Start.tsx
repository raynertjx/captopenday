export default function Start(props) {
  return (
    <div id="start-question" className="w-full">
      <div className="w-full my-24">
        <div className="w-full flex-col content-center">
          <h3 className="text-2xl text-center my-8">Ready to find out ...</h3>
          <h2 className="text-2xl text-center my-8">
            What kind of <strong>CAPTain</strong> are you?
          </h2>
        </div>
        <div className="w-full flex justify-center">
          <button className="border rounded-3xl px-14 py-3 bg-white text-black" onClick={props.next}>
            Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
}
