class Map{
    constructor(){
        this.stationModel = {
            init : function (name, address, positionlat, positionlng, status){
                this.name = name;
                this.address = address;
                this.position = {
                    lat : positionlat,
                    lng : positionlng
                };
                this.status = status;
            }
        };
        this.greenIcon = L.icon({
            iconUrl: "Contenu/pin-check-green.png",
            iconSize: [25, 41]
        });
        this.orangeIcon = L.icon({
            iconUrl: "Contenu/pin-orange.png",
            iconSize: [25, 41]
        });
        this.redIcon = L.icon({
            iconUrl: "Contenu/pin-cross-red.png",
            iconSize: [25, 41]
        });
        this.initMap();
        this.initMarkers();
 
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
            let stations = response;

            for (let station of stations){
                let newStation = Object.create(this.stationModel);
                newStation.init(station.name, station.position.lat, station.position.lng);

                let myIcon = this.greenIcon;

                if (newStation.status === "CLOSE"){
                    newStation.available_bikes === 0;
                };

                if (newStation.available_bikes < 100){
                    myIcon = this.orangeIcon;
                    if (newStation.available_bikes === 0){
                        myIcon = this.redIcon;
                    }
                }

                let newMarker = L.marker([newStation.positionlat, newStation.positionlng], {icon: myIcon}, {opacity: 1}, {bubblingMouseEvents: true}, {interactive: true});
                newMarker.bindPopup();
                newMarker.addTo(this.myMap);

            }

                   
        });

    }
}

let mapInit = new Map();

/*for (let i = 0; i < response.length; i++){

    if (station.available_bikes === 0){
        myIcon = this.orangeIcon;
    } else if (station.status === "CLOSE"){
        myIcon = this.redIcon;
    }

}*/