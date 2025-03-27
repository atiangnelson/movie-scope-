document.addEventListener("DOMContentLoaded",fetchMovies)

let url="http://localhost:3000/movies"

function fetchMovies (){
fetch(url)
.then(res=>res.json())
.then((info)=>{
    displayMovieInfo(info)
    displayMoviePoster(info)
})
.catch(error=>console.log("Error fetching movies:",error))

}
function displayMovieInfo(movies) {
    
    
    movies.forEach((movie) => {
        
        const infobox=document.getElementById("infobar")
        const information=document.getElementById("title")
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
        infobox.appendChild(information)
        infobox.appendChild(detail)
        infobox.appendChild(keyword)
        infobox.appendChild(type)
        infobox.appendChild(availability)
        infobox.appendChild(year)

    }  
    )
    };

 function displayMoviePoster(posters){
 posters.forEach((movie)=>{
     const image=document.getElementById("movieimg")
     image.src=movie.image
     image.alt=movie.title
 })
 }