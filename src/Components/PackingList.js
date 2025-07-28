import { useState } from "react";
import  Item  from "./Item";

export default function PackingList({ newItem, onDeleteItem, onToggleItem, onClearList }) {

  const [sortBy, setSortBy] = useState('input');


  let sortedItem;
  if (sortBy === 'input') sortedItem = newItem; 
  if (sortBy === 'description') sortedItem = newItem.slice().sort((a, b) => a.description.localeCompare(b.description)); 
  if (sortBy === 'packed') sortedItem = newItem.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  function handleSort(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => <Item itemObj={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} key={item.id} />)}
      </ul>
      <div className="childBtn">
        <select value={sortBy} onChange={handleSort} className="btnStyle">
          <option value='input'>Sort by input Order</option>
          <option value='description'>Sort by Description</option>
          <option value='packed'>Sort by packed</option>
        </select>
        <button className="btnStyle" onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
