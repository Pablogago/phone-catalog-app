import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5000/phones`);
      const data = await res.json();
      setPhones(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <header>Phone catalog</header>
    )
  }
  return (
    <div className="homepage">
      <header>Phone catalog</header>
      <ul className="phones-wrapper">
        {phones.map(element => {
          return (
            <li className="phone--item" key={element._id}>
              <Link to={{
                pathname: `${element._id}`,
                state: { data: element }
                }}>
                <img width="320" className="homepage__img" src={element.imageFileName} alt={element.name} />
                <h1>{element.name}</h1>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}


export default HomePage;
