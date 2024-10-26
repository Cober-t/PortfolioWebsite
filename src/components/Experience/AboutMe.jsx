import { about, ScrollTo } from "../../constants.jsx"
import { useContext } from "react"
import { LangContext } from "../App.jsx"

const AboutMe = () => {

    const { lang } = useContext(LangContext)
    
    return (
        <div className="w-full text-center xl:text-left mb-60">
            <div className="flex flex-col gap-[30px] items-center xl:items-start">
                <h3 className="text-5xl font-bold font-nodeTitle uppercase">
                    {lang == "ES" ? about.titleES : about.titleEN}
                </h3>
                <p className="max-w-[400px] xl:max-w-[600px] text-white/60 mx-5 text-pretty xl:mx-0 font-medium">
                    {lang == "ES" ? about.descriptionES : about.descriptionEN}
                </p>
                <ul className="flex flex-col justify-between items-center xl:grid
                xl:grid-cols-2 gap-y-6 max-w-[620px] xl:mx-0">
                    {about.items.map((item, index) => {
                        return <div key={index} className="px-10 xl:px-0 w-full flex items-center justify-between
                        xl:justify-start gap-4">
                            <span className={`text-white/60 font-medium font-tags text-[24px] sm:text-3xl capitalize`}>
                            {lang == "ES" ? item.fieldNameES : item.fieldNameEN}
                            </span>
                            {
                                about.items.length - 1 === index &&
                                <ScrollTo id="Contact" text={lang == "ES" ? item.fieldValueES : item.fieldValueEN}
                                props={`text-[18px] xl:text-xl font-medium hover:text-accent underline`} />
                                ||
                                about.items.length - 2 === index &&
                                <a href={lang == "ES" ? item.fieldValueES : item.fieldValueEN} 
                                className={`text-[18px] hover:text-accent underline
                                xl:text-xl capitalize font-medium capitalize"}`}>
                                jorge tejado lópez
                                </a>
                                ||
                                about.items.length - 3 === index &&
                                <a href={lang == "ES" ? item.fieldValueES : item.fieldValueEN} 
                                className={`text-[18px] hover:text-accent underline
                                xl:text-xl capitalize font-medium capitalize"}`}>
                                Cober-t
                                </a>
                                ||
                                <span className={`text-[18px] xl:text-xl capitalize font-medium capitalize"}`}>
                                {lang == "ES" ? item.fieldValueES : item.fieldValueEN}
                                </span>
                            }
                        </div>

                    })}
                </ul>
            </div>
        </div>
    )
}

export default AboutMe