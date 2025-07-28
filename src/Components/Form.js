import { useState } from "react";

export default function Form({onAddItems}) {

  const [description, setDescription] = useState('') 
  const [quantity, setQuantity] = useState(1)
  
  function handleSubmit(e) { 
    e.preventDefault();
    if(!description) return;
    const newItem = { description, quantity, packed: false, id:  Date.now()}
 
    console.log(newItem)
    onAddItems(newItem)
    // setDescription('') 
    setQuantity(1)
  }

  function descriptionChange(e) {
    console.log(e.target.value)
    setDescription(e.target.value)
  }

  function NumberQtyChange(e) { 
    console.log(e.target.value)
    setQuantity(+e.target.value)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 Trip?</h3>
      <select value={quantity} onChange={NumberQtyChange}>
        {Array.from({length: 20}, (_, key) => key + 1).map((num) => <option value={num} key={num}>{num}</option>)} 
      </select>
      <input type='text' placeholder='Item...' value={description} onChange={descriptionChange}/>
   
      <button className="btn btnStyle">ADD</button>
    </form>
  )
}