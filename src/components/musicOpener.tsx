import { Link } from "react-router-dom"

const MusicOpener = () => {
    
   return(
    <section className="mx-auto text-center w-screen/80 h-screen/65 bg-videoGameGreen self-center border-borderGreen border-8 flex flex-col flex-nowrap rounded-md justify-between lg:grid lg:grid-cols-3 lg:grid-rows-3">
    <Link to="/musicPage" rel="noreferrer"><h2 className="text-2xl underline text-blue-600 hover:text-blue-800 lg:text-4xl lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:place-self-center lg:pl-10 lg:pt-20 xl:text-6xl">MUSIC</h2></Link>
    <div className="self-center flex flex-row justify-center static left-0 right-0 ml-[600px] animate-slide-move vSm:animate-vsm-slide-move lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:ml-0 lg:animate-none lg:pb-20">
        <img src="./src/images/tue-cover.png" alt="tue-w-gp" className="min-w-64 min-h-64 mx-6 max-w-64 max-h-64 animate-opacity-shift-1 ring-8 ring-borderGreen rounded-sm vSm:min-w-40 vSm:max-w-40 vSm:min-h-40 vSm:max-h-40 lg:min-w-80 lg:max-w-80 lg:min-h-80 lg:max-h-80 lg:absolute" />
        <img src="./src/images/wed-cover.png" alt="wed-w-gp" className="min-w-64 max-w-64 min-h-64 max-h-64 mx-6 animate-opacity-shift-2 ring-8 ring-borderGreen rounded-sm vSm:min-w-40 vSm:max-w-40 vSm:min-h-40 vSm:max-h-40 lg:min-w-80 lg:max-w-80 lg:min-h-80 lg:max-h-80 lg:absolute" />
        <img src="./src/images/cflowermtn.png" alt="c-flower-mtn" className="min-w-64 max-w-64 min-h-64 max-h-64 mx-6 animate-opacity-shift-3 ring-8 ring-borderGreen rounded-sm vSm:min-w-40 vSm:max-w-40 vSm:min-h-40 vSm:max-h-40 lg:min-w-80 lg:max-w-80 lg:min-h-80 lg:max-h-80 lg:absolute" />
    </div>
    <div className="flex flex-row self-center lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:place-self-center lg:mt-20">
    <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-1"></div>
    <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-2"></div>
    <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-3"></div>
    </div>
    <p className="text-md lg:text-xl lg:col-start-1 lg:row-start-3 lg:pl-10 xl:text-2xl">check out some songs i've made</p>
    </section>
   )
}

export default MusicOpener