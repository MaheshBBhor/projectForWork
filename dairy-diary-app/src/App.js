import React, { useState, useEffect } from "react";
import "./App.css";
import DiaryForm from "./components/DiaryForm";
import DiaryList from "./components/DiaryList";

function App() {
  const [entries, setEntries] = useState([]);
  const [brandName, setBrandName] = useState("Dwarkadhish Milk Dairy");
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

  const deleteEntry = (index) => {
    const updatedEntries = [...entries];
    updatedEntries.splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <h1>Dwarkadhish Dairy</h1>
          <h1 className="brandName">{brandName}</h1>
          <DiaryForm onAddEntry={addEntry} />
          <DiaryList entries={entries} onDelete={deleteEntry} />
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





