//Aquí es donde se lee el color. Cambia de state, traigo la note, el useNotes que tiene las funciones de add y delete. Aquí va a pasar todo.
//Guardamos lo que traiga el input text
//Se tienen que ver todas las notas

import { useState } from 'react';
import useNotes from '../hooks/useNotes'
import { useColor } from '../context/ColorContext'
import Note from './Note'
import styles from './Note.module.css'

// Hooks states

function NoteBoard() {

  const [text, setText] = useState('')
  const { notes, addNote, deleteNote, updateNoteColor } = useNotes()
  const { color } = useColor()

  //maneja eventos
  const handleAddNote = () => {
    if(!text.trim()) {
      alert('El campo texto está vacío')
      return
    }
    
    addNote(text, color)
    setText('')
  }
  return (
    <>
      <div>
        <input type="text" placeholder='Añade aquí tu tarea' value={text} onChange={(e) => setText(e.target.value)} />
        <button className={styles.btn} onClick={handleAddNote}>Añadir tarea</button>
      </div>
      <div className={styles.noteList}>
        {notes.length === 0 && <h4>No hay notas todavía</h4>}
        {notes.map((note) => (
          <Note key={note.id} id={note.id} text={note.text} color={note.color} deleteNote={deleteNote} updateNoteColor={updateNoteColor} />
        ))}
      </div>
    </>
  )
}

export default NoteBoard