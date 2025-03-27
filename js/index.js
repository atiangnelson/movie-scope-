document.addEventListener("DOMContentLoaded",fetchMovies)

let url="http://localhost:3000/movies"

function fetchMovies (){


fetch(url)
.then(res=>res.json())
.then((info)=>{
    displayMovieInfo(info)
    
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
        <a href="${movie.trailer}"><img src="${movie.image}" alt="" id="movieimg">$</a>
                <h3>${movie.title}</h3>
                <p>${movie.synopsis}</p>
                <p>${movie.keywords}</p>
                <p>${movie.genres}</p>
                <p>${movie.streaming}</p>
                <h4>${movie.year}</h4>
                
                `
        infobox.appendChild(moviecard)
        
    }  
    )
    };
