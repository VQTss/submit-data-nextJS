// src/components/PriceSelection.tsx
"use client";

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import PriceForm from './PriceForm';

const PriceSelection: React.FC = () => {
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelectPrice = (price: string) => {
    setSelectedPrice(price);
    setIsModalVisible(true);
  };

  return (
    <div className="container">
      <h2>Select a Price Plan</h2>
      <div>
        {['Basic', 'Standard', 'Premium'].map((price) => (
          <Button key={price} onClick={() => handleSelectPrice(price)}>
            {price}
          </Button>
        ))}
      </div>
      <Modal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        className="modal"
      >
        <div className="modal-header">
          <h2>Plan: {selectedPrice}</h2>
          <span className="modal-close" onClick={() => setIsModalVisible(false)}>×</span>
        </div>
        {selectedPrice && <PriceForm price={selectedPrice} />}
      </Modal>
    </div>
  );
};

export default PriceSelection;
