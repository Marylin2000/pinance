// ReceiptContext.js
import React, { createContext, useState, useContext } from "react";

// Create Context
const ReceiptContext = createContext();

// Create a Provider component
export const ReceiptProvider = ({ children }) => {
  const [transactionDetails, setTransactionDetails] = useState({
    transactionId: "",
    amount: 0,
    currency: "",
    address: "",
    fee: 0,
    date: "",
  });

  const generateTransactionId = () => {
    return "TX-" + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const setReceiptData = (amount, currency, address,fee) => {
    setTransactionDetails({
      transactionId: generateTransactionId(),
      amount,
      currency,
      fee,
      address,
      date: new Date().toLocaleString(),
    });
  };

  return (
    <ReceiptContext.Provider value={{ transactionDetails, setReceiptData }}>
      {children}
    </ReceiptContext.Provider>
  );
};

// CusAs a non-custodial wallet, your passphrase is exclusively accessible to you. Recovery is impossible. Lost your passphrase? You can create a new wallet, but tom hook to use the ReceiptContext
export const useReceipt = () => useContext(ReceiptContext);
