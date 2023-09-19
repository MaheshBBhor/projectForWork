import React, { useState } from "react";

function DiaryForm({ onAddEntry }) {
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState("");

  const [product, setProduct] = useState("");
  const [fat, setFat] = useState("");

  const addEntry = () => {
    if (date.trim() !== "" && product.trim() !== "" && fat.trim() !== "") {
      onAddEntry({ date, product, fat, quantity });
      //   console.log("add", onAddEntry({ date, product, fat }), date, fat);
      setDate("");
      setProduct("");
      setFat("");
      setQuantity("");
    }
  };
  const paragraphStyle = {
    fontSize: "40px",
  };
  return (
    <div>
      <h2 style={paragraphStyle}>Add a Diary Entry</h2>
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={paragraphStyle}
      />
      <input
        type="text"
        placeholder="Dairy Product"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        style={paragraphStyle}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        style={paragraphStyle}
      />
      <input
        type="number"
        placeholder="Fat Intake (g)"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
        style={paragraphStyle}
      />
      <button style={paragraphStyle} onClick={addEntry}>
        Add Entry
      </button>
    </div>
  );
}

export default DiaryForm;

