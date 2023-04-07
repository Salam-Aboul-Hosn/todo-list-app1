import {useState} from "react"
import Note from "./Note"

function CreateArea(props) {

    const [note, setNote] = useState( {
        title: "",
        content: ""
    });

    function addItem(event) {
        const {name, value} = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        event.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }
    
    return (
      <div>
        <form className="create-note">
          <input onChange={addItem} name="title" placeholder="Title" value = {note.title} />
          <textarea onChange={addItem} name="content" placeholder="Take a note..." rows="3" value = {note.content}  />
          <button onClick = {submitNote}>Add</button>
        </form>
      </div>
    );
  }
  
  export default CreateArea;