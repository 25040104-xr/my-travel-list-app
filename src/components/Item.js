import SplitFlap from "./SplitFlap";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  const status = item.packed ? "BOARDED" : "WAITING";

  return (
    <li className={`board-row ${item.packed ? "is-packed" : ""}`}>
      <label className="check">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
          aria-label={`Mark ${item.description} as packed`}
        />
        <span className="check-box" />
      </label>

      <SplitFlap text={String(item.quantity).padStart(2, "0")}
        flipKey={item.packed}
        className="qty"
      />

      <SplitFlap
        text={item.description}
        length={10}
        flipKey={item.packed}
        className="item-name"
      />

      <SplitFlap
        text={status}
        flipKey={item.packed}
        className={`status ${item.packed ? "status-boarded" : "status-waiting"}`}
      />

      <button
        className="delete-btn"
        onClick={() => onDeleteItem(item.id)}
        aria-label={`Delete ${item.description}`}
      >
        ✕
      </button>
    </li>
  );
}
