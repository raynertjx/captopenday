export default function Button(props) {
  return (
    <div className="button max-w-content">
      <button
        disabled={props.isDisabled}
        className={
          "border rounded-3xl px-14 py-3 my-3 max-w-content " +
          (props.isSelected
            ? "text-black font-semibold bg-white "
            : "text-white ") +
          (props.isDisabled ? "font-light " : "hover:font-semibold ")
        }
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
}
