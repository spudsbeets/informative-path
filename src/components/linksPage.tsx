import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"

const LinksPage = () => {
    return(
        <>
        <Header />
        <Link to="/" rel="noreferrer"><button className="fixed top-16 left-0 w-12 h-8 text-xs hover:opacity-50 mt-1 z-10 bg-videoGameGreen border-borderGreen border-solid border-4 font-silkscreen md:w-20 md:h-12 md:text-base">Back</button></Link>
        <div className="pt-16 pb-16 bg-gradient-to-br from-gray-900 to-gray-500 w-screen font-silkscreen text-gray-800 flex flex-col justify-around items-center">

        <section className="my-4">
        <h1 className="text-center text-videoGameGreen text-4xl xl:text-6xl">Links</h1>
        <p className="text-center text-videoGameGreen text-sm pt-6 xl:text-base">Below are all the different links to things involving myself</p>
        </section>

        <section className="flex flex-wrap justify-around bg-videoGameGreen border-borderGreen border-8 h-screen/65 w-screen/90 items-center gap-2 px-4 py-4 my-4">
              <a href="https://open.spotify.com/artist/03AURnYMBB9193wqXX8Qto?_authfailed=1&flow_ctx=7c5ca33f-f574-4650-84ba-6a3ce4c52ad5%3A1704161470" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/spotify.png" alt="spotify" /></a>
              <a href="https://spudintransit.bandcamp.com/album/c-flower-mountain" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/bandcamp.png" alt="bandcamp" /></a>
              <a href="https://music.apple.com/us/artist/spud-in-transit/1616735609" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/applemusic.png" alt="apple-music" /></a>
              <a href="https://www.youtube.com/channel/UC6FwIaEdVzAiMSvd944oIdg" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/youtube.png" alt="youtube" /></a>
              <a href="https://soundcloud.com/user-552145508" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/soundcloud.png" alt="soundcloud" /></a>
              <a href="https://www.instagram.com/sean.miller/?hl=en" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/instagram.png" alt="instagram" /></a>
              <a href="linkedIn" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/linkedin.png" alt="linkedin" /></a>
              <a href="resume" target="_blank"><h2 className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 md:text-2xl lg:max-w-40 lg:max-h-36 lg:text-3xl xl:max-w-52 xl:max-h-44 xl:text-4xl">Resume</h2></a>
              <a href="https://github.com/spudsbeets" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/github.png" alt="github" /></a>
              <a href="https://www.craigmillerstudio.com/" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/craig.png" alt="craig" /><figcaption className="text-center text-xxSm max-w-24 pr-3 md:text-xSm md:max-w-32 lg:max-w-40 xl:max-w-52 xl:text-sm">Craig's my brother and he did all my album art!</figcaption></a>
              <a href="https://spencermartinmusic.com/" target="_blank"><img className="max-w-24 max-h-20 hover:opacity-60 bg-borderGreen p-3 rounded-md md:max-w-32 md:max-h-28 lg:max-w-40 lg:max-h-36 xl:max-w-52 xl:max-h-44" src="./src/images/spencer.png" alt="spencer" /><figcaption className="text-center text-xxSm max-w-24 md:text-xSm md:max-w-32 lg:max-w-40 xl:max-w-52 xl:text-sm">Spencer did all the mastering for my albums!</figcaption></a>
        </section>

        </div>
        <Footer />
        </>
    )
}

export default LinksPage