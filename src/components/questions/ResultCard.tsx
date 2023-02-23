export default function ResultCard(props) {
  console.log(props.links);
  console.log(props);

  return (
    <div className="h-96 w-64 border bg-white rounded-lg mx-4 mt-8 flex flex-col justify-center">
      {props.title !== "" && (
        <div className="text-black text-2xl text-center mb-4">
          {props.title}
        </div>
      )}
      <img
        className="w-48 h-48 mx-auto rounded"
        src={`/img/${props.image}`}
        alt=""
      />
      <div className="flex flex-col gap-y-1 mt-2">
        {props.links.map((x) => (
          <a href={x.url}>
            <div className="bg-black text-white text-sm max-w-fit py-2 px-3 rounded mx-auto rounded-2xl" style={{backgroundColor: "hsla(337, 75%, 28%, 1)"}}>
              {x.label}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
