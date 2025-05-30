import { useState } from "react";
import Logo from './Logo.js'
import Form from './Form.js'
import  PackingList  from "./PackingList.js";
import  Stats  from "./Stats.js";

console.log('GitHub Project')

export default function App(){
  const [items, setItem] = useState([]) 
  function handleAddItem(newItem) {
    setItem(item => [...item, newItem])
 }


 function handleDelete(id) {
  setItem(item=> item.filter(item=> item.id !== id))
 }


 function handleToggleItem(id) {
  setItem(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item))
 }

 function handleClearList() {
  const confirmed = window.confirm('Are you sure you want to delete All items 🤔')
  if(confirmed) setItem([])
 }

  return (
    <div className="app">
    <Logo />
    <Form onAddItems={handleAddItem}/>
    <PackingList newItem={items} onDeleteItem={handleDelete} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
    <Stats items={items} />
    </div>
  )
}






