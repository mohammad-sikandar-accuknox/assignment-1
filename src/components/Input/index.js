import React from "react";
import "../Input/index.css";
import Chip from "../Chip";

const Input = (props) => {
  const { items, chip } = props;
  return (
    <div>
      <div className="Center">
        {items.map((item) => {
          if (item.selected) {
            return (
              <Chip
                value={item.item}
                key={item.id}
                updateChip={chip}
                id={item.id}
              />
            );
          } else {
            return null;
          }
        })}

        <input className="Input" autoFocus />
      </div>
    </div>
  );
};

export default Input;
