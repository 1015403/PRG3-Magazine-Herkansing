window.addEventListener('load', init);
window.addEventListener('load', checkLike);

//globals
let apiUrl = 'http://localhost/magazine/webservice/'
let cars

//Init
function init() {
    getCars();

    if (typeof window.localStorage === "undefined") {
        console.error('Local storage is not available in your browser');
        return;
    }

    if (window.localStorage.getItem("favorites") === null) {
        addToLocalStorage("favorites", []);
    }

    console.log(getFromLocalStorage("favorites"));
}

document.getElementById("infoBtn").addEventListener("click", infoBtnFunction);

function infoBtnFunction() {
    document.getElementById("infoBtn").innerHTML = "YOU CLICKED ME!";
}

$('.addToFavBtn').on('click', event => {
    var storeName = $(event.target).parents()[1].firstElementChild.innerHTML;

    var favorites = JSON.parse(localStorage.getItem("favorites"));
    if (!favorites){
        localStorage.setItem("favorites", JSON.stringify({stores:[]}));
        favorites = JSON.parse(localStorage.getItem("favorites"));
    }else{
        favorites = JSON.parse(favorites);
    }

    favorites.stores.push(storeName);

    localStorage.setItem("favorites", JSON.stringify(favorites));
}
);

//Local Storage
function addToLocalStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}
