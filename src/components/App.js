import { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

import "../css/App.css";

function App() {
  // API KEY
  const API_KEY = "ZJdS5e7KfQSEgnR0fSHhDTi2uRIbXqfiuelxvGRw";
  // Request Image of the day starting from Jan 1, 2022
  const START_DATE = "2022-01-01";
  // GET request params
  const uri = `https://api.nasa.gov/planetary/apod?start_date=${START_DATE}&api_key=${API_KEY}`;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // fetch data from API when page loads
    try {
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  // GET request using axios
  const fetchData = () => {
    setLoading(true);
    axios
      .get(uri)
      .then((res) => {
        setItems(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className='App container'>
      <div className='header'>
        <div className='title'>
          <i className='far fa-star'></i>
          <h1 className='text-center'>SPACESTAGRAM</h1>
          <i className='far fa-star'></i>
        </div>
        <h4 className='tagline text-center'>Image-sharing from the final frontier</h4>
      </div>
      {loading ? (
        <h1 className='loading text-center'>Loading...</h1>
      ) : (
        <div className='row'>
          {items.map((item, key) => {
            return (
              <div key={key} className='post-card col-lg-4 col-md-6'>
                <Post item={item} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
