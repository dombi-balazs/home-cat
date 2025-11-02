import { useState, useEffect } from "react";
import "./App.css";

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string | null;
}

function App() {
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/weatherforecast")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: WeatherForecast[]) => {
        setForecasts(data);
      })
      .catch((err) => {
        console.error("API Fetch Error:", err);
        setError(
          "Could not fetch weather data. Please check if the Backend is running (https://localhost:7001)!",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Weather forecast 🌥️</h1>

      {forecasts.length === 0 ? (
        <p>There is no data.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temperature (°C)</th>
              <th>Temperature (°F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {forecasts.map((forecast, index) => (
              <tr key={index}>
                <td>{new Date(forecast.date).toLocaleDateString()}</td>
                <td>{forecast.temperatureC}</td>
                <td>{forecast.temperatureF}</td>
                <td>{forecast.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p className="footer">Footer text</p>
    </div>
  );
}

export default App;
