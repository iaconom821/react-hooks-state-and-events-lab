import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items] = useState(itemData);
  
  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  

  let [dark, setDark] = useState(false)

  function changeDark () {
    setDark(() => dark = !dark)
  }

  let dMode = dark ? "dark" : "light"

  return (
    <div className={"App " + dMode }>
      <header>
        <h2>Shopster</h2>
        <button onClick={ changeDark }>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
