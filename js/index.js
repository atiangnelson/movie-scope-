document.addEventListener("DOMContentLoaded",fetchMovies)

let url="http://localhost:3000/movies"
document.addEventListener("DOMContentLoaded",fetchMovies)
function fetchMovies (){
fetch(url)
.then(res=>res.json())
.then((info)=>{
    displayMovieInfo(info)
    displayMoviePoster(info)
})
.catch(console.log("Error fetching movies"))

}
function displayMovieInfo(movies) {
    movies.forEach((movie) => {
        const information=document.getElementById("title")
        information.innerHTML=''
        information.textContent=movie.title
        const detail=document.getElementById("movieinfo")
        detail.textContent=movie.synopsis
        const keyword=document.getElementById("keywords")
        keyword.textContent=movie.keywords

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
