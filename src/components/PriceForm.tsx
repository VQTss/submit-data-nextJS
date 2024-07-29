// src/components/PriceForm.tsx
import React, { useState } from 'react';
import { pricePlans } from '../formFields';
import { log } from 'console';

interface PriceFormProps {
  price: string;
}

const PriceForm: React.FC<PriceFormProps> = ({ price }) => {
  const fields = pricePlans[price] || [];
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Example logic for form submission
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log("Form data", data);
    
    fetch('/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('Success:', result);
        setSuccessMessage('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        setSuccessMessage('There was an error submitting the form.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field, index) => (
        <div key={index} className="mb-4">
          <label htmlFor={field.label} className="block text-sm font-medium text-gray-700">
            {field.label}
          </label>
          <input
            type={field.type}
            id={field.label}
            name={field.label.toLowerCase().replace(' ', '_')}
            required={field.required}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      ))}
      <div className="text-right">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
      {successMessage && (
        <div className="mt-4 p-4 text-green-700 bg-green-100 border border-green-300 rounded-md">
          {successMessage}
        </div>
      )}
    </form>
  );
};

export default PriceForm;
