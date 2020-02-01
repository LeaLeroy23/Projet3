/*class Map{
    constructor(url){
        leaflet & openstreetmap

        //ajax
        //this.url= "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=48a8ae0005d81a86f1caa854661a00f38226b414";

    }
}*/

let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200){
        let response = JSON.parse(this.responseText);
        //on traite les reponses reçu
        Object.entries(response.numbers).foreach(number => {
            //ici j'ai un seul nom
            //on crée un marqueur par station
            let marker = L.marker([number[1].name, number[1].lat, number[1].long]).addTo(mymap);
            marker.bindPopup(number[1].name);
        })
    } else {
        console.log(this.statusText);
    }
};
request.open("GET", 'https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=48a8ae0005d81a86f1caa854661a00f38226b414');
request.send();