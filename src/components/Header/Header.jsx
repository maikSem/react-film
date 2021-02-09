import React from 'react';
import Search from "../Search/Search";

const Header = ({text}) => {

  return (
    <header className='header'>
      <h2 className='header-title'>{text}</h2>
      <Search />
    </header>
  )
}

export default Header;