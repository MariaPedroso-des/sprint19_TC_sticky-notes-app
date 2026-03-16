import { useColor } from "../context/ColorContext";

const ColorSelector = () => {
  const {color, changeColor} = useColor()

  const handleChangeColor = (e) => {
    changeColor(e.target.value)
  }
  return (
    <>
      <label>Color de la nota</label>
      <input type="color" value={color} onChange={handleChangeColor}/>
    </>
  )
}

export default ColorSelector