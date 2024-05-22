import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"

const MusicPage = () => {

    function checkDate(): void {
        const inputDate = new Date('2024-05-18');
        const currentDate = new Date();
        const tuePostRelease = document.getElementById("tuesday-post-release");
        const tuePreRelease = document.getElementById("tuesday-pre-release");
        const wedPostRelease = document.getElementById("wednesday-post-release");
        const wedPreRelease = document.getElementById("wednesday-pre-release");
        if (inputDate < currentDate) {
          (tuePostRelease as HTMLElement).style.display = "grid";
          (wedPostRelease as HTMLElement).style.display = "grid";
          (tuePreRelease as HTMLDivElement).style.display = "none";
          (wedPreRelease as HTMLDivElement).style.display = "none";
        } else {
            (tuePostRelease as HTMLElement).style.display = "none";
            (wedPostRelease as HTMLElement).style.display = "none";
            (tuePreRelease as HTMLDivElement).style.display = "flex";
            (wedPreRelease as HTMLDivElement).style.display = "flex";
        }
    }

    const dateInterval = setInterval(() => checkDate())
    setInterval(() => dateInterval);
    setTimeout(() => { clearInterval(dateInterval)}, 5)

    return(
        <>
        <Header />
        <Link to="/" rel="noreferrer"><button className="fixed top-16 left-0 w-12 h-8 text-xs hover:opacity-50 mt-1 z-10 bg-videoGameGreen border-borderGreen border-solid border-4 font-silkscreen md:w-20 md:h-12 md:text-base">Back</button></Link>
        <div className="pt-16 pb-16 bg-gradient-to-br from-gray-900 to-gray-500 w-screen font-silkscreen text-gray-800 flex flex-col justify-around items-center">

        <section className="my-4">
        <h1 className="text-center text-videoGameGreen text-4xl xl:text-6xl">Music</h1>
        <p className="text-center text-videoGameGreen text-sm pt-6 xl:text-base">Spud in Transit is my music project. Check out releases and more details below!</p>
        </section>

        <section id="tuesday-post-release" className="grid grid-cols-3 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center">
        <div className="min-w-32 max-w-32 min-h-32 max-h-32 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24">
        <img src="/images/tue-cover.png" alt="tue-w-gp-cover" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2pics-1 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24 phone-hor:min-w-24 phone-hor:max-w-24 phone-hor:min-h-24 phone-hor:max-h-24 phone-hor:mt-4 phone-hor-sm:min-w-20 phone-hor-sm:max-w-20 phone-hor-sm:min-h-20 phone-hor-sm:max-h-20 phone-hor-sm:mt-6" />
        <img src="/images/tue-tl.png" alt="tue-w-gp-tracklist" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2pics-2 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24 phone-hor:min-w-24 phone-hor:max-w-24 phone-hor:min-h-24 phone-hor:max-h-24 phone-hor:mt-4 phone-hor-sm:min-w-20 phone-hor-sm:max-w-20 phone-hor-sm:min-h-20 phone-hor-sm:max-h-20 phone-hor-sm:mt-6" />
        </div>
        <div className="flex flex-row self-center pt-6 phone-hor:hidden">
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-1"></div>
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-2"></div>
        </div>
        </div>
        <div className="col-start-2 col-span-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="https://open.spotify.com/album/3nDfz40mSeu1JFF44A8ZqQ?si=nAKrSLWYRQKKbS1YxMV29Q" target="_blank"><h2 className="text-xs text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xSm">Tuesday with Gunther and Pharoah</h2></a>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm phone-hor:text-xSm phone-hor-sm:text-xxSm">1/2 of a larger project, this album is structured around an average day in the lives of my cats. Thrilling events include mealtimes alongside watching birds and cars.</p>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm phone-hor:text-xSm phone-hor-sm:text-xxSm">Released: 05.21.2024</p>
        </div>
        </section>
        
        <div id="tuesday-pre-release" className="flex justify-center align-center">
        <section className="bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40 blur-xl">
        </section>
        <h1 className="text-xl md:text-4xl absolute mt-32 phone-hor:mt-16 phone-hor-sm:mt-12">COMING 05.21.2024</h1>
        </div>

        <section id="wednesday-post-release" className="grid grid-cols-3 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center">
        <div className="min-w-32 max-w-32 min-h-32 max-h-32 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24">
        <img src="/images/wed-cover.png" alt="wed-w-gp-cover" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2pics-1 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24 phone-hor:min-w-24 phone-hor:max-w-24 phone-hor:min-h-24 phone-hor:max-h-24 phone-hor:mt-4 phone-hor-sm:min-w-20 phone-hor-sm:max-w-20 phone-hor-sm:min-h-20 phone-hor-sm:max-h-20 phone-hor-sm:mt-6" />
        <img src="/images/wed-tl.png" alt="wed-w-gp-tracklist" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2pics-2 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24 phone-hor:min-w-24 phone-hor:max-w-24 phone-hor:min-h-24 phone-hor:max-h-24 phone-hor:mt-4 phone-hor-sm:min-w-20 phone-hor-sm:max-w-20 phone-hor-sm:min-h-20 phone-hor-sm:max-h-20 phone-hor-sm:mt-6" />
        </div>
        <div className="flex flex-row self-center pt-6 phone-hor:hidden">
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-1"></div>
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2pics-2"></div>
        </div>
        </div>
        <div className="col-start-2 col-span-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="https://open.spotify.com/album/3rIbQZ076SLLuK2C1YeFq9?si=blLSOwNsQcOWJvlCIizBwQ" target="_blank"><h2 className="text-xs text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xSm">Wednesday with Gunther and Pharoah</h2></a>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm phone-hor:text-xxSm">1/2 of a larger project, this day in the lives of my cats takes a turn for the surreal when they enjoy a hefty dose of catnip in the morning, launching them into an adventure of self-discovery.</p>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm phone-hor:text-xxSm">Released: 05.22.2024</p>
        </div>
        </section>

        <div id="wednesday-pre-release" className="flex justify-center align-center">
        <section className="bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40 blur-xl">
        </section>
        <h1 className="text-xl md:text-4xl absolute mt-32 phone-hor:mt-16 phone-hor-sm:mt-12">COMING 05.22.2024</h1>
        </div>

        <section className="grid grid-cols-3 grid-rows-3 bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center gap-2 pl-2 my-4 md:h-screen/40">
        <div className="row-start-1 row-span-3 col-start-1 h-full flex flex-col justify-center items-center">
        <div className="min-w-32 max-w-32 min-h-32 max-h-32 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24">
        <img src="/images/cflowermtn.png" alt="c-flower-mountain-cover" className="min-w-32 max-w-32 min-h-32 max-h-32 absolute md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 xl:min-w-52 xl:max-w-52 xl:min-h-52 xl:max-h-52 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24 phone-hor:min-w-24 phone-hor:max-w-24 phone-hor:min-h-24 phone-hor:max-h-24 phone-hor:mt-4 phone-hor-sm:min-w-20 phone-hor-sm:max-w-20 phone-hor-sm:min-h-20 phone-hor-sm:max-h-20 phone-hor-sm:mt-6" />
        </div>
        </div>
        <div className="col-start-2 col-span-2 row-start-1 row-span-3 flex flex-col flex-nowrap h-full justify-around pr-2">
         <a href="https://open.spotify.com/album/3Xz415P2mkyiigcQFj1C3V" target="_blank"><h2 className="text-xs text-center underline text-blue-800 hover:text-blue-600 md:text-lg xl:text-xl vSm:text-xSm">C Flower Mountain</h2></a>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm phone-hor:text-xSm">My first full release, these songs carry the listener on a journey from an underwater blues concert to the stars.</p>
         <p className="text-xSm text-center md:text-sm xl:text-base vSm:text-xxSm phone-hor:text-xSm">Released: 05.13.2022</p>
        </div>
        </section>

        <section className="bg-videoGameGreen border-borderGreen border-8 h-screen/30 w-screen/90 items-center pl-2 my-4 md:h-screen/40 phone-hor:h-screen/65">
        <div className="flex flex-col flex-nowrap h-full w-full justify-around">
         <h2 className="text-xs text-center underline text-gray-800 md:text-base xl:text-lg vSm:text-xSm phone-hor:text-lg">More about Spud in Transit</h2>
         <p className="text-xxSm text-center md:text-xs xl:text-sm vSm:text-xxxSm phone-hor:text-xSm phone-hor-sm:text-xxSm">I started producing music around the time of the covid pandemic. I've always loved making music, but was brand new to concepts of composition, production, and the many other facets that accompany the process of releasing your own stuff. This process of learning, creating, failing, succeeding, and listening has been one of the most rewarding journeys of my life. I love where the project already is and I can't wait to see where it may go from here.</p>
         <p className="text-xxSm text-center md:text-xs xl:text-sm vSm:text-xxxSm phone-hor:text-xSm phone-hor-sm:text-xxSm">Genres: ambient, jazz, rock, avant-garde, experimental, noise</p>
         <p className="text-xxSm text-center md:text-xs xl:text-sm vSm:text-xxxSm phone-hor:text-xSm phone-hor-sm:text-xxSm">Significant artistic influences: Pharoah Sanders, Jon Hopkins, Alice Coltrane, Claire Rousay, Jeff Parker, Hiroshi Yoshimura, Brian Eno, Joanna Newsom, Bob Dylan, Sufjan Stevens, Green-House, Midori Takada, Floating Points, Fleet Foxes, Spiritualized, etc etc etc </p>
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