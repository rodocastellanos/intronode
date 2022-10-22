const axios = require ("axios");
console.log("Hola JS");
let apiKey = "569325fcd24739160a9debf51e68876d";
let city = "santiago, cl";
let requestConfig = {
    url : "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey,
};
let objPromesa = axios(requestConfig);
objPromesa
    .then(function (response){
        console.log("la temperatura en Santiago de Chile es:" + 
        (response.data.main.temp - 273.5).toFixed(2).toString() 
        + " Grados Celsius");
    })
    .catch(function (err) {
        console.log(err);
    });