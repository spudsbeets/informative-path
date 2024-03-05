import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"

const MePage = () => {
    return(
        <>
        <Header />
        <div className="pt-20">
        <h1>Me</h1>
        <Link to="/" rel="noreferrer"><button>Back</button></Link>
        </div>
        <Footer />
        </>
    )
}

export default MePage