//Esto gestiona la lógica de añadir y eliminar notas con FUNCIONES addNote(text, color), deleteNote(id)
//Useaffect para guardar cuando cambian
import { useState, useEffect } from 'react';
import {v4 as uuidv4 } from 'uuid'

const useNotes = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes')
    return savedNotes ? JSON.parse(savedNotes) : []
  })

  const addNote = (text, color) => {

    const newNote = {
      id: uuidv4(),
      text,
      color
    }
    setNotes(prev => [...prev, newNote])
  }
  const deleteNote = (id) => {
    setNotes(prev => prev.filter(n => n.id !== id))
  }

  const updateNoteColor = (id, newColor) => {
    setNotes(prev => 
      prev.map(note => 
        note.id === id ? {...note, color: newColor} : note
      )
    )
  }

  useEffect(()=> {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return { notes, addNote, deleteNote, updateNoteColor }
  }


export default useNotes