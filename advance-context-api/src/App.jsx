import React, { useEffect, useState } from 'react'
import ThemeBtn from './Components/ThemeBtn'
import Cards from './Components/Cards'
import { useTheme } from './Contexts/Contexts'
import { ThemeContext } from './Contexts/Contexts'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const LightTheme = () => {
    setThemeMode("light")
  }
  const DarkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    < ThemeContext value={{ themeMode, LightTheme, DarkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            < ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Cards />
          </div>
        </div>
      </div>
    </ThemeContext>

  )
}

export default App
