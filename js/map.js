/*class Map{
    constructor(url){
        this.idMap = document.getElementById('mapid');


    }
}*/

//on initialise la carte
let mymap = L.map('mapid').setView([45.750, 4.850], 13);

//on charges les tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//ajout du marqueur
let marker = L.marker([45.750, 4.850]).addTo(mymap);

//ajout d'un popup
marker.bindPopup("<p>Lyon</p>");

