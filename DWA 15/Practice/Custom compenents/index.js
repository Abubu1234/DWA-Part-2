
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */
// import React from "react"
// import ReactDOM from "react-dom" 
function Page() {
    return (<div>
        <ol>
        <li>It seems fun</li>
        <li>It's interesting</li>
        <li>It can help me to develope a website</li>
        </ol>
        </div>)
}
ReactDOM.render(Page(), document.getElementById("root"))