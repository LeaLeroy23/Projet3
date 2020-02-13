class Map{
    constructor(){
        this.initMap();
        this.initMarkers();
        this.stationModel = {

        }
 
    }

    initMap(){
        //on initialise la carte
        let mapId = document.getElementById("mapid");
        this.myMap = L.map(mapId).setView([45.750, 4.850], 13);

        //on charges les tiles
        this.layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.myMap);
    }

    initMarkers(){
        let myAjax = new Ajax();

        Ajax.getAjax('https://api.jcdecaux.com/vls/v3/stations?contract=lyon&apiKey=48a8ae0005d81a86f1caa854661a00f38226b414', function(response) {
            response = JSON.parse(response);
            const station = response[i];
            for (let i = 0; i < response.length; i++){


                if (station.available_bikes === 0){

                } else if (station.status === "CLOSE"){
    
                }

                this.marker.bindPopup(station.address);
            }
                   
        });

    }
}

let mapInit = new Map();

/*let newMarker = L.marker([station.position.lat, station.position.lng]);
                newMarker.bindPopup();
                newMarker.addTo(this.myMap)*/
