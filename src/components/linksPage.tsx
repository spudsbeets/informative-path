import Header from "./header"
import Footer from "./footer"
import { Link } from "react-router-dom"

const LinksPage = () => {
    return(
        <>
        <Header />
        <div className="pt-20">
        <h1>Links</h1>
        <Link to="/" rel="noreferrer"><button>Back</button></Link>
        </div>
        <Footer />
        </>
    )
}

export default LinksPage