import { useReducer } from 'react'
import MusicOpener from './musicOpener'
import CodeOpener from './codeOpener'
import MeOpener from './meOpener'

const LandingPage = () => {

    type PageState = { pageNum: number }

    const initialPage = { pageNum: 1 }

    const REDUCER_TYPE = {
        ONE: 'ONE',
        TWO: 'TWO',
        THREE: 'THREE'
    }

    type ReducerAction = {
        type: string
    }

    const reducer = (state: PageState, action: ReducerAction): PageState => {
        switch(action.type) {
          case REDUCER_TYPE.ONE: {
            return {pageNum: 1}
          }
          case REDUCER_TYPE.TWO: {
            return {pageNum: 2}
          }
          case REDUCER_TYPE.THREE: {
            return {pageNum: 3}
          }
          default: {
            throw new Error("whaaat")
          }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialPage)

    const pageContent = () => {
        if (state.pageNum === 1) {
            return <MusicOpener />
        } else if (state.pageNum === 2) {
            return <CodeOpener />
        } else if (state.pageNum === 3) {
            return <MeOpener />
        } else {
            throw new Error("whaat")
        }
    }

    return(
     <div className="bg-gradient-to-br from-gray-900 to-gray-500 w-screen h-screen font-silkscreen text-gray-800 flex flex-col justify-center">

        <div>
            {pageContent()}
        </div>
        
        <div className="flex flex-row flex-nowrap self-center mt-8">
        <button id="music-button" className="bg-videoGameGreen rounded-full opacity-50 w-10 h-10 mx-10 border-double border-borderGreen border-8 hover:bg-opacity-50" onClick={() => {
            dispatch({ type: REDUCER_TYPE.ONE });
            (document.getElementById("music-button") as HTMLButtonElement).style.opacity = ".5";
            (document.getElementById("code-button") as HTMLButtonElement).style.opacity = "1";
            (document.getElementById("me-button") as HTMLButtonElement).style.opacity = "1"
        }}></button>
        <button id="code-button" className="bg-videoGameGreen rounded-full opacity-100 w-10 h-10 mx-10 border-double border-borderGreen border-8 hover:bg-opacity-50" onClick={() => {
            dispatch({ type: REDUCER_TYPE.TWO });
            (document.getElementById("code-button") as HTMLButtonElement).style.opacity = ".5";
            (document.getElementById("music-button") as HTMLButtonElement).style.opacity = "1";
            (document.getElementById("me-button") as HTMLButtonElement).style.opacity = "1"
        }}></button>
        <button id="me-button" className="bg-videoGameGreen rounded-full opacity-100 w-10 h-10 mx-10 border-double border-borderGreen border-8 hover:bg-opacity-50" onClick={() => {
            dispatch({ type: REDUCER_TYPE.THREE });
            (document.getElementById("me-button") as HTMLButtonElement).style.opacity = ".5";
            (document.getElementById("code-button") as HTMLButtonElement).style.opacity = "1";
            (document.getElementById("music-button") as HTMLButtonElement).style.opacity = "1"
        }}></button>        
        </div>

     </div>
    )
}

export default LandingPage