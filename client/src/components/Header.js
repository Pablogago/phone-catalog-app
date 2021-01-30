import React, { useState, useEffect }  from 'react';
import '../App.css';

 function Header({ title }) {

  return (
    <header>{title}</header>
  );
}

export default Header;