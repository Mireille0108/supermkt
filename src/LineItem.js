import React from 'react'
import ListItem from './ListItem'
const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
    <li className='item' key={item.id}>
    <input type="checkbox" checked={item.checked} onChange={() =>handleCheck(item.id)} />
    <label>{item.item}</label>
    <button onClick={()=>handleDelete(item.id)}>Delete </button>
</li>
  )
}

export default LineItem