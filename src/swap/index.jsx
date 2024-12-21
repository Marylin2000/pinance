import React, { useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { currencies } from "../services/currencies";
import piImage from "../assets/pi_logo.png";
import { useExchange } from "../context/ExchangeContext";
import { useReceipt } from "../context/RecieptContext";

const SwapScreen = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const currency = currencies.find((cur) => cur.code === code);
  const [piAmount, setPiAmount] = useState("");
  const [currencyAddress, setCurrencyAddress] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({ piAmount: "", currencyAddress: "" });
  const { selectedExchange } = useExchange();
  const { setReceiptData, transactionDetails } = useReceipt(); // Get the setReceiptData function from context

  const convertedAmount = useMemo(() => {
    if (!piAmount || isNaN(piAmount)) return 0;
    return (piAmount * (currency?.rate || 0)).toFixed(6);
  }, [piAmount, currency]);

  if (!currency) {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-xl font-bold text-red-500">Currency not found</h1>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 rounded-lg bg-indigo-700 text-white"
        >
          Go Back
        </button>
      </div>
    );
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!piAmount || isNaN(piAmount) || piAmount <= 0) {
      newErrors.piAmount = "Please enter a valid Pi amount.";
      isValid = false;
    }
    if (!currencyAddress.trim()) {
      newErrors.currencyAddress = `Please enter a valid ${currency.name} address.`;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSwapClick = () => {
    if (validateForm()) {
      setReceiptData(piAmount, currency.code, currencyAddress, (piAmount*0.003)); // Save currency.code dynamically
      setShowModal(true);
      console.log(transactionDetails)
    }
  };

  const handleModalCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Swap Pi to {currency.name} ({currency.code})
        </h1>

        {/* Pi Amount Input */}
        <div className="mb-4 flex flex-col items-center">
          <div className="flex items-center my-2">
            <img src={piImage} alt="Pi Currency" className="w-10 h-10" />
            <label htmlFor="piAmount" className="block font-semibold text-white ml-2">
              Enter Amount (Pi):
            </label>
          </div>
          <input
            id="piAmount"
            type="number"
            value={piAmount}
            onChange={(e) => setPiAmount(e.target.value)}
            placeholder="Enter Pi amount"
            className="w-full p-3 border rounded-lg bg-gray-700 text-white border-gray-600"
          />
          {errors.piAmount && (
            <p className="text-red-500 text-sm mt-1">{errors.piAmount}</p>
          )}
        </div>

        {/* Currency Address Input */}
        <div className="mb-4 flex flex-col items-center">
          <label htmlFor="currencyAddress" className="block font-semibold text-white">
            Enter {currency.name} ({currency.code}) Address:
          </label>
          <input
            id="currencyAddress"
            type="text"
            value={currencyAddress}
            onChange={(e) => setCurrencyAddress(e.target.value)}
            placeholder={`Enter ${currency.name} address`}
            className="w-full p-3 border rounded-lg bg-gray-700 text-white border-gray-600"
          />
          {errors.currencyAddress && (
            <p className="text-red-500 text-sm mt-1">{errors.currencyAddress}</p>
          )}
        </div>

        {/* Converted Amount */}
        <div className="text-center py-4 rounded-lg bg-gray-700 text-white">
          <h3 className="text-lg font-semibold mb-2">Converted Amount:</h3>
          <div className="flex items-center justify-center">
            <img src={currency.image} alt={currency.name} className="w-8 h-8 mr-2" />
            <p className="text-2xl font-bold">
              {convertedAmount} {currency.code}
            </p>
          </div>
        </div>

        {/* Swap Button */}
        <button
          onClick={handleSwapClick}
          className="mt-4 px-4 py-2 rounded-lg bg-purple-700 border-0 text-white hover:opacity-90"
        >
          Swap
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80">
          <div className="p-8 rounded-lg shadow-lg mx-5 w-full max-w-md bg-gray-800 text-white">
            <h3 className="text-xl font-bold text-center mb-4">Confirm Address</h3>
            <p className="text-center mb-6">Are you sure this is the correct address?</p>
            <p className="text-center font-semibold">{currencyAddress}</p>
            <div className="flex justify-between mt-6">
              <button
                onClick={handleModalCancel}
                className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:opacity-90"
              >
                Cancel
              </button>
              <Link
                to={`/payment/${selectedExchange.id}`}
                className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:opacity-90"
              >
                Confirm
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SwapScreen;
