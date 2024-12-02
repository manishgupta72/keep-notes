import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })
    const  [expand,setExpand]=useState(false);

    const InputEvent = (event) => {

        // const name=event.target.name;
        // const value=event.target.value;

        const { name, value } = event.target;

        setNote((prev) => {
            return {
                ...prev,
                [name]: value

            }
        });
        console.log(note);
    }

    const addNoteEvent = () => {

        props.passNote(note);
        setNote({
            title: "",
            content: ""
        })

    };
    const shrinkNote=()=>{
     setExpand(true);
    }
    const backToNormalShrinkNote=()=>{
     setExpand(false);
    }

    return (
        <div className='main-note' onDoubleClick={backToNormalShrinkNote} >
            <form >
               {expand?  <input type="text" name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off' />:null}
                <textarea name='content' value={note.content}  onClick={shrinkNote} onChange={InputEvent} placeholder='Write a Note ...' cols="0" rows="0"></textarea>
               { expand? <Button className='btn'onClick={addNoteEvent} >
                    <AddIcon className='plus' />
                </Button>:null}
            </form>
        </div>
    )
}

export default CreateNote;
