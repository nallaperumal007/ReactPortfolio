import React from 'react';
import './Loading.css';
import loadingLogo from './../../images/loadingLogo.gif';

const Loader = () => {
  return (
    <div className='mainContainer'>
      <div>
        <images src={loadingLogo} alt="logo" width={150} priority />
      </div>
      <div>
          <h1 className='loadingWord'>Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
