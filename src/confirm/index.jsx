import React, { useState, useContext } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useReceipt } from '../context/RecieptContext';
const TransactionConfirmation = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();

  // Get the receipt data from context
  const { transactionDetails } = useReceipt(); // Assuming 'transactionData' holds the necessary data

  const data  = transactionDetails


  const getCurrentDateTime = () => {
    const date = new Date();
    return date.toLocaleString(); // This will return a localized date and time string
  };

  console.log(transactionDetails, getCurrentDateTime)
  

  const handleConfirm = () => {
    setIsConfirmed(true);

    setTimeout(() => {
      navigate('/receipt', { state: data });
    }, 3000);
  };

  const handleCancel = () => {
    setIsConfirmed(false);
    // Navigate back to the exchange page
    navigate('/exchange');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg text-white">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-center text-gray-100 mb-6">
          Confirm Your Transaction
        </h2>

        {/* Transaction Details */}
        <div className="space-y-5">
          {/* Recipient Address */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">Recipient Address</p>
            <div className="bg-gray-700 p-2 rounded-md text-md font-medium text-white truncate w-2/3">
              {data.address}
            </div>
          </div>

          {/* Amount */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">Amount to Send</p>
            <div className="bg-gray-700 p-2 rounded-md text-md font-semibold text-white">
              {data.amount}
            </div>
          </div>

          {/* Transaction Fee */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">Transaction Fee</p>
            <div className="bg-gray-700 p-2 rounded-md text-md font-medium text-white">
              {Math.round(data.fee)}
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">Total Amount</p>
            <div className="bg-gray-700 p-2 rounded-md text-md font-semibold text-white">
              {data.transactionId}
            </div>
          </div>

          {/* Transaction Date */}
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400">Transaction Date</p>
            <div className="bg-gray-700 p-2 rounded-md text-md font-medium text-white">
              {data.date}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 space-y-4">
          {/* Cancel Button */}
          <button
            onClick={handleCancel}
            className="w-full py-3 border-0 rounded-md text-lg font-semibold bg-gray-600 hover:bg-gray-500 text-white flex justify-center items-center space-x-2 transition duration-200"
          >
            <FaTimesCircle className="text-xl" />
            <span>Cancel</span>
          </button>

          {/* Confirm Button */}
          <button
            onClick={handleConfirm}
            className={`w-full py-3 rounded-md border-0 text-lg font-semibold bg-purple-600 hover:bg-purple-500 text-white flex justify-center items-center space-x-2 transition duration-200 ${
              isConfirmed ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isConfirmed}
          >
            {isConfirmed ? (
              <FaCheckCircle className="text-xl animate-spin" />
            ) : (
              <span>Confirm Transaction</span>
            )}
          </button>
        </div>

        {/* Confirmation State */}
        {isConfirmed && (
          <div className="mt-4 text-center text-green-400">
            <p>Your transaction is being processed...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionConfirmation;
