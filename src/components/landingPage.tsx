const LandingPage = () => {
    return(
     <div className="bg-gradient-to-br from-gray-900 to-gray-500 w-screen h-screen font-silkscreen text-gray-800 flex flex-col justify-center">
            <section className="mx-auto text-center w-screen/80 h-screen/65 bg-videoGameGreen self-center border-borderGreen border-8 flex flex-col flex-nowrap rounded-md justify-around">
                <h2 className="text-2xl">MUSIC</h2>
                <div className="flex flex-row self-center">
                    <img src="./src/images/tue-cover.png" alt="tue-w-gp" className="w-64 h-64" />
                    <img src="./src/images/wed-cover.png" alt="wed-w-gp" className="w-12 h-12 hidden" />
                    <img src="./src/images/cflowermtn.png" alt="c-flower-mtn" className="w-12 h-12 hidden" />
                </div>
                <div className="flex flex-row self-center">
                <div className="bg-borderGreen rounded-full w-4 h-4 opacity-70 mx-2"></div>
                <div className="bg-borderGreen rounded-full w-4 h-4 opacity-20 mx-2"></div>
                <div className="bg-borderGreen rounded-full w-4 h-4 opacity-20 mx-2"></div>
                </div>
                <p className="text-md">check out some songs i've made</p>
            </section>

            <section>
                <h2></h2>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <p></p>
            </section>

            <section>
                <h2></h2>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
                <p></p>
            </section>
        
        <div className="flex flex-row flex-nowrap self-center mt-8">
        <button className="bg-videoGameGreen rounded-full opacity-50 w-10 h-10 mx-10 border-double border-borderGreen border-8 hover:opacity-50"></button>
        <button className="bg-videoGameGreen rounded-full opacity-100 w-10 h-10 mx-10 border-double border-borderGreen border-8 hover:opacity-50"></button>
        <button className="bg-videoGameGreen rounded-full opacity-100 w-10 h-10 mx-10 border-double border-borderGreen border-8 hover:opacity-50"></button>        
        </div>

     </div>
    )
}

export default LandingPage