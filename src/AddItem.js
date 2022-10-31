import React from 'react'

const AddItem = (newItem, setNewItem, handleSubmit) => {
  return (
    <form className='addForm' onSubmit={onSubmit}>
        <label htmlFor='addItem'>Add item </label>
        <input autoFocus id='addItem' type='text' placeholder='Add Item' required 
        value={newItem} onChange={(e) =>setNewItem(e.target.value)} />
        <button type='submit' aria-label='add item'></button>

    </form>
  )
}

export default AddItem