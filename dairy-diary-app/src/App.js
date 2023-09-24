import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import DiaryForm from "./components/DiaryForm";
import DiaryList from "./components/DiaryList";
import DairyItem from "./components/DairyItem";
function App() {
  const [dairyData, setDairyData] = useState([]);

  const [entries, setEntries] = useState([]);
  const [brandName, setBrandName] = useState("Dwarkadhish Milk Dairy");

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
      return () => {
        setDairyData([]);
      };
  }, []);
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/dairy/${id}`)
      .then((response) => {
        console.log("Dairy entry deleted successfully");
        // Update dairyData state by removing the deleted entry
        setDairyData((prevData) =>
          prevData.filter((dairy) => dairy._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting dairy entry:", error);
      });
  };


  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random brand name for the changing effect
      const randomNames = [
        "Dwarkadhish Milk",
        "Dairy Delight",
        "Moo Moo Dairy",
        "Fresh & Creamy",
      ];
      const randomIndex = Math.floor(Math.random() * randomNames.length);
      const newBrandName = randomNames[randomIndex];
      setBrandName(newBrandName);
    }, 3000); // Change the brand name every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    // Load diary entries from localStorage when the app loads.
    const storedEntries =
      JSON.parse(localStorage.getItem("diaryEntries")) || [];
    setEntries(storedEntries);
  }, []);

  useEffect(() => {
    // Save diary entries to localStorage whenever the entries state changes.
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  // if (dairyData.length === 0) {
  //   return <div>No dairy entries available.</div>;
  // }
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <h1>Dwarkadhish Dairy</h1>
          <h1 className="brandName">{brandName}</h1>
          <DiaryForm onAddEntry={addEntry} setDairyData={setDairyData} />
          {/* <DiaryList  /> */}
          {dairyData.map((dairy) => (
            <DairyItem key={dairy._id} dairy={dairy} onDelete={handleDelete} />
          ))}
        </header>
      </div>
      {/* <header className="App-header">
        <h1>Dairy Diary</h1>
        <DiaryForm onAddEntry={addEntry} />
        <DiaryList entries={entries} onDelete={deleteEntry} />
      </header> */}
    </div>
  );
}

export default App;
