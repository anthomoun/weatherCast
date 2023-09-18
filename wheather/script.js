document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "83416db8b679d0a70705732e7bfac023"; // Remplacez par votre clé API Weatherstack
  const getWeatherButton = document.getElementById("get-weather");
  const cityInput = document.getElementById("city");
  const weatherDescription = document.getElementById("weather-description");
  const temperature = document.getElementById("temperature");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");

  getWeatherButton.addEventListener("click", function () {
      const city = cityInput.value;

      // Utilisez l'API Weatherstack pour obtenir les données météo
      fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
          .then((response) => response.json())
          .then((data) => {
              weatherDescription.textContent = `Conditions : ${data.current.weather_descriptions[0]}`;
              temperature.textContent = `Température : ${data.current.temperature}°C`;
              humidity.textContent = `Humidité : ${data.current.humidity}%`;
              windSpeed.textContent = `Vitesse du vent : ${data.current.wind_speed} km/h`;
          })
          .catch((error) => {
              console.error("Erreur lors de la récupération des données météo : ", error);
          });
  });
});
