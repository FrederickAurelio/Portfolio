import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const TextContext = createContext("");

function TextLanguage({ children }) {
  const [language, setLanguage] = useLocalStorageState("ch", "language");
  const changeLanguage = () => setLanguage((lg) => (lg === "en" ? "ch" : "en"));

  return (
    <TextContext.Provider value={{ language, changeLanguage }}>
      {children}
    </TextContext.Provider>
  );
}

function useLanguage() {
  const context = useContext(TextContext);
  if (context === undefined)
    throw new Error("TextContext is used outside Provider");
  return context;
}

export { useLanguage, TextLanguage };
