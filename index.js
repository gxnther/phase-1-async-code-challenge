let qShows = document.querySelector("#queued");
let shows = document.querySelector("list");
let search = document.queryCommandIndeterm("#search")

function getShows(){
    fetch(`http://localhost:3000/shows`)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
}
