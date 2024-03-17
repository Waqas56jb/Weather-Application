$(document).ready(function() {
    const apikey = "a0b89ba1a32089ad12b231c3be8c9c1a";
    const searchbox = document.querySelector('.city-input');
    const searchbtn = document.querySelector('.search-btn');
    const weathericon = document.querySelector(".weather-icon");
    const error = document.querySelector('.error');
    const weather = document.querySelector('.weather');

    searchbtn.addEventListener("click", () => {
        const city = searchbox.value.trim();
        if (city !== '') {
            const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
            const xhr = new XMLHttpRequest();
            xhr.open('GET', apiurl, true);
            xhr.onload = function() {
                if (this.status === 200) {
                    const data = JSON.parse(this.responseText);
                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                    if (data.weather[0].main == "Clouds") {
                        weathericon.src = "clouds.png";
                    } else if (data.weather[0].main == "Clear") {
                        weathericon.src = "clear.png";
                    } else if (data.weather[0].main == "Rain") {
                        weathericon.src = "rain.png";
                    } else if (data.weather[0].main == "Drizzle") {
                        weathericon.src = "drizzle.png";
                    } else if (data.weather[0].main == "Mist") {
                        weathericon.src = "mist.png";
                    }
                    error.style.display = "none";
                    weather.style.display = "block";
                } else {
                    error.style.display = "block";
                    weather.style.display = "none";
                }
            };
            xhr.send();
        } else {
            alert('Please enter a city name');
        }
    });

    $(".color").click(function() {
        $(".card").css("background-color", $(this).css("background-color"));
    });

    $("#lightOff").click(function() {
        $("body").css("background-color", "black");
    });

    $("#lightOn").click(function() {
        $("body").css("background-color", "white");
    });
});
