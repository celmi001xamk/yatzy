import '../css/diceSvg.css';

export function DiceSvg({ value, locked }) {
  switch (value) {
    case 1:
      return (
        <svg className={locked ? "lockedDice" : "freeDice"}>
          <circle cx="50%" cy="50%" r="6" fill="black" />
        </svg>
      );
    case 2:
      return (
        <svg className={locked ? "lockedDice" : "freeDice"}>
          <circle cx="15%" cy="15%" r="6" fill="black" />
          <circle cx="85%" cy="85%" r="6" fill="black" />
        </svg>
      );
    case 3:
      return (
        <svg className={locked ? "lockedDice" : "freeDice"}>
          <circle cx="50%" cy="50%" r="6" fill="black" />
          <circle cx="15%" cy="15%" r="6" fill="black" />
          <circle cx="85%" cy="85%" r="6" fill="black" />
        </svg>
      );
    case 4:
      return (
        <svg className={locked ? "lockedDice" : "freeDice"}>
          <circle cx="15%" cy="15%" r="6" fill="black" />
          <circle cx="85%" cy="15%" r="6" fill="black" />
          <circle cx="15%" cy="85%" r="6" fill="black" />
          <circle cx="85%" cy="85%" r="6" fill="black" />
        </svg>
      );
    case 5:
      return (
        <svg className={locked ? "lockedDice" : "freeDice"}>
          <circle cx="15%" cy="15%" r="6" fill="black" />
          <circle cx="85%" cy="15%" r="6" fill="black" />
          <circle cx="15%" cy="85%" r="6" fill="black" />
          <circle cx="85%" cy="85%" r="6" fill="black" />
          <circle cx="50%" cy="50%" r="6" fill="black" />
        </svg>
      );
    case 6:
      return (
        <svg className={locked ? "lockedDice" : "freeDice"}>
          <circle cx="15%" cy="15%" r="6" fill="black" />
          <circle cx="15%" cy="50%" r="6" fill="black" />
          <circle cx="15%" cy="85%" r="6" fill="black" />
          <circle cx="85%" cy="15%" r="6" fill="black" />
          <circle cx="85%" cy="50%" r="6" fill="black" />
          <circle cx="85%" cy="85%" r="6" fill="black" />
        </svg>
      );
    default:
      return <svg className={locked ? "lockedDice" : "freeDice"}></svg>;
  }
}
