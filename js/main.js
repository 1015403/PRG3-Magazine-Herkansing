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

//(favButton onclick) add or remove a car to favCars array
function addOrRemoveFav(carsID){
    //if car is already in the favCars array
    let carName = carsDetails[carsID].name;
    if(favCars.includes(carName)){
        //find the position of the car in favCars array
        let pos = favCars.indexOf(carName)
        //remove car from the array
        favCars.splice(pos, 1);
    } else {
        //else (if car is not in favCars array)
        //add car to favCars array
        favCars.push(carName);
    }
    //stringify favCars array and set it in local Storage
    localStorage.setItem('myFavoriteCars', JSON.stringify(favCars));
    //force reload of page
    location.reload()
}
