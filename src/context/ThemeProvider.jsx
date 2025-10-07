import React, { createContext,useState,useEffect } from 'react'

export const ThemeContext = createContext({
  themeMode : "light",
  lightTheme : () => {},
  darkTheme :() => {}
})
 function ThemeProvider({children}) {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark') 
    document.querySelector('html').classList.add(themeMode) 
  }, [themeMode])
  
  return (
      <ThemeContext.Provider value={{themeMode,lightTheme,darkTheme}}>
      {children}
      </ThemeContext.Provider> 
  )
}
export default ThemeProvider