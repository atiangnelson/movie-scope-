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
     const infobox=document.getElementById("infobar")
     infobox.innerHTML=""
    movies.forEach((movie) => {
        const moviecard=document.createElement("div")
        moviecard.classList.add("movie-card")
        moviecard.innerHTML=`
                <h3>${movie.title}</h3>
                <p>${movie.synopsis}</p>
                <p>${movie.keywords}</p>
                <p>${movie.genres}</p>
                <p>${movie.streaming}</p>
                <h4>${movie.year}</h4>`
        infobox.appendChild(moviecard)
    
        // const information=document.getElementById("title")
        // information.textContent=movie.title
        // const detail=document.getElementById("movieinfo")
        // detail.textContent=movie.synopsis
        // const keyword=document.getElementById("keywords")
        // keyword.textContent=movie.keywords
        // const type=document.getElementById("genres")
        // type.textContent=movie.genres
        // const availability=document.getElementById("stream")
        // availability.textContent=movie.streaming
        // const year=document.getElementById("year")
        // year.textContent=movie.year
        
    }  
    )
    };

 function displayMoviePoster(posters){
    const imageinfo=document.getElementById("imginfo")
    imageinfo.innerHTML=""
 posters.forEach((movie)=>{
     const image=document.createElement("img")
     image.src=movie.image
     image.alt=movie.title
     imageinfo.appendChild(image)
 })
 }