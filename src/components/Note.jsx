//Componento tipo Card
import { useState } from 'react'
import styles from './Note.module.css'

//función anónima porque sino, se ejecuta al renderizar
const Note = ({ id, text, color, deleteNote, updateNoteColor }) => {
  const [noteColor, setNoteColor] = useState(color)

  const handleChangeColor = (e) => {
    const newColor = e.target.value
    setNoteColor(newColor)
    updateNoteColor(id, newColor)
  }
  return (
    <div className={styles.note} style={{ backgroundColor: noteColor }}>
      <p>{text}</p>
      <input type="color" value={noteColor} onChange={handleChangeColor} title="cambiar color" style={{ marginBottom: '8px', alignSelf: 'flex-start'}} />
      <button className={styles.deleteBtn} onClick={() => deleteNote(id)}>x</button>

    </div>

  )
}

export default Note