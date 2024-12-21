// ReceiptPage.js
import React from "react";
import { useReceipt } from "../context/RecieptContext";

const ReceiptPage = () => {
  const { transactionDetails } = useReceipt();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Transaction Receipt</h1>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Transaction ID</span>
            <span>{transactionDetails.transactionId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Amount</span>
            <span>{transactionDetails.amount} Pi</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Currency</span>
            <span>{transactionDetails.currency} ({transactionDetails.currencyCode})</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Address</span>
            <span>{transactionDetails.address}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Date</span>
            <span>{transactionDetails.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
