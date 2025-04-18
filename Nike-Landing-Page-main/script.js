let mode=document.querySelector(".mode")
let body=document.body
let main=document.querySelector(".main")
let content=document.querySelector(".content")
let currMode="light"

mode.addEventListener("click",() =>{
    if (currMode === "light"){
        currMode="dark";
        console.log("dark");
        
        body.style.backgroundColor="black"
        main.style.backgroundColor="black"
        content.style.backgroundColor="white"
        body.style.color="white"
        main.style.color="white"
        content.style.color="black"

    }
    else{
        
        currMode="light"
        body.style.backgroundColor="white"
        main.style.backgroundColor="#d0d4D5"
        content.style.backgroundColor="#0d4D5"
        main.style.color="black"
        body.style.color="black"
        content.style.color="black"

        console.log("light");
        
    }
})