import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

const FetchData = ({ cat }) => {
  const [Data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        cat 
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=8e51b9af772c4eafba10dec25c5a8d1d`
          : "https://newsapi.org/v2/top-headlines?country=in&apiKey=8e51b9af772c4eafba10dec25c5a8d1d"
      );
      setData(res.data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <div className='container my-4'>
      <h3>
        <u>TOP HEADLINES</u>
      </h3>
      <div className='my-2 container d-flex justify-content-center align-items-center flex-column my-3' style={{ minHeight: '100vh' }}>
        {loading ? "LOADING...." : Data.map((item, index) => (
          <div key={index} className="container my-4 p-3" style={{ width: "600px", boxShadow: '2px 2px 10px silver', borderRadius: '10px' }}>
            <h5 className='my-2'>{item.title || "No title available"}</h5>
            {item.urlToImage && (
              <div className='justify-content-center align-items-center'>
                <img
                  src={item.urlToImage}
                  alt="Article Image"
                  className='img-fluid'
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
              </div>
            )}
            <p className='my-2'>{item.content}</p>
            <a href={item.url} target='_blank' rel='noopener noreferrer'>View more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchData;
