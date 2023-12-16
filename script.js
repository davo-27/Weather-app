const apiKey = "394b9c3408ea2e419c4af34f17ed6c64";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
 
if (response.status === 404) {
    document.querySelector(".error").style.display = "block"
    document.querySelector(".weather").style.display = "none"
}else{



    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "c⁰";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";


    if (data.weather[0].main == "Mist") {
        weatherIcon.src = "sun-behind-large-cloud-svgrepo-com.svg"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "sun-svgrepo-com.svg"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "rain-forecast-svgrepo-com (1).svg"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "cloud-drizzle-svgrepo-com.svg"
    }
    else if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "cloud-svgrepo-com.svg"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"

   
    console.log(data)
}
}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})


