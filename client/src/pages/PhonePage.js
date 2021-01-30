import React, { useState, useEffect } from 'react';
import { Link, Redirect, useParams, useLocation } from 'react-router-dom';
import { ReactComponent as GoBackIcon } from '../images/arrow.svg';
import './PhonePage.css';

function PhonePage() {
  const [phone, setPhone] = useState(null);
  const [redirectHome, setRedirectHome] = useState(false);
  const location = useLocation();
  const { phoneId } = useParams();

  useEffect(() => {
    if (location.state) {
      setPhone(location.state.data);
    } else {
      if (redirectHome) return;
      fetch(`http://localhost:5000/phones/${phoneId}`).then(async res => {
        const data = await res.json();
        setPhone(data);
      });
    }
  }, [location.state]);

  const onClickdelete = () => {
    fetch(`http://localhost:5000/phones/${phoneId}`, { method: 'DELETE' });
    setRedirectHome(true);
  }

  if (redirectHome) {
    return <Redirect to="/" />
  }

  if (!phone) {
    return <header></header>;
  }

  return (
    <div className="phone-page">
      <header>
        <div className="header-wrapper">
          <Link to="/">
            <GoBackIcon className="go-back-icon" title="go back" width="20" height="20" />
          </Link>
          <span>{phone.name}</span>
          <button onClick={onClickdelete} className="button delete-phone-button">Delete</button>
        </div>
      </header>
      <div className="phonepage">
        <div className="phonepage__box">
          <img className="phonepage__img" src={phone.imageFileName} alt={phone.name} />
          <div className="phonepage__specsBox">
            <h1>{phone.name}</h1>
            <div className="phonepage__specs">
              <div>
                <p>manufacturer: {phone.manufacturer}</p>
                <p>color: {phone.color}</p>
                <p>screen: {phone.screen}</p>
              </div>
              <div>
                <p>processor: {phone.processor}</p>
                <p>ram: {phone.ram}gb</p>
                <p>price: {phone.price}$</p>
              </div>
            </div>
            <p>description: {phone.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default PhonePage;
