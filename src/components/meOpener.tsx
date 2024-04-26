import { Link } from "react-router-dom"

const MeOpener = () => {
    
    return(
    <section className="mx-auto text-center w-screen/80 h-screen/65 bg-videoGameGreen self-center border-borderGreen border-8 flex-col flex-nowrap rounded-md justify-between flex lg:grid lg:grid-cols-3 lg:grid-rows-3 phone-hor:grid phone-hor:grid-cols-3 phone-hor:grid-rows-3 phone-hor:h-screen/65 phone-hor:mt-20 phone-hor-sm:mt-[68px]">
        <Link to="/mePage" rel="noreferrer"><h2 className="text-2xl underline text-blue-600 hover:text-blue-800 lg:text-4xl lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:place-self-center lg:pl-10 lg:pt-20 xl:text-6xl phone-hor:col-start-1 phone-hor:row-start-1 phone-hor:row-span-2 phone-hor:place-self-center phone-hor:pt-8">ME</h2></Link>
        <div className="self-center flex flex-row justify-center static left-0 right-0 ml-[600px] animate-slide-move vSm:animate-vsm-slide-move lg:col-start-2 lg:row-start-1 lg:col-span-2 lg:ml-0 lg:animate-none lg:pb-20 phone-hor:col-start-2 phone-hor:row-start-1 phone-hor:col-span-2 phone-hor:animate-none phone-hor:ml-0">
            <img src="/images/just-sean.png" alt="sean" className="min-w-64 min-h-64 mx-6 max-w-64 max-h-64 animate-opacity-shift-1 ring-8 ring-borderGreen rounded-sm vSm:min-w-40 vSm:max-w-40 vSm:min-h-40 vSm:max-h-40 lg:min-w-80 lg:max-w-80 lg:min-h-80 lg:max-h-80 lg:absolute phone-hor:absolute phone-hor:min-w-40 phone-hor:max-w-40 phone-hor:min-h-40 phone-hor:max-h-40 phone-hor-sm:min-w-28 phone-hor-sm:max-w-28 phone-hor-sm:min-h-28 phone-hor-sm:max-h-28" />
            <img src="/images/sean-tyna.png" alt="sean-and-tyna" className="min-w-64 max-w-64 min-h-64 max-h-64 mx-6 animate-opacity-shift-2 ring-8 ring-borderGreen rounded-sm vSm:min-w-40 vSm:max-w-40 vSm:min-h-40 vSm:max-h-40 lg:min-w-80 lg:max-w-80 lg:min-h-80 lg:max-h-80 lg:absolute phone-hor:absolute phone-hor:min-w-40 phone-hor:max-w-40 phone-hor:min-h-40 phone-hor:max-h-40 phone-hor-sm:min-w-28 phone-hor-sm:max-w-28 phone-hor-sm:min-h-28 phone-hor-sm:max-h-28" />
            <img src="/images/gunther-pharoah.png" alt="cats" className="min-w-64 max-w-64 min-h-64 max-h-64 mx-6 animate-opacity-shift-3 ring-8 ring-borderGreen rounded-sm vSm:min-w-40 vSm:max-w-40 vSm:min-h-40 vSm:max-h-40 lg:min-w-80 lg:max-w-80 lg:min-h-80 lg:max-h-80 lg:absolute phone-hor:absolute phone-hor:min-w-40 phone-hor:max-w-40 phone-hor:min-h-40 phone-hor:max-h-40 phone-hor-sm:min-w-28 phone-hor-sm:max-w-28 phone-hor-sm:min-h-28 phone-hor-sm:max-h-28" />
        </div>
        <div className="flex flex-row self-center lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:place-self-center lg:mt-20 phone-hor:col-start-2 phone-hor:col-span-2 phone-hor:row-start-3 phone-hor:place-self-center">
        <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-1"></div>
        <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-2"></div>
        <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-3"></div>
        </div>
        <p className="text-md lg:text-xl lg:col-start-1 lg:row-start-3 lg:pl-10 xl:text-2xl phone-hor:col-start-1 phone-hor:row-start-3">more about me</p>
    </section>
    )
 }
 
 export default MeOpener