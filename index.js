let qShows = document.querySelector("#queued");
let showList = document.querySelector("#list");
let form = document.querySelector("#search")
let shows = []
let filteredShows = []




function createShows(show) {
    listedShow = document.createElement(`li`)
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


function start() {
    fetch(`http://localhost:3000/shows`)
        .then((resp) => resp.json())
        .then((showData) => {
            allShows = showData 
            console.log("show")
            showData.forEach(show => {
                shows.push(show.title)
                createShows(show)
            })
        })
    document.querySelector(`form`).addEventListener(`submit`, (e) => {
        e.preventDefault()
        let query = e.target.search.value.toLowerCase()
        console.log(query)
        filteredShows.title = shows.filter(show => {
            return show.toLowerCase().includes(query)
        })
        if (filteredShows.title.length === 1) {
            showList.innerHTML = ""
            createShows(filteredShows)
            console.log(filteredShows)
            console.log(filteredShows.title.length)
        }
        else {
            allShows.forEach(show => createShows(show))
            
        }
})
}


start()


        // else if (filteredShows.) {
        //     console.log ("NO SHOW FOUND")
        //     allShows.forEach(show => {
        //         createShows(show)
        //     })
        // }
    // })