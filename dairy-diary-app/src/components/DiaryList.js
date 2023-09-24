import React, { useState, useEffect } from "react";
import axios from "axios";
import DairyItem from './DairyItem';
function DairyList() {
  const [dairyData, setDairyData] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch dairy data when the component mounts
    axios
      .get("http://localhost:5000/api/dairy")
      .then((response) => {
        // Update the state with the fetched data
        
        setDairyData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dairy data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/dairy/${id}`)
      .then((response) => {
        console.log('Dairy entry deleted successfully');
        // Update dairyData state by removing the deleted entry
        setDairyData((prevData) => prevData.filter((dairy) => dairy._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting dairy entry:', error);
      });
  };
  const handleAdd = (newDairyEntry) => {
    // Update dairyData state by adding the new entry
    setDairyData((prevData) => [...prevData, newDairyEntry]);
  };

  if (dairyData.length === 0) {
    return <div>No dairy entries available.</div>;
  }
  return (
    <div>
    <h1>Dairy Product List</h1>
    {dairyData.map((dairy) => (
      <DairyItem key={dairy._id} dairy={dairy} onDelete={handleDelete} />
    ))}
  </div>
);
}

export default DairyList;
