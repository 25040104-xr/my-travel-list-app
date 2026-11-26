import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("input");

  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  let sortedItems = [...filteredItems];
  if (sortBy === "description")
    sortedItems.sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  if (sortBy === "quantity")
    sortedItems.sort((a, b) => b.quantity - a.quantity);

  return (
    <main className="list">
      <div className="toolbar">
        <input
          type="search"
          className="search"
          placeholder="SEARCH ITEM…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} aria-label="Sort items">
          <option value="input">Sort: order added</option>
          <option value="description">Sort: A → Z</option>
          <option value="packed">Sort: waiting first</option>
          <option value="quantity">Sort: quantity</option>
        </select>
        <button className="clear-btn" onClick={onClearList}>
          Clear board
        </button>
      </div>

      <div className="board-head">
        <span />
        <span>QTY</span>
        <span>ITEM</span>
        <span>STATUS</span>
        <span />
      </div>

      {items.length === 0 && (
        <p className="empty">NO DEPARTURES SCHEDULED · ADD YOUR FIRST ITEM ABOVE</p>
      )}
      {items.length > 0 && sortedItems.length === 0 && (
        <p className="empty">NO ITEM MATCHES "{search.toUpperCase()}"</p>
      )}

      <ul className="board">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </main>
  );
}
