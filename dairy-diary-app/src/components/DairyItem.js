import React from 'react';

function DairyItem({ dairy, onDelete }) {
  // This component displays information about a single dairy entry.
  // It receives a "dairy" object as a prop, containing details of the entry,
  // and a "onDelete" function to handle deletion.

  const handleDeleteClick = () => {
    // Call the onDelete function with the ID of this dairy entry when the delete button is clicked.
    onDelete(dairy._id);
  };
  const rowStyle = {
    display: "flex",
    fontSize: "15px",
    // flexDirection: "row",
    // padding:"0px",
    // margin:"0px",
    
  };
  const entryStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px',
    // marginTop: '30px',
    fontSize: "15px",
  };
  return (
    <div style={entryStyle} className="dairy-item">
      <p style={{margin:"10px"}}>{dairy.product_name}</p>
      <p style={{margin:"10px"}}>Fat Content: {dairy.fat_content}</p>
      <button style={{margin:"10px"}} onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default DairyItem;
