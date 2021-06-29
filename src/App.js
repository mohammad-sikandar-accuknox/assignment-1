import "./App.css";
import Input from "./components/Input";
import React, { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [arrow, setArrow] = useState(true);
  const [query, setQuery] = useState("");
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
    {
      id: "4",
      item: "Linux",
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
  function changeDesc(lists, value) {
    for (var i in lists) {
      lists[i].selected = value;
    }
    return lists;
  }
  const handleDropdown = (e) => {
    updateItem(e, { selected: true });
  };
  const handleChip = (e) => {
    updateItem(e, { selected: false });
  };
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };
  const handleArrow = () => {
    setArrow((arrow) => !arrow);
    console.log(arrow);
  };
  const handleClear = () => {
    const lists = [...items];
    setItems(changeDesc(lists, false));
  };
  return (
    <>
      <Input
        items={items}
        chip={handleChip}
        arrow={arrow}
        handleQuery={handleQuery}
        handleArrow={handleArrow}
        handleClear={handleClear}
      />
      <div style={{ margin: "3px" }}></div>
      <Dropdown
        items={items}
        drop={handleDropdown}
        query={query}
        arrow={arrow}
      />
    </>
  );
}

export default App;
