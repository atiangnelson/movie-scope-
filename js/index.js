document.addEventListener("DOMContentLoaded",fetchMovies)

let url="https://movie-scope-1i6l.vercel.app/movies"

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
                <span id="rating-${movie.id}">${movie.rating}</span></p>
<input type="number" class="rate-input" data-id="${movie.id}" placeholder="Rate (0-10)" min="0" max="10">
<button  data-id="${movie.id}" class="submit-rating" >Submit</button> 
 <button class="delete-movie" data-id="${movie.id}">Delete</button>
`
        infobox.appendChild(moviecard)
        
            });
            document.querySelectorAll(".submit-rating").forEach((button) => {
                button.addEventListener("click", (event) => {
                    const movieId = event.target.getAttribute("data-id");
                    const newRating = document.querySelector(`.rate-input[data-id='${movieId}']`).value;
                    updateMovieRating(movieId,newRating)
        });

        document.querySelectorAll(".delete-movie").forEach((button) => {
            button.addEventListener("click", (event) => {
                const movieId = event.target.getAttribute("data-id");
                deleteMovie(movieId);
            });
        });


        
    }  
    )
    };
    
    
    function updateMovieRating( movieId,newRating){
        if(newRating < 0||newRating > 10 || newRating===""){
            alert("please enter a valid input")

        }
    
    fetch(`${url}/${movieId}`,{
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

}
function deleteMovie(movieId){
fetch(`${url}/${movieId}`,{
    method: "DELETE",

})
.then((res) => {
    if (!res.ok) {
        throw new Error("Failed to delete movie");
    }
    return res.json();
})
.then(() => {
    fetchMovies(); 
})
.catch(error => console.log("Error deleting movie:", error));
}