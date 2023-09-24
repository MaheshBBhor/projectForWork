// src/components/DiaryEntry.js
import React from 'react';

function DiaryEntry({ date, productName, fat }) {
  return (
    <div className="diary-entry">
      <p>Date: {date}</p>
      <p>Product Name: {productName}</p>
      {/* <p>Quantity: {quantity}</p> */}
      <p>Fat: {fat}</p>
    </div>
  );
}

export default DiaryEntry;
