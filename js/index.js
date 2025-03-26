document.addEventListener("DOMContentLoaded",fetchMovies)

let url="http://localhost:3000/movies"

function fetchMovies (){
fetch(url)
.then(res=>res.json())
.then((info)=>{
    displayMovieInfo(info)
    displayMoviePoster(info)
})
.catch(console.log("Error fetching movies",error))

}
function displayMovieInfo(movies) {
     information.innerHTML=''
    movies.forEach((movie) => {
        const information=document.getElementById("title")
        information.innerHTML=''
        information.textContent=movie.title
        const detail=document.getElementById("movieinfo")
        detail.textContent=movie.synopsis
        const keyword=document.getElementById("keywords")
        keyword.textContent=movie.keywords
        const type=document.getElementById("genres")
        type.textContent=movie.genres
        const availability=document.getElementById("stream")
        availability.textContent=movie.streaming
        const year=document.getElementById("year")
        year.textContent=movie.year
        const trailer=document.getElementById("tube")
        trailer.src=movie.trailer

    });
}
 function displayMoviePoster(posters){
 posters.forEach((movie)=>{
     const image=document.getElementById("movieimg")
     image.innerHTML=''
     image.src=movie.image
     Image.alt=movie.title
 })
 }

