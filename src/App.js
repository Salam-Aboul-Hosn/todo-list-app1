import './App.css';
import Header from "./Components/Header.jsx"
import Note from "./Components/Note.jsx"
import Footer from "./Components/Footer.jsx"
import CreateArea from "./Components/CreateArea";
import {useState} from "react"

function App() {
  const [array, setArray] = useState([]);

  function addNote(newNote) {
    setArray(prevNote => {
      return [...prevNote, newNote]
    })
  }

  function deleteItem(id) {
    setArray((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="App">
      <Header />
      <CreateArea 
      onAdd = {addNote} 
      />

      {array.map((value, index) => {
          return <Note key={index} title= {value.title} content= {value.content} onDelete = {deleteItem} id = {index} />;
      })}
      
      <Footer />
    </div>
  );
}

export default App;
