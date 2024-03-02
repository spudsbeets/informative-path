const CodeOpener = () => {
    
    return(
    <section className="mx-auto text-center w-screen/80 h-screen/65 bg-videoGameGreen self-center border-borderGreen border-8 flex-col flex-nowrap rounded-md justify-between flex">
        <h2 className="text-2xl">CODE</h2>
        <div className="self-center flex flex-row justify-center static left-0 right-0 ml-[600px] animate-slide-move">
            <img src="./src/images/cocktail-clash-screenshot.png" alt="cocktail-clash" className="min-w-64 min-h-64 mx-6 max-w-64 max-h-64 animate-opacity-shift-1 ring-8 ring-borderGreen rounded-sm" />
            <img src="./src/images/spudintransit-screenshot.png" alt="fun-path" className="min-w-64 max-w-64 min-h-64 max-h-64 mx-6 animate-opacity-shift-2 ring-8 ring-borderGreen rounded-sm" />
            <img src="./src/images/two.png" alt="spuds-ship" className="min-w-64 max-w-64 min-h-64 max-h-64 mx-6 animate-opacity-shift-3 ring-8 ring-borderGreen rounded-sm" />
        </div>
        <div className="flex flex-row self-center">
        <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-1"></div>
        <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-2"></div>
        <div className="bg-borderGreen rounded-full w-4 h-4 mx-2 animate-button-opacity-shift-3"></div>
        </div>
        <p className="text-md">check out some coding projects i've put together</p>
    </section>
    )
 }
 
 export default CodeOpener