import ColorSelector from "./components/ColorSelector"
import NoteBoard from "./components/NoteBoard"
import { ColorProvider } from "./context/ColorContext"

function App() {
  return (
    <div className="app-container">
      <h1>🗒️ Sticky Notes</h1>
    <ColorProvider>
      <div className="toolbar">
        <ColorSelector />
        <NoteBoard />
      </div>
    </ColorProvider>  

    </div>
  )
}

export default App
