import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"

const MePage = () => {
    return(
        <>
        <Header />
        <Link to="/" rel="noreferrer"><button className="fixed top-16 left-0 w-12 h-8 text-xs hover:opacity-50 mt-1 z-10 bg-videoGameGreen border-borderGreen border-solid border-4 font-silkscreen md:w-20 md:h-12 md:text-base">Back</button></Link>
        <div className="pt-16 pb-16 bg-gradient-to-br from-gray-900 to-gray-500 w-screen h-screen font-silkscreen text-gray-800 flex flex-col justify-around items-center">

        <section className="my-4">
        <h1 className="text-center text-videoGameGreen text-4xl xl:text-6xl">Me</h1>
        <p className="text-center text-videoGameGreen text-sm pt-6 xl:text-base">Read below for a little more info about Sean Miller!</p>
        </section>

        <section className="bg-videoGameGreen border-borderGreen border-8 h-screen/65 w-screen/90 items-center pl-2 grid grid-rows-2">
        <div className="h-full grid grid-cols-2 grid-rows-2 items-center pt-2 row-start-1">
        <div className="pt-2 place-self-center col-start-1 row-start-1 min-w-32 max-w-32 min-h-32 max-h-32 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24 md:pt-6">
        <img src="/images/just-sean.png" alt="sean" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-1 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24" />
        <img src="/images/sean-tyna.png" alt="sean-tyna" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-2 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24" />
        <img src="/images/gunther-pharoah.png" alt="the-cats" className="min-w-32 max-w-32 min-h-32 max-h-32 hover:opacity-60 absolute animate-opacity-shift-3 md:min-w-40 md:max-w-40 md:min-h-40 md:max-h-40 vSm:min-w-24 vSm:max-w-24 vSm:min-h-24 vSm:max-h-24" />
        </div>
        <div className="pb-5 flex flex-row place-self-center col-start-1 row-start-2 md:pt-12">
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-1"></div>
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-2"></div>
            <div className="bg-borderGreen rounded-full w-2 h-2 mx-1 animate-button-opacity-shift-3"></div>
        </div>
        <p className="pb-10 pr-4 col-start-2 row-start-1 row-span-2 text-xSm text-center md:text-xs lg:text-sm xl:text-base pSm:text-xxSm">Thanks for being here! I've been on an interesting journey to get where I'm at today. I grew up in Iowa, went to college in Ohio, got my masters in Michigan, and as I type this I'm sitting in a pre-furnished house my wife and I are renting in Wyoming.</p>
        </div>
        <div className="pb-12 px-2 row-start-2">
        <p className="my-4 text-xSm text-center md:text-xs lg:text-sm xl:text-base pSm:text-xxSm">A little more info on how I arrived at that place for those who are curious. My degrees are both related to study of the Bible and ministry. From a young age I always thought that a job at a church was my 'calling.' And while faith still plays an important role in my life, the several years I spent in ministry vocationally really discouraged me regarding the state of institutional religion in our present cultural moment. Thus, a new path!</p>
        <p className="my-4 text-xSm text-center md:text-xs lg:text-sm xl:text-base pSm:text-xxSm">I've since spent the last couple years working odd jobs, bopping around the country with my travel nursing wife and our cats, and furthering my abilities in both music production and web development. Music I consider more of a hobby, though I'm very passionate about it. On the other hand, I'm hoping that web development can become a career for me sometime down the road.</p>
        <p className="my-4 text-xSm text-center md:text-xs lg:text-sm xl:text-base pSm:text-xxSm">Feel free to contact me! &gt; <span className="underline">Email: millersean757@gmail.com</span></p>
        </div>
        </section>

        </div>
        <Footer />
        </>
    )
}

export default MePage