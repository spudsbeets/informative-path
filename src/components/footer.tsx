const Footer = () => {
    return(
        <footer className="w-full bg-videoGameGreen h-16 fixed z-10 bottom-0 border-t-borderGreen border-t-8">
          <div className="flex flex-row flex-nowrap justify-start h-full animate-move-ships lg:animate-move-ship-large">
          <img src="./src/images/five.png" alt="ship-1" className="min-w-10 min-h-10 max-w-10 max-h-10 self-center mr-10 animate-ship-1-twitch" />
          <img src="./src/images/five.png" alt="ship-2" className="min-w-10 min-h-10 max-w-10 max-h-10 self-center mx-10 animate-ship-2-twitch" />
          <img src="./src/images/five.png" alt="ship-3" className="min-w-10 min-h-10 max-w-10 max-h-10 self-center mx-10 animate-ship-3-twitch" />
          </div>
        </footer>
    )
}

export default Footer