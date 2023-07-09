import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import MainContent from "./components/MainContent.js"

/**
Challenge: move the Footer and MainContent components
into their own files.
*/
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))