"use client";

import { createContext, useContext, useEffect, useState } from "react";
import en from "../translations/en.json";
import bn from "../translations/bn.json";

const LanguageContext = createContext();

const translations = { en, bn };

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState("en");

    useEffect(() => {
        const browserLang = navigator.language.startsWith("bn")
            ? "bn"
            : "en";
        setLang(browserLang);
    }, []);

    const t = key => translations[lang][key] || key;

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
