class Ajax {
    constructor(){
        //this.initMarkers();
    }

    //requête ajax
    static getAjax(url, callback) {
    
        let req = new XMLHttpRequest();

        req.open("GET", 'https://api.jcdecaux.com/vls/v3/stations?contract=lyon&apiKey=48a8ae0005d81a86f1caa854661a00f38226b414');
            req.addEventListener("load", function () {

                if (req.status >= 200 && req.status < 400) {

                    callback(req.responseText);
                    console.log('completed');
                } else {

                    console.error(req.status + " " + req.statusText + " " + url);
                }
            });
            req.addEventListener("error", function () {

                console.error("Erreur réseau avec l'URL " + url);
            });
        req.send(null);
    }
}

/*
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
            Ajax.response = this.response;
            //this.response = JSON.parse(this.responseText);
            //console.log(this.response);
            stations = this.response;
        }
    };
    request.open("GET", 'https://api.jcdecaux.com/vls/v3/stations?contract=lyon&apiKey=48a8ae0005d81a86f1caa854661a00f38226b414');
    request.send();
    */
    

    /*initMarkers(){

        getAjax('https://api.jcdecaux.com/vls/v3/stations?contract=lyon&apiKey=48a8ae0005d81a86f1caa854661a00f38226b414', function(response) {
            response = JSON.parse(response);

            for (let i = 0; i < response.length; i++){

                const station = response[i];

                let marker = L.marker([45.776239, 4.871634]).addTo(mymap);

                console.log(station.number);
                if (station.available_bikes === 0){

                } else if (station.status === "CLOSE"){
    
                }

                this.marker.bindPopup(station.address);
            }
                   
        });*/
/*
        let station = this.response[i];

        Object.entries(response.station).foreach(function(station) {
            //ici j'ai un seul nom
            //on crée un marqueur par station
            let marker = L.marker([station.name, station.lat, station.long]).addTo(mymap);
            marker.bindPopup(station.address);
        
        /*ajout du marqueur
         for (let i = 0; i < this.response.length; i++){
            const station = this.response[i];

            if (station.available_bikes === 0){

            } else if (station.status === "CLOSE"){

            }

            this.marker = L.marker([station.position.lat, station.position.lng]);

            //ajout d'un popup
            this.marker.bindPopup(station.address);
            
        });*/


let myAjax = new Ajax();
 

/*Object.entries(response.numbers).foreach(function(number) {
    //ici j'ai un seul nom
    //on crée un marqueur par station
    let marker = L.marker([number[1].name, number[1].lat, number[1].long]).addTo(mymap);
    marker.bindPopup(number[1].name);*/