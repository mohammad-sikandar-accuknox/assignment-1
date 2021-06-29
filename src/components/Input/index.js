import React from "react";
import "../Input/index.css";
import Chip from "../Chip";
import Arrow from "../DropArrow";

const Input = (props) => {
  const { items, chip, arrow, handleQuery, handleArrow, handleClear } = props;
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

        <input className="Input" onChange={handleQuery} autoFocus />
        <span className="close-btn" onClick={handleClear}>
          &times;
        </span>
        <div
          style={{
            marginRight: "6px",
            paddingTop: "2px",
            color: "silver",
            fontWeight: "700",
          }}
        >
          |
        </div>
        <Arrow arrow={arrow} handleArrow={handleArrow} />
      </div>
    </div>
  );
};

export default Input;
