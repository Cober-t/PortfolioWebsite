import React from 'react'
import { AnimatePresence } from 'framer-motion'
import '../style.css'
import Header from "./Header/Header.jsx"
import Home from "./Home.jsx"
import Contact from "./Contact.jsx"
import Experience from "./Experience/Experience.jsx"
import Projects from "./Projects/Projects.jsx"

export default function App() {

    return (
        <>
        <AnimatePresence mode="wait">

            <Header />

            <div className='flex flex-col w-full h-full gap-y-28'>
                <Home />
                <Experience />
                <Projects />
                <Contact />
            </div>

        </AnimatePresence>
        </>
    )
}