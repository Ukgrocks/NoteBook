import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props)=>{
const url = "http://localhost:5000";
  

/*Giving a Random note data from MongoDB database */
    const notesInitial = [
       
    ]
    
/*Making a useState function for fetching and setting notes on our react application */
    const [notes,setNotes] = useState(notesInitial)

    //get all Notes
    const getNotes = async ()=>{
        const response = await fetch(`${url}/api/notes/fetchallnotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token" : localStorage.getItem('token')
            }
           
           // body data type must match "Content-Type" header
          });
    const json = await response.json()

 setNotes(json)
    }

//Add a Note
const addNote = async (title,description,tag)=>{
    const response = await fetch(`${url}/api/notes/addnote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
       
        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
      });

    // const json = await response.json();
    // console.log(json)
    console.log("Adding a New Note")
  
    const note = await response.json();
    setNotes(notes.concat(note))
}

//delete a note
const deleteNote = async(id)=>{

    const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
       
       // body data type must match "Content-Type" header
      });
     const json = response.json(); // parses JSON response into native JavaScript objects
     console.log(json);

console.log("Delete the node with id: " + id)
const newNotes = notes.filter((note)=>{return note._id!==id}) //deleting notes with particular id
setNotes(newNotes) //setting new outlook of notes
}

//Edit a note
const editNote = async(id,title,description,tag)=>{
    const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token" : localStorage.getItem('token')
        },
      
        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
      });
      
     const json = await response.json(); // parses JSON response into native JavaScript objects
     console.log(json);

     let newNotes = JSON.parse(JSON.stringify(notes))

for (let index = 0; index <  newNotes.length; index++) {
    const element =  newNotes[index];
    if(element._id===id){
      newNotes[index].title=title;
      newNotes[index].description = description;
      newNotes[index].tag = tag;
      break;
    }
   
}
setNotes( newNotes)
}

    return (
        //Sending notes and set notes functionality as contexts
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
       {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;