import React from 'react';
import Loading from './../Loading/Loader';
import { useEffect, useState } from 'react';
import Hero from '../../components/hero';
import CustomParticles from '../../components/particles';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 9000);
  }, []);

  return (
    <div style={{ background: 'rgb(50, 49, 49, 0.374)' }}>
      {isLoading ? <Loading /> : <Hero />}
      <CustomParticles />
    </div>
  );
};

export default Home;
