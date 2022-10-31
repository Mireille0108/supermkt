import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import './App.css';
import Footer from './Footer';
import {useState } from 'react'

function App() {
  const [items, setItems] = useState([
    {
        id:1,
        checked:true,
        item:"item 1"
    },
    {
        id:2,
        checked:false,
        item:"item 2"
    },
    {
        id:3,
        checked:false,
        item:"item 3"
    }
]);
const [newItem, setNewItem] = useState('')

  const handleCheck = (id) => {
      const listItems=items.map((item) =>item.id ===id?{...item, checked:!item.checked} :item);
      setItems(listItems)
      localStorage.setItem("shopping list",JSON.stringify(listItems))
  }
  const handeDelete=(id) =>{
const listItems= items.filter((item) =>item.id !==id);
setItems(listItems)
      localStorage.setItem("shopping list",JSON.stringify(listItems))
  }
  const handleSubmit= (e)=>{
e.preventDefault();
if (!newItem) 
return;
setNewItem('')
 {
  
}
  }

  return (
    <div className="App">
      <Header tittle="SHOPPING BASKET"/>
      <Content 
       items={items}
       handleCheck={handleCheck}
       handeDelete={handeDelete}
      />
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
       />
      <Footer length={items.length}
      />      
    </div>
  );

  }
  export default App;
