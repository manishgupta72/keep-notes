import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";

function App() {
  const [addItem, setItem] = useState([]);
  const addNote = (note) => {
    // alert("clicked");

    setItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const deletenote = (id) => {
    setItem((oldData) => {
      return oldData.filter((curval, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            onDelete={deletenote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
