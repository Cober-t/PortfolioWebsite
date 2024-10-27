import Nav from "./Nav.jsx"
import MobileNav from "./MobileNav.jsx"
import { LangContext } from "../App.jsx"
import { useContext } from "react"

const Header = () => {

	const {lang, setLang} = useContext(LangContext)

	const ToggleButton = () =>
	{
		return (
			<label className="inline-flex items-center cursor-pointer">
				<input type="checkbox" value={lang} className="sr-only peer"
				onClick={()=>setLang( lang=="ES" ? "EN" : "ES" )}/>
				<div id="toggle"
				className={`relative w-8 h-8 bg-accent peer-focus:outline-none 
				ring-4 ring-darkOrange focus:ring-8 focus:ring-darkOrange text-[14px]
				rounded-full text-center items-center transition-all
				xl:mb-3 xl:mr-5`}>
					<p className="xl:mb-2 mt-1 mr-0.5">{lang}</p>
				</div>
			</label>
		)
	}

    return <header className="py-5 xl:py-8 text-white overflow-hidden z-50">
		<div className="px-[5vw] flex justify-between items-center
		font-['Tahoma'] xs:text-[2.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.75vw]">
			<button id="Inicio" className="text-5xl sm:text-6xl font-semibold font-tags">
				Portfolio <span className="text-accent text-xl">■</span>
			</button>

			<div className="flex flex-row justify-end items-center">

				<div className="hidden xl:flex-row xl:flex items-center">
					<Nav />
					<div className="xl:mt-0 ml-8 xl:relative fixed top-0 mt-10">
						<ToggleButton />
					</div>
				</div>

				<div className="xl:hidden">
					<div className="right-16 fixed top-0 mt-10">
						<ToggleButton />
					</div>
					<MobileNav />
				</div>
			</div>
		</div>
    </header>
}

export default Header