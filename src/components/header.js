export function Header({ isGameOn, setIsGameOn, setPlayerName }) {
  return (
    <div className="header">
      <input
        placeholder="Give your name!"
        onChange={(e) => {
          if(!isGameOn) setPlayerName(e.target.value);
        }}
        disabled = {isGameOn}
      />
      <button
        onClick={() => {
          setIsGameOn(!isGameOn);
        }}
      >
        {isGameOn ? "Change name" : "Start"}
      </button>
      <button
        onClick={() => {
          setIsGameOn(!isGameOn);
        }}
      >
        Reset
      </button>
    </div>
  );
}
