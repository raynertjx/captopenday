export default function ResultCard(props) {
  return (
    <div className="h-80 w-64 border border-white rounded-lg mx-4 mt-8 flex flex-col">
      <div className="text-white text-3xl font-bold text-center mt-12">{ props.title }</div>
      <div className="bg-white text-black mt-8 max-w-fit py-4 px-8 rounded mx-auto">{ props.subText }</div>
    </div>
  );
}
