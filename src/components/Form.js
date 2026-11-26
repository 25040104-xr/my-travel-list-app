import { useState } from "react";

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) return;

    const newItem = {
      id: Date.now(),
      description: description.trim().toUpperCase(),
      quantity,
      packed: false,
    };

    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="item-input">What do you need to pack?</label>
      <div className="form-controls">
        <select aria-label="Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>{String(num).padStart(2, "0")}</option>
          ))}
        </select>
        <input
          id="item-input" type="text" placeholder="TYPE ITEM…" maxLength={18} value={description} onChange={(e) => setDescription(e.target.value)}/>
        <button type="submit">Board +</button>
      </div>
    </form>
  );
}
