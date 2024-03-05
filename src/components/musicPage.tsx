import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"

const MusicPage = () => {
    return(
        <>
        <Header />
        <Link to="/" rel="noreferrer"><button className="fixed top-16 left-0 w-12 h-8 text-xs hover:opacity-50 mt-1 z-10 bg-videoGameGreen border-borderGreen border-solid border-4 font-silkscreen md:w-20 md:h-12 md:text-base">Back</button></Link>
        <div className="pt-16 pb-16 bg-gradient-to-br from-gray-900 to-gray-500 w-screen font-silkscreen text-gray-800 flex flex-col justify-around items-center">

        <section className="my-4">
        <h1 className="text-center text-videoGameGreen text-4xl xl:text-6xl">Music</h1>
        <p className="text-center text-videoGameGreen text-sm pt-6 xl:text-base">Spud in Transit is my music project. Check out releases and more details below!</p>
        </section>

        <section className="grid grid-cols-3 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center">
        <div className="min-w-32 max-w-32 min-h-32 max-h-32 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24">
        <img src="./src/images/tue-cover.png" alt="tue-w-gp-cover" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2pics-1 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24" />
        <img src="./src/images/tue-tl.png" alt="tue-w-gp-tracklist" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2pics-2 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24" />
        </div>
        <div className="flex flex-row self-center pt-6">
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-1"></div>
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-2"></div>
        </div>
        </div>
        <div className="col-start-2 col-span-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="linkToAlbum"><h2 className="text-xs text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xSm">Tuesday with Gunther and Pharoah</h2></a>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm">1/2 of a larger project, this album is structured around an average day in the lives of my cats. Thrilling events include mealtimes alongside watching birds and cars.</p>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm">Released: xx/xx/xxxx</p>
        </div>
        </section>

        <section className="grid grid-cols-3 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center">
        <div className="min-w-32 max-w-32 min-h-32 max-h-32 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24">
        <img src="./src/images/wed-cover.png" alt="wed-w-gp-cover" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2pics-1 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24" />
        <img src="./src/images/wed-tl.png" alt="wed-w-gp-tracklist" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2pics-2 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24" />
        </div>
        <div className="flex flex-row self-center pt-6">
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-1"></div>
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-2"></div>
        </div>
        </div>
        <div className="col-start-2 col-span-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="linkToAlbum"><h2 className="text-xs text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xSm">Wednesday with Gunther and Pharoah</h2></a>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm">1/2 of a larger project, this day in the lives of my cats takes a turn for the surreal when they enjoy a hefty dose of catnip in the morning, launching them into an adventure of self-discovery.</p>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm">Released: xx/xx/xxxx</p>
        </div>
        </section>

        <section className="grid grid-cols-3 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center">
        <div className="min-w-32 max-w-32 min-h-32 max-h-32 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24">
        <img src="./src/images/cflowermtn.png" alt="c-flower-mountain-cover" className="min-w-32 max-w-32 min-h-32 max-h-32 absolute md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24" />
        </div>
        </div>
        <div className="col-start-2 col-span-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="linkToAlbum"><h2 className="text-xs text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xSm">C Flower Mountain</h2></a>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm">My first full release, these songs carry the listener on a journey from an underwater blues concert to the stars.</p>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm">Released: 05/13/2022</p>
        </div>
        </section>

        <section className="bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center pl-2 my-4 md:h-screen/40">
        <div className="flex flex-col flex-nowrap h-full w-full justify-around">
         <h2 className="text-xs text-center underline text-gray-800 md:text-base xl:text-lg vSm:text-xSm">More about Spud in Transit</h2>
         <p className="text-xxSm text-center md:text-xs xl:text-sm vSm:text-xxxSm">I started producing music around the time of the covid pandemic. I've always loved making music, but was brand new to concepts of composition, production, and the many other facets that accompany the process of releasing your own stuff. This process of learning, creating, failing, succeeding, and listening has been one of the most rewarding journeys of my life. I love where the project already is and I can't wait to see where it may go from here.</p>
         <p className="text-xxSm text-center md:text-xs xl:text-sm vSm:text-xxxSm">Genres: ambient, jazz, rock, avant-garde, experimental, noise</p>
         <p className="text-xxSm text-center md:text-xs xl:text-sm vSm:text-xxxSm">Primary artistic influences: Pharoah Sanders, Jon Hopkins, Alice Coltrane, Claire Rousay, Jeff Parker, Hiroshi Yoshimura, Brian Eno, Joanna Newsom, Bob Dylan, Burial, Green-House, Spiritualized, etc etc etc </p>
        </div>
        </section>


        <section className="bg-videoGameGreen border-borderGreen border-8 h-20 w-screen/90 items-center pl-2 my-4">
        <div className="flex flex-col flex-nowrap h-full w-full justify-around">
        <Link to="/linksPage" rel="noreferrer"><h2 className="text-lg text-center self-center underline text-blue-800 hover:text-blue-600">all the music links</h2></Link>
        </div>
        </section>

        </div>
        <Footer />
        </>
    )
}

export default MusicPage