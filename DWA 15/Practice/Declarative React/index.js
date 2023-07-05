 ReactDOM.render(<h1 className="header">This is a declarative way to program</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/ 

// const header = (<h1 class="header">Jarreed suig lat</h1>)
// header.appenchild("#root")
// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// // document.querySelector("#root").appendChild(h1) it can also be done this way
// document.getElementById("root").appendChild(h1)