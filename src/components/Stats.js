export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);

  let message;
  if (numItems === 0) message = "Board is empty · start adding items";
  else if (percentage === 100) message = "All boarded · ready for takeoff";
  else message = `${numPacked} of ${numItems} boarded · final call pending`;

  return (
    <footer className={`stats ${percentage === 100 ? "is-ready" : ""}`}>
      <div className="stats-text">
        <span>{message}</span>
        <span className="stats-pct">{percentage}%</span>
      </div>
      <div className="flight-path">
        <span className="dot dot-start" />
        <span className="plane" style={{ left: `${percentage}%` }} aria-hidden="true">✈</span>
        <span className="dot dot-end" />
      </div>
    </footer>
  );
}
