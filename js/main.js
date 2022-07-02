window.addEventListener('load', init);

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

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}

