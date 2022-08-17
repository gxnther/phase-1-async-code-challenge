let qShows = document.querySelector("#queued");
let showList = document.querySelector("#list");
let search = document.queryCommandIndeterm("#search")

function createShows(show){
    let listedShow = document.createElement(`li`)
    listedShow.innerHTML = `${show.title}`
    showList.append(listedShow)  
    listedShow.addEventListener("click", (e) => {
        let newQueued = document.createElement(`li`)
        newQueued.innerHTML = `${show.title}`
        qShows.append(newQueued)
        newQueued.addEventListener("click" , (e) => {
            console.log("asdas")
        })
    })
}


function getShows(){
    fetch(`http://localhost:3000/shows`)
    .then((resp) => resp.json())
    .then((showData) => showData.forEach(show => createShows(show)))
}

function start(){
    getShows()
}

start()