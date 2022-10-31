import React from 'react'

const ListItem = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
        {items.map((item)=>(  
   <ListItem 
     key={item.id}
   item={item}
   handleCheck={handleCheck}
   handleDelete={handleDelete}
   />
    ))}
    </ul>
  )
}

export default ListItem