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
			<div 
			className="relative w-11 h-6 bg-accent peer-focus:outline-none 
			peer-focus:ring-4 peer-focus:ring-darkOrange
			rounded-full peer peer-checked:after:translate-x-full 
			rtl:peer-checked:after:-translate-x-full peer-checked:after:border-accent
			after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
			after:bg-darkOrange after:border-darkOrange after:border 
			after:rounded-full after:h-5 after:w-5 after:transition-all 
			peer-checked:bg-accent"></div>
			<span class="ms-3 text-sm text-accent font-bold">{lang}</span>
			</label>
		)
	}

    return <header className="py-5 xl:py-8 text-white overflow-hidden z-50">
		<div className="px-[5vw] flex justify-between items-center
		font-['Tahoma'] xs:text-[2.5vw] sm:text-[2vw] md:text-[2vw] lg:text-[1.75vw]">
			{/* mt-8 ml-20 fixed left-0 top-0 */}
			<h1 id="Inicio" className="text-5xl sm:text-6xl font-semibold font-tags">
				Portfolio <span className="text-accent text-xl">■</span>
			</h1>

			<ToggleButton />

			<div className="hidden xl:flex items-center">
				<Nav />
			</div>

			<div className="xl:hidden">
				<MobileNav />
			</div>
		</div>
    </header>
}

export default Header