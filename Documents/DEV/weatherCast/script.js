document.addEventListener("DOMContentLoaded", function () {
   const apiKey = "286743c7922441edb6a110823232510"; // Remplacez par votre clé wheatherAPI
    const getWeatherButton = document.getElementById("get-weather");
    const cityInput = document.getElementById("city");
    const weatherDescription = document.getElementById("weather-description");
    const weatherIcon = document.getElementById("weather-icon");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");
    const windSpeed = document.getElementById("wind-speed");

    getWeatherButton.addEventListener("click", function () {
    const city = cityInput.value;

      // Utilisez l'API weatherAPI pour obtenir les données météo
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&query=${city}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.current && data.current.condition) {
                // weatherDescription.textContent = `Conditions : ${data.current.condition.text}`;
                weatherIcon.src = `http:${data.current.condition.icon}`;
                temperature.textContent = `Température : ${data.current.temp_c}°C`;
                humidity.textContent = `Humidité : ${data.current.humidity}%`;
                windSpeed.textContent = `Vitesse du vent : ${data.current.wind_kph} km/h`;
            } else {
                weatherDescription.textContent = "Aucune donnée météo disponible.";
                weatherIcon.src = ""; // Effacez l'icône en cas de données manquantes
                temperature.textContent = "";
                humidity.textContent = "";
                windSpeed.textContent = "";
            }
        })
        })
    });
