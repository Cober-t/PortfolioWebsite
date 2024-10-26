import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import '../style.css'
import Header from "./Header/Header.jsx"
import Home from "./Home.jsx"
import Contact from "./Contact.jsx"
import Experience from "./Experience/Experience.jsx"
import Projects from "./Projects/Projects.jsx"
import { createContext } from 'react'
import MotionTransition from './MotionTransition.jsx'

export const LangContext = createContext()

export default function App() {

    const [lang, setLang] = useState("ES")

    return (
        <>
        <AnimatePresence mode="wait">
            <MotionTransition />
        </AnimatePresence>

        <LangContext.Provider value={{lang, setLang}}>
            <Header />
            {/* <div className='flex flex-col w-full h-full gap-y-28'> */}
                <Home />
                <Experience />
                <Projects />
                <Contact />
            {/* </div> */}
        </LangContext.Provider>
        </>
    )
}