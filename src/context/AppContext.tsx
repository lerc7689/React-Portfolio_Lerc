import { createContext, useContext, useState } from "react";

// 1️⃣ Crear el contexto
const AppContext = createContext<any>({})

// 2️⃣ Crear el proveedor del contexto
export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState<number>(0);
  const [theme, setTheme] = useState("light");

  // 3️⃣ Estado y funciones que estarán disponibles globalmente
  const value = {
    language,
    theme,
    toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
    toggleLanguage: () => setLanguage(language === 0 ? 1 : 0),
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// 4️⃣ Custom hook para usar el contexto fácilmente
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp debe usarse dentro de un AppProvider");
  }
  return context;
};
