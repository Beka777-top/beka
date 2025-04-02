import axios from "axios";
import { useState, useEffect } from "react";

export default function WeatherApp() {
  const [weather, setWeather] = useState([]);

  function Display() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <button onClick={Display}>Click</button>
      {weather.slice(0, 5).map((post: any) => (
        <div className="Data" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
