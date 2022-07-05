window.addEventListener('load', init);

//globals
let allCars;
let detailButton;
let favButton;
let favCars = [];
let apiUrl = 'http://localhost/magazine/webservice/'

//Init
function init(){
    allCars = document.getElementById("listCars");

    getFavCars();
    createCarCards();

    //add click event to every favButton
    favButton = document.getElementsByClassName("favBtn")
    for (let i = 0; i < favButton.length; i++){
        favButton[i].addEventListener("click", function(e){addOrRemoveFav(i)});
    }

    //add click event to every detailButton
    detailButton = document.getElementsByClassName("detailsBtn")
    for(let i = 0; i < detailButton.length; i++){
        detailButton[i].addEventListener("click", function (e){showDetails(i)});
    }
}

//get local storage fav cars
function getFavCars(){
    //get cars from local storage
    let storedString = localStorage.getItem('myFavoriteCars');
    //if storedString not empty
    if(storedString){
        //parse storedString
        let storedData = JSON.parse(storedString);
        for(let name of storedData) {
            //push cars to favCars array
            favCars.push(name);
        }
    }
}


