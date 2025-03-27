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
                <h4 id="rating" >${movie.rating}</h4>
<input type="number" class="rate-input"  placeholder="Rate (0-10)" min="0" max="10">
<button class="submit-rating" >Submit</button> `
        infobox.appendChild(moviecard)
        document.querySelectorAll(".submit-rating").forEach((button) => {
            button.addEventListener("click", (event) => {
                const movieId = event.target.getAttribute("data-id");
                const newRating = document.querySelector(`.rate-input[data-id='${movieId}']`).value;
                updateMovieRating(movieId,newRating);
            });
        });

        
    }  
    )
    };
    
    
    function updateMovieRating( movieId,newRating){
        if(newRating < 0||newRating > 10 || newRating===""){
            alert("please enter a valid input")

        }
    }
    fetch(url ,{
        method: "PATCH",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({rating:newRating})
        

    })
    .then((res) => {
        if (!res.ok) {
            throw new Error("Failed to update rating");
        }
        return res.json();
    })
    .then((updatedMovie) => {
        
        document.getElementById(`rating`).textContent = updatedMovie.rating; 
    })
    .catch(error => console.log("Error updating rating:", error));

