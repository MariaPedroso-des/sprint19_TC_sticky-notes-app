import { createContext, useContext, useState } from 'react';

const ColorContext = createContext('#BBAD0E')

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#BBAD0E')

  const changeColor = (newColor) => {
    setColor(newColor)
  }

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export const useColor = () => useContext(ColorContext)