import React, { useState } from "react";
import axios from 'axios';

function DiaryForm({setDairyData}) {
  const [date, setDate] = useState("");
  // const [quantity, setQuantity] = useState("");

  const [product, setProduct] = useState({
    product_name: '',
    fat_content: 0,
  });
  const [fat, setFat] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.product_name || product.fat_content === 0) {
      alert("Please enter both product name and fat content.");
      return;
    }
  
    try {
      // Send a POST request to your server
      // await axios.post('http://localhost:5000/api/dairy', product);
      // Clear the form after successful submission

      const response = await axios.post('http://localhost:5000/api/dairy', product);
      // Assuming your server responds with the newly created dairy entry
      const newDairyEntry = response.data;
      setDairyData((prevData) => [...prevData, newDairyEntry]);
console.log(newDairyEntry,"newDairyEntry");
      setProduct({ product_name: '', fat_content: 0 });
      // onAdd(newDairyEntry);
    } catch (error) {
      console.error('Error adding dairy entry:', error);
    }
  };

  return (
    // <form 
    // onSubmit={handleSubmit}
    // >
    // <div>
    //   <h2 style={paragraphStyle}>Add a Diary Entry</h2>
    //   <input
    //     type="date"
    //     placeholder="Date"
    //     value={date}
    //     onChange={(e) => setDate(e.target.value)}
    //     style={paragraphStyle}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Dairy Product"
    //     value={product}
    //     onChange={(e) => setProduct(e.target.value)}
    //     style={paragraphStyle}
    //   />
    //   {/* <input
    //     type="number"
    //     placeholder="Quantity"
    //     value={quantity}
    //     onChange={(e) => setQuantity(e.target.value)}
    //     style={paragraphStyle}
    //   /> */}
    //   <input
    //     type="number"
    //     placeholder="Fat Intake (g)"
    //     value={fat}
    //     onChange={(e) => setFat(e.target.value)}
    //     style={paragraphStyle}
    //   />
    //   <button style={paragraphStyle} onClick={addEntry}>
    //     Add Entry
    //   </button>
    // </div>
    // </form>
    <form onSubmit={handleSubmit} style={{margin:"50px"}}>
    <label style={{marginRight:"15px"}}>
      Product Name:
      <input
        type="text"
        name="product_name"
        value={product.product_name}
        onChange={handleChange}
      />
    </label>
    <label style={{marginRight:"15px"}}>
      Fat Content (%):
      <input
        type="number"
        name="fat_content"
        value={product.fat_content}
        onChange={handleChange}
      />
    </label>
    <button type="submit">Add Dairy Entry</button>
  </form>
  );
}

export default DiaryForm;

