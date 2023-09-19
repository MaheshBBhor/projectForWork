import React from "react";
import DiaryEntry from "./DiaryEntry";

function DiaryList({ entries, onDelete }) {
  return (
    <div>
      <h2>Diary Entries</h2>
      {entries.map((entry, index) => (
        <DiaryEntry
          key={index}
          entry={entry}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}

export default DiaryList;

