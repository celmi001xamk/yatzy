import "../css/throwBtn.css";

export function ThrowBtn({throwCount, throwDices}) {
  return (
    <button className="throwBtn" onClick={() => throwDices()}>
      Throw dice {throwCount}/3
    </button>
  );
}
