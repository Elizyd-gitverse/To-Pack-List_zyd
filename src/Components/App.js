import { useEffect, useState } from "react";
import Logo from './Logo.js'
import Form from './Form.js'
import  PackingList  from "./PackingList.js";
import  Stats  from "./Stats.js";


export default function App(){
  const [items, setItem] = useState(function() {
    const storeItem = JSON.parse(localStorage.getItem('Items'))
    return storeItem || []
  }) 
  function handleAddItem(newItem) {
    setItem(item => [newItem, ...item ])
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

  useEffect(function() {
  localStorage.setItem('Items', JSON.stringify(items))
 })

  return (
    <div className="app">
    <Logo />
    <Form onAddItems={handleAddItem}/>
    <PackingList newItem={items} onDeleteItem={handleDelete} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
    <Stats items={items} />
    </div>
  )
}






