import "./App.css";
import Input from "./components/Input";
import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [items, setItems] = useState([
    {
      id: "1",
      item: "Android",
      selected: false,
    },
    {
      id: "2",
      item: "IOS",
      selected: false,
    },
    {
      id: "3",
      item: "Windows",
      selected: false,
    },
  ]);
  function updateItem(id, itemAttributes) {
    var index = items.findIndex((x) => x.id === id);
    if (index === -1) {
    }
    // handle error
    else
      setItems([
        ...items.slice(0, index),
        Object.assign({}, items[index], itemAttributes),
        ...items.slice(index + 1),
      ]);
  }
  const handleDropdown = (e) => {
    updateItem(e, { selected: true });
  };
  const handleChip = (e) => {
    updateItem(e, { selected: false });
  };
  return (
    <>
      <Input items={items} chip={handleChip} />
      <div style={{margin:'3px'}}></div>
      <Dropdown items={items} drop={handleDropdown} />
    </>
  );
}

export default App;
