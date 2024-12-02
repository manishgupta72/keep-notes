import React from 'react'
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
export const Note = (props) => {
    const deleteNote = () => {
        props.onDelete(props.id);
    }
    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <Button className='notebtn' onClick={deleteNote}>
                <DeleteOutlineIcon className='deleteIcon' />
            </Button>

        </div>
    )
}

export default Note;