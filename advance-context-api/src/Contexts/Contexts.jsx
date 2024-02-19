import { createContext, useContext } from "react";

export const context = createContext({
    themeMode: "light",
    LightTheme: () => { },
    DarkTheme: () => { },

})

export const ThemeContext = context.Provider

export const useTheme = () => {
    return  useContext(context)
}