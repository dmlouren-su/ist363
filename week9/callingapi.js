 async function fetchWeather() {
            try {
                let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,precipitation,cloud_cover");
                let data = await response.json();
                
                document.getElementById("precipitation").innerText = data.current.precipitation;
                document.getElementById("temperature").innerText = data.current.temperature_2m;
                
                let cloudCover = data.current.cloud_cover;
                let weatherIcon = document.getElementById("weather-icon");
                
                // Change emoji based on cloud cover percentage
                if (cloudCover < 20) {
                    weatherIcon.innerText = "☀️"; // Sunny
                } else if (cloudCover < 80) {
                    weatherIcon.innerText = "⛅"; // Partly cloudy
                } else {
                    weatherIcon.innerText = "☁️"; // Cloudy
                }
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }

        fetchWeather();