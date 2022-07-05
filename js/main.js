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

//create car cards
function createCarCards(){
    for (let cars of carsDetails){
        //create carCard
        let car = document.createElement('div');
        car.classList.add('carCard');

        //create name tags
        let name = document.createElement('h2');
        name.innerText = cars.name;

        //create image
        let image = document.createElement('img');
        image.src = cars.image;

        //create favBtn
        let favButton = document.createElement('p');
        favButton.classList.add('favBtn');

        //checks if car is in favCars array
        let isFavorite = favCars.includes(cars.name);

        //if the car is favCars array
        if (isFavorite){
            //add fav class
            car.classList.add('fav')
            //buttons text: remove from favorites
            favButton.innerText = "Remove from favorites"
            favButton.classList.add('favorited')
            //else (if not in favCars array)
        } else {
            //button text: add to favorites
            favButton.innerText = "Add to favorites"
            favButton.classList.remove('favorited')
        }

        //create detailsBtn
        let detailButton = document.createElement('p');
        detailButton.classList.add('detailsBtn');
        detailButton.innerText = "Show information"

        //append all divs to parent div
        allCars.appendChild(car)
        car.appendChild(name);
        car.appendChild(image);
        car.appendChild(favButton);
        car.appendChild(detailButton);
    }
}
