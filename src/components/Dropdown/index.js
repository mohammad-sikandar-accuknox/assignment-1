import React from "react";
import "../Dropdown/index.css";

const Dropdown = (props) => {
  const { items, drop } = props;
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        if (!item.selected) {
          return (
            <div
              className="CenterDrop"
              key={item.id}
              onClick={() => drop(item.id)}
            >
              {item.item}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Dropdown;
