import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import '../style.css'
import Header from "./Header/Header.jsx"
import Home from "./Home.jsx"
import Contact from "./Contact.jsx"
import Experience from "./Experience/Experience.jsx"
import Projects from "./Projects/Projects.jsx"
import { createContext } from 'react'

export const LangContext = createContext()

export default function App() {

    const [lang, setLang] = useState("ES")

    return (
        <>
        <AnimatePresence mode="wait">

            <LangContext.Provider value={{lang, setLang}}>
                <Header />
            </LangContext.Provider>

            <div className='flex flex-col w-full h-full gap-y-28'>
                <LangContext.Provider value={{lang, setLang}}>
                    <Home />
                    <Experience />
                    <Projects />
                    <Contact />
                </LangContext.Provider>
            </div>

        </AnimatePresence>
        </>
    )
}