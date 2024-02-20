import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
        <Link to="/">
            <h1>JobBasket</h1>
        </Link>
    </div>
  )
}

export default Navbar