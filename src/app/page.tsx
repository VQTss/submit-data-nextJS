// src/app/page.tsx
import React from 'react';
import PriceSelection from '../components/PriceSelection';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Our Pricing Page</h1>
      <PriceSelection />
    </div>
  );
};

export default HomePage;
