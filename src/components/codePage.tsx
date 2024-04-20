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
        <p className="text-center text-videoGameGreen text-sm pt-6 py-2 xl:text-base">Check out some of my favorite coding projects I've made below!</p>
        </section>

        <section className="grid grid-cols-2 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center min-w-48 max-w-48 min-h-40 max-h-40 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 xl:pl-12 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28">
        <video src="/videos/spudintransitvid.mp4" autoPlay muted loop webkit-playsinline playsInline className="min-w-48 max-w-48 min-h-40 max-h-40 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28"></video>
        </div>
        <div className="col-start-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="linkToHomePage"><h2 className="text-sm text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xs">spudintransit.com</h2></a>
         <p className="text-xxSm text-center md:text-sm xl:text-base vSm:text-xxxSm">The very website you're currently exploring! This website I built contains all the details you'd ever like to know about me, my music, and my coding projects. One path has several puzzles to solve and a unique maze to navigate while the other demonstrates a more traditional way to present information.</p>
         <p className="text-xxSm text-center md:text-sm xl:text-base vSm:text-xxxSm">React, TypeScript, JavaScript, Tailwind, Vite, node.js</p>
        </div>
        </section>

        <section className="grid grid-cols-2 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center min-w-48 max-w-48 min-h-40 max-h-40 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 xl:pl-12 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28">
        <video src="/videos/cocktailclashvid.mp4" autoPlay muted loop webkit-playsinline playsInline className="min-w-48 max-w-48 min-h-40 max-h-40 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28"></video>
        </div>
        <div className="col-start-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a target="_blank" href="https://www.cocktail-clash.online"><h2 className="text-sm text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xs">Cocktail Clash</h2></a>
         <p className="text-xxSm text-center md:text-sm xl:text-base vSm:text-xxxSm">In this game you have the opportunity to build your dream bar. Over the course of 5 rounds, gather your spirits, ingredients, decor, and musicians with an eye toward the preferences of picky customers. Win enough customers over and consider your business launch a success!</p>
         <p className="text-xxSm text-center md:text-sm xl:text-base vSm:text-xxxSm">React, JavaScript, Vite, node.js</p>
        </div>
        </section>

        <section className="grid grid-cols-2 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center min-w-48 max-w-48 min-h-40 max-h-40 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 xl:pl-12 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28">
        <video src="/videos/spudsship.mp4" autoPlay muted loop webkit-playsinline playsInline className="min-w-48 max-w-48 min-h-40 max-h-40 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28"></video>
        </div>
        <div className="col-start-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a target="_blank" href="https://www.spuds-ship.online"><h2 className="text-sm text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xs">Spud's Ship</h2></a>
         <p className="text-xxSm text-center md:text-sm xl:text-base vSm:text-xxxSm">Fly through the cosmos playing as yours truly. The hope is to use your ship to get to the moon, but look out, outer space is replete with cats and they have no intention of getting out of your way...</p>
         <p className="text-xxSm text-center md:text-sm xl:text-base vSm:text-xxxSm">React, TypeScript, JavaScript, Vite, node.js</p>
        </div>
        </section>

        <section className="grid grid-cols-2 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center min-w-48 max-w-48 min-h-40 max-h-40 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 xl:pl-12 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28">
        <video src="/videos/tuesdaysnipsvid.mp4" autoPlay muted loop webkit-playsinline playsInline className="absolute min-w-48 max-w-48 min-h-40 max-h-40 animate-opacity-shift-2pics-1 pb-6 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28"></video>
        <video src="/videos/wednesdaysnipsvid.mp4" autoPlay muted loop webkit-playsinline playsInline className="absolute min-w-48 max-w-48 min-h-40 max-h-40 animate-opacity-shift-2pics-2 pb-6 md:min-w-80 md:max-w-80 md:min-h-64 md:max-h-64 lg:min-w-[26rem] lg:max-w-[26rem] lg:min-h-80 lg:max-h-80 pSm:min-w-40 pSm:max-w-40 pSm:min-h-32 pSm:max-h-32 vSm:min-w-36 vSm:max-w-36 vSm:min-h-28 vSm:max-h-28"></video>
        <div className="flex flex-row self-center pt-40 md:pt-56 lg:pt-64">
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-1"></div>
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-2"></div>
        </div>
        </div>
        <div className="col-start-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="https://www.spudintransit.com/spudssnipstuesday"><h2 className="text-sm text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xs">Spud's Snips</h2></a>
         <p className="text-xxSm text-center md:text-sm xl:text-base vSm:text-xxxSm">These sneak peaks offer snippets of songs from my upcoming albums. Trigger the snips by clicking the buttons or pressing correlated keys on your keyboard.</p>
         <p className="text-xxSm text-center md:text-sm xl:text-base vSm:text-xxxSm">React, TypeScript, JavaScript, Vite, node.js</p>
        </div>
        </section>

        <section className="flex flex-col bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center my-4 md:h-[50%]">
            <h2 className="text-base md:text-xl xl:text-2xl vSm:text-xs">Competencies</h2>
            <div className="flex flex-wrap justify-between content-center w-screen/90 h-screen/30 px-4 py-4 md:h-screen/40">
            <img className="w-16 h-16 mt-2 bg-borderGreen p-3 rounded-md md:w-28 md:h-28" src="/images/git.png" alt="git" />
            <img className="w-16 h-16 mt-2 bg-borderGreen p-3 rounded-md md:w-28 md:h-28" src="/images/js.png" alt="js" />
            <img className="w-16 h-16 mt-2 bg-borderGreen p-3 rounded-md md:w-28 md:h-28" src="/images/react.png" alt="react" />
            <img className="w-16 h-16 mt-2 bg-borderGreen p-3 rounded-md md:w-28 md:h-28" src="/images/ts.png" alt="ts" />
            <img className="w-30 h-16 mt-2 bg-borderGreen p-3 rounded-md md:w-44 md:h-28" src="/images/htmlcss.png" alt="htmlcss" />
            <img className="w-30 h-16 mt-2 bg-borderGreen p-3 rounded-md md:w-44 md:h-28" src="/images/tailwind.png" alt="tailwind" />
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