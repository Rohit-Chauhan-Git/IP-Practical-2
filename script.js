async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "e475fc7397e1a84eb684c5e3d13e2320"; // Replace with OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById("weather-result").innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById("weather-result").innerHTML = `<p>City not found.</p>`;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
