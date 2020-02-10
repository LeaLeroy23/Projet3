class Ajax {
    constructor(){
        this.initAjax();
        this.initMarkers();
    }

    //requête ajax
    initAjax() {

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
        }
    };
    request.open("GET", 'https://api.jcdecaux.com/vls/v3/stations?contract=lyon&apiKey=48a8ae0005d81a86f1caa854661a00f38226b414');
    request.send();
    
    }

    initMarkers(){
        //ajout du marqueur
        this.marker = L.marker(station.position).addTo(this.mymap);

        for (let i = 0; i<this.station.length i++){

        }

        //ajout d'un popup
        this.marker.bindPopup(station.address);
    }
    
}

let myAjax = new Ajax();


/*Object.entries(response.numbers).foreach(function(number) {
    //ici j'ai un seul nom
    //on crée un marqueur par station
    let marker = L.marker([number[1].name, number[1].lat, number[1].long]).addTo(mymap);
    marker.bindPopup(number[1].name);*/