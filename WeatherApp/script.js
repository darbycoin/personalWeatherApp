 var today = new Date();
var day = today.toString();
var arrayOfWords = day.split(" ");
var myDate = arrayOfWords[0] + ", " + arrayOfWords[1] + " " + arrayOfWords[2];
//for (int i= 0; i < arrayOfWords.)
 console.log(myDate);
 document.querySelector("#date").innerHTML = myDate;
            var time = today.getHours() + ":" + today.getMinutes();
            document.querySelector("#time").innerHTML = time;

let weather = {
    "apiKey": "34c5dd42b6dca37e0eb8bd7042912faf",
    
    fetchWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.47&lon=-73.83&units=metric&appid=34c5dd42b6dca37e0eb8bd7042912faf")
        .then((response) => response.json())
       .then((data) => this.displayWeather(data));
    },


    displayWeather: function(data){
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humid").innerText = "Humidity: " + humidity + "%";


    },
    
}
weather.fetchWeather();


