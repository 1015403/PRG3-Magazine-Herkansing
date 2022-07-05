window.addEventListener('load', init);

//globals
let allCars;
let detailButton;
let favButton;
let favCars = [];
let apiUrl = 'http://localhost/magazine/webservice/'

let carsDetails = [
    {
        name: "Ford Mustang Shelby GT500",
        image: "./images/GT500.jpg",
        information: "De Ford Mustang Shelby GT500 zit binnen 3.3 seconden op de 100 kph",
        top_speed: "290 kph",
        engine: "5.2L Supercharged V8",
        tags: ['760HP', '7-speed Tremec dual-clutch transmission']
    },
    {
        name: "Ford Mustang GT350",
        image: "./images/GT350.jpg",
        information: "Helaas wordt de GT350 niet meer gemaakt...",
        top_speed: "276 kph",
        engine: "5.2L V8",
        tags: ['526HP', '6-speed Tremec clutch transmission', '8250rpm']
    },
    {
        name: "Ford Mustang GT",
        image: "./images/mustangGT.jpg",
        information: "Goedkope broertje van de andere Mustangs",
        top_speed: "250 kph",
        engine: "5.0L V8",
        tags: ['449HP', '6-speed Tremec clutch transmission']
    },
    {
        name: "Ford Mustang Mach-1",
        image: "./images/mach1.jpg",
        information: "Nieuwste versie van de Mustang serie",
        top_speed: "249 kph",
        engine: "5.0L V8 A10",
        tags: ['460HP', '6-speed Tremec clutch transmission']
    },
    {
        name: "Ford Mustang Mach-E",
        image: "./images/machE.jpg",
        information: "De eerste elektrische wagen van Ford is toevallig ook een Mustang",
        top_speed: "184 kph",
        engine: "Elektrisch 115kW",
        tags: ['269HP']
    },
    {
        name: "Ford GT",
        image: "./images/FordGT.jpg",
        information: "De Ford GT is een middenmotor superauto. Het ontwerp is gebaseerd op de Ford GT40",
        top_speed: "330 kph",
        engine: "5.4L V8",
        tags: ['550HP', '7-speed dual-clutch transmission paddles']
    },
    {
        name: "Ford Fiësta",
        image: "./images/fordFiesta.jpg",
        information: "Het meest verkochte type Ford auto samen met de Focus",
        top_speed: "230 kph",
        engine: "1.0L ECOBOOST",
        tags: ['200HP']
    },
    {
        name: "Ford Focus",
        image: "./images/Focus.jpg",
        information: "Het meest verkochte type Ford auto samen met de Fiësta",
        top_speed: "250 kph",
        engine: "1.5L ECOBOOST",
        tags: ['279HP']
    },
    {
        name: "Ford Kuga",
        image: "./images/kuga.jpg",
        information: "Mooie en compacte SUV",
        top_speed: "200 kph",
        engine: "1.5L ECOBOOST",
        tags: ['151HP']
    },
    {
        name: "Ford Puma",
        image: "./images/fordPuma.jpg",
        information: "De Puma heeft een geavanceerde Hybride aandrijving",
        top_speed: "220 kph",
        engine: "1.0L ECOBOOST",
        tags: ['200HP']
    }
];

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

//(detailButton onclick)
function showDetails(cars){
    console.log("I pressed car number " + cars);

    //name of car
    let nameCar = document.getElementById("nameCar");
    nameCar.innerHTML = carsDetails[cars].name;

    //information of car
    let information = document.getElementById("information");
    information.innerHTML = carsDetails[cars].information;

    //top speed of car
    let top_speed = document.getElementById("top_speed");
    top_speed.innerHTML = carsDetails[cars].top_speed;

    //engine type of car
    let engine = document.getElementById("engine");
    engine.innerHTML = carsDetails[cars].engine;

    //tags of car
    let tags = document.getElementById("tags");
    tags.innerHTML = carsDetails[cars].tags;
}
