// src/components/PriceSelection.tsx
"use client";

import React, { useState } from 'react';
import { Modal } from 'antd';
import PriceForm from './PriceForm';

const PriceSelection: React.FC = () => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelectPrice = (price: string) => {
    setSelectedPrice(price);
    setIsModalVisible(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Welcome to Our Pricing Page</h1>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center py-10">
        <h2 className="text-2xl font-semibold mb-4">Select a Price Plan</h2>
        <div className="flex space-x-4">
          {['Basic', 'Standard', 'Premium'].map((price) => (
            <button
              key={price}
              onClick={() => handleSelectPrice(price)}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
            >
              {price}
            </button>
          ))}
        </div>
      </main>

      <Modal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        className="modal p-6"
      >
        <div className="modal-header flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Plan: {selectedPrice}</h2>
          <button onClick={() => setIsModalVisible(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            ×
          </button>
        </div>
        {selectedPrice && <PriceForm price={selectedPrice} />}
      </Modal>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PriceSelection;
