import React, { createContext, useState, useContext } from 'react';

// Create the context
const ExchangeContext = createContext();

// Create a provider component to manage the selected exchange
export const ExchangeProvider = ({ children }) => {
  const [selectedExchange, setSelectedExchange] = useState(null); // Initially no exchange is selected

  const selectExchange = (exchange) => {
    setSelectedExchange(exchange); // Set the selected exchange
  };

  return (
    <ExchangeContext.Provider value={{ selectedExchange, selectExchange }}>
      {children}
    </ExchangeContext.Provider>
  );
};

// Create a custom hook to use the context
export const useExchange = () => {
  return useContext(ExchangeContext);
};
