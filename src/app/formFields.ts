// src/formFields.ts
export interface FormField {
    label: string;
    type: string;
    required: boolean;
  }
  
  export interface PricePlan {
    [key: string]: FormField[];
  }
  
  export const pricePlans: PricePlan = {
    Basic: [
      { label: 'Name', type: 'text', required: true },
      { label: 'Email', type: 'email', required: true },
    ],
    Standard: [
      { label: 'Name', type: 'text', required: true },
      { label: 'Email', type: 'email', required: true },
      { label: 'Phone Number', type: 'tel', required: true },
    ],
    Premium: [
      { label: 'Name', type: 'text', required: true },
      { label: 'Email', type: 'email', required: true },
      { label: 'Phone Number', type: 'tel', required: true },
      { label: 'Company', type: 'text', required: true },
    ],
  };
  