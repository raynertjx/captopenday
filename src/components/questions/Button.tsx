export default function Button(props) {
  return (
    <div className="button max-w-content">
      <button
        className={
          "border rounded-3xl px-14 py-3 my-3 max-w-content hover:font-semibold " +
          (props.isSelected
            ? "text-black font-semibold bg-white "
            : "text-white ")
        }
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
}
