class Map{
    constructor(){
        this.initMap();
    }

    initMap(){
        //on initialise la carte
        let mapId = document.getElementById("mapid");
        this.mymap = L.map(mapId).setView([45.750, 4.850], 13);

        //on charges les tiles
        this.layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.mymap);
    }

}

let mapInit = new Map();
