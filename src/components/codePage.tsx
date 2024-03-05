import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"

const CodePage = () => {
    return(
        <>
        <Header />
        <Link to="/" rel="noreferrer"><button className="fixed top-16 left-0 w-12 h-8 text-xs hover:opacity-50 mt-1 z-10 bg-videoGameGreen border-borderGreen border-solid border-4 font-silkscreen md:w-20 md:h-12 md:text-base">Back</button></Link>
        <div className="pt-16 pb-16 bg-gradient-to-br from-gray-900 to-gray-500 w-screen font-silkscreen text-gray-800 flex flex-col justify-around items-center">
        
        <section className="my-4">
        <h1 className="text-center text-videoGameGreen text-4xl xl:text-6xl">Code</h1>
        <p className="text-center text-videoGameGreen text-sm pt-6 xl:text-base">Check out some of my favorite coding projects I've made below!</p>
        </section>

        <section className="grid grid-cols-2 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center min-w-44 max-w-44 min-h-36 max-h-36">
        <video src="./src/videos/spudintransitvid.mp4" autoPlay muted loop className="min-w-44 max-w-44 min-h-36 max-h-36"></video>
        </div>
        <div className="col-start-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="linkToHomePage"><h2 className="text-xs text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl">spudintransit.com</h2></a>
         <p className="text-xxSm text-center md:text-sm xl:text-base">The very website you're currently exploring! This website I built contains all the details you'd ever like to know about me, my music, and my coding projects. One path has several puzzles to solve and a unique maze to navigate while the other demonstrates a more traditional way to get information.</p>
         <p className="text-xxSm text-center md:text-sm xl:text-base">Tech Stack: React, TypeScript, JavaScript, Tailwind</p>
        </div>
        </section>

        <section className="grid grid-cols-2 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center min-w-44 max-w-44 min-h-36 max-h-36">
        <video src="./src/videos/cocktailclashvid.mp4" autoPlay muted loop className="min-w-44 max-w-44 min-h-36 max-h-36"></video>
        </div>
        <div className="col-start-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="linkToGame"><h2 className="text-xs text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl">Cocktail Clash</h2></a>
         <p className="text-xxSm text-center md:text-sm xl:text-base">In this game you have the opportunity to build your dream bar. Over the course of 5 rounds, gather your spirits, ingredients, decor, and musicians with an eye toward the preferences of picky customers. Win enough customers over and consider your business launch a success!</p>
         <p className="text-xxSm text-center md:text-sm xl:text-base">Tech Stack: React, JavaScript</p>
        </div>
        </section>

        <section className="bg-videoGameGreen border-borderGreen border-8 h-20 w-screen/90 items-center pl-2 my-4">
        <div className="flex flex-col flex-nowrap h-full w-full justify-around">
        <Link to="/linksPage" rel="noreferrer"><h2 className="text-lg text-center self-center underline text-blue-800 hover:text-blue-600">all the programming links</h2></Link>
        </div>
        </section>

        </div>
        <Footer />
        </>
    )
}

export default CodePage