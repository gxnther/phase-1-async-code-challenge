let qShows = document.querySelector("#queued");
let showList = document.querySelector("#list");
let form = document.querySelector("#search")
let shows = []
const filteredShows = []



function createShows(show) {
    let listedShow = document.createElement(`li`)
    listedShow.innerHTML = `${show.title}`
    showList.append(listedShow)
    listedShow.addEventListener("click", (e) => {
        let newQueued = document.createElement(`li`)
        newQueued.innerHTML = `${show.title}`
        qShows.appendChild(newQueued)
        newQueued.addEventListener("click", (e) => {
            newQueued.remove()
        })
    })
}

function getShows() {
    fetch(`http://localhost:3000/shows`)
        .then((resp) => resp.json())
        .then((showData) => {
            console.log("show")
            showData.forEach(show => {
                shows.push(show.title)
                createShows(show)
            })
        })
}

function start() {
    document.querySelector(`form`).addEventListener(`submit`, (e) => {
        e.preventDefault()
        let query = e.target.search.value
        console.log(query)
        const filteredShows = shows.filter(show => {
            return show.includes(query)
        })
        console.log(filteredShows)
    })
    getShows()
}



start()