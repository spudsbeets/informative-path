import { useState, useEffect } from "react"

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
        <header className="w-full bg-videoGameGreen h-16 fixed top-0 border-b-borderGreen border-b-8 rounded-md">
        <section className="flex flex-row font-silkscreen text-gray-800 flex-nowrap justify-center items-center py-4">
        <button id="hamburger-button" className="fixed left-2 text-2xl" onClick={() => setMobileMenu(true)}>
          &#9776;
        </button>
        <img src="./src/images/two.png" alt="gunther" className="h-6 w-6 mx-6" />
        <h1 className="text-xl">Spud In Transit</h1>
        <img src="./src/images/five.png" alt="pharoah" className="h-6 w-6 mx-6" />
        </section>
        <section id="mobile-menu" className="h-12 text-2xl flex-col z-10 bg-videoGameGreen">
        <button className="text-4xl self-end px-6 z-20" onClick={() => setMobileMenu(false)}>
            &times;
        </button>
        <nav className="min-h-screen flex flex-col items-center justify-evenly bg-videoGameGreen pb-16 mt-[-16px]">
        <a href="#music" className="w-full text-center hover:opacity-80 font-mono text-gray-800">Music</a>
        <a href="#programming" className="w-full text-center hover:opacity-80 font-mono text-gray-800">Programming</a>
        <a href="#me" className="w-full text-center hover:opacity-80 font-mono text-gray-800">Me!</a>
        <a href="#links" className="w-full text-center hover:opacity-80 font-mono text-gray-800">Links</a>
        <a href="/homepage" className="w-full text-center hover:opacity-80 font-mono text-gray-800">Home</a>
        </nav>
        </section>
        </header>
    )
}

export default Header