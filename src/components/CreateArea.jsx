import React, {useState} from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {

  const [note , setNote] = useState(
    {title : "",
    content : ""
    });

  const [isExpanded, setExpanded] = useState(false);
  
  function handleChange(event){
    const {name, value}= event.target;

    setNote( prevNote => {
      return {...prevNote,
      [name] : value
    };
    });
  }

  function submitNote(event){
    props.onAdd(note);
    setNote({title : "",
    content : ""
    });
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        { isExpanded ? 
        <input name="title" 
        placeholder="Title"
        onChange={handleChange}
        value={note.title}
         /> : null}
        
        <textarea 
        name="content" 
        onClick={expand}
        placeholder="Take a note..."
        onChange={handleChange}
        value={note.content}
        rows={isExpanded ? 3: 1} />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
