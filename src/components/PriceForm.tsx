// src/components/PriceForm.tsx
import React from 'react';
import { pricePlans } from '../app/formFields';

interface PriceFormProps {
  price: string;
}

const PriceForm: React.FC<PriceFormProps> = ({ price }) => {
  const fields = pricePlans[price] || [];

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <label htmlFor={field.label}>{field.label}</label>
          <input
            type={field.type}
            id={field.label}
            name={field.label.toLowerCase().replace(' ', '_')}
            required={field.required}
          />
        </div>
      ))}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PriceForm;
