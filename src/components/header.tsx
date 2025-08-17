import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Header = () => {

    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    useEffect(() =>  {
    const mobileMenuSection: HTMLElement = document.getElementById("mobile-menu") as HTMLElement
    const hamburgerButton: HTMLButtonElement = document.getElementById("hamburger-button") as HTMLButtonElement
      if (!mobileMenu) {
        mobileMenuSection.style.display = "none"
        hamburgerButton.innerHTML = "&#9776;"
      } else {
        mobileMenuSection.style.display = "flex"
        hamburgerButton.innerHTML = ""
      }
    },[mobileMenu])

    return(
        <header className="w-full bg-videoGameGreen h-16 fixed z-20 top-0 border-b-borderGreen border-b-8 lg:flex phone-hor:flex flex-row flex-nowrap justify-around">
        <section className="flex flex-row font-silkscreen text-gray-800 flex-nowrap justify-center items-center py-4">
        <button id="hamburger-button" className="fixed left-2 text-2xl lg:hidden phone-hor:hidden" onClick={() => setMobileMenu(true)}>
          &#9776;
        </button>
        <img src="/images/gunther-1.png" alt="gunther" className="min-h-10 max-h-10 min-w-10 max-w-10 mx-6 rounded-full animate-cat-1-twitch vSm:min-h-8 vSm:max-h-8 vSm:min-w-8 vSm:max-w-8 phone-hor:min-h-8 phone-hor:max-h-8 phone-hor:min-w-8 phone-hor:max-w-8" />
        <h1 className="text-xl vSm:text-lg phone-hor:text-lg">Spud In Transit</h1>
        <img src="/images/pharoah-1.png" alt="pharoah" className="min-h-10 max-h-10 min-w-10 max-w-10 mx-6 rounded-full animate-cat-2-twitch vSm:min-h-8 vSm:max-h-8 vSm:min-w-8 vSm:max-w-8 phone-hor:min-h-8 phone-hor:max-h-8 phone-hor:min-w-8 phone-hor:max-w-8" />
        </section>
        <section id="mobile-menu" className="h-12 text-2xl flex-col bg-videoGameGreen z-20 font-silkscreen">
        <button className="text-4xl self-end px-6 z-20 font-mono" onClick={() => setMobileMenu(false)}>
            &times;
        </button>
        <nav className="min-h-screen flex flex-col items-center justify-evenly bg-videoGameGreen pb-16 mt-[-16px] font-silkscreen text-videoGameGreen">
        <Link to="/musicPage" rel="noreferrer" className="text-center hover:opacity-50 bg-slate-600 rounded-lg py-4 px-10">Music</Link>
        <Link to="/codePage" rel="noreferrer" className="text-center hover:opacity-50 bg-slate-800 rounded-lg py-4 px-10">Programming</Link>
        <Link to="/mePage" rel="noreferrer" className="text-center hover:opacity-50 bg-slate-600 rounded-lg py-4 px-10">Me!</Link>
        <Link to="/linksPage" rel="noreferrer" className="text-center hover:opacity-50 bg-slate-800 rounded-lg py-4 px-10">Links</Link>
        <a href="https://github.com/spudsbeets/spudintransit.com/tree/main" target="_blank" className="text-center hover:opacity-50 bg-slate-600 rounded-lg py-4 px-10">Home</a>
        </nav>
        </section>
        <section className="hidden lg:flex phone-hor:flex flex-row text-[13px] phone-hor:text-[10px] flex-nowrap font-silkscreen text-videoGameGreen">
        <Link to="/musicPage" rel="noreferrer" className="text-center hover:opacity-50 bg-slate-600 rounded-lg self-center mx-4 py-2 px-6 phone-hor:mx-2 phone-hor:px-2">Music</Link>
        <Link to="/codePage" rel="noreferrer" className="hover:opacity-50 bg-slate-800 rounded-lg self-center mx-4 py-2 px-6 phone-hor:mx-2 phone-hor:px-2">Programming</Link>
        <Link to="/mePage" rel="noreferrer" className="hover:opacity-50 bg-slate-600 rounded-lg self-center mx-4 py-2 px-6 phone-hor:mx-2 phone-hor:px-2">Me!</Link>
        <Link to="/linksPage" rel="noreferrer" className="hover:opacity-50 bg-slate-800 rounded-lg self-center mx-4 py-2 px-6 phone-hor:mx-2 phone-hor:px-2">Links</Link>
        <a href="https://github.com/spudsbeets/spudintransit.com/tree/main" target="_blank" className="hover:opacity-50 bg-slate-600 rounded-lg self-center mx-4 py-2 px-6 phone-hor:mx-2 phone-hor:px-2">Home</a>
        </section>
        </header>
    )
}

export default Header