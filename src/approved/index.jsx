import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { currencies } from "../services/currencies";
import { useExchange } from "../context/ExchangeContext";
import logo from "../assets/pi_logo.png";

const Approved = () => {
  const navigate = useNavigate();
  const { selectedExchange } = useExchange();
  const [baseCurrency, setBaseCurrency] = useState(currencies[0]);

  const handleCurrencyClick = (code) => {
    const selectedCurrency = currencies.find((currency) => currency.code === code);
    setBaseCurrency(selectedCurrency);
    navigate(`/swap/${code}`);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center transition-colors duration-300 bg-gray-900 text-white`}  
    >
      {/* Header */}
      <header className="w-full max-w-xl p-4 flex justify-between items-center sticky top-0  bg-gray-800 z-10">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-3" />
          <h1 className="text-2xl font-bold">Exchange</h1>
        </div>
      </header>

      {/* Base Currency Information */}
      <section className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-md mt-6">
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt={baseCurrency.name}
            className="w-20 h-20 rounded-full mr-4 shadow-md"
          />
          <div>
            <h2 className="text-lg font-semibold">{baseCurrency.name} ({baseCurrency.code})</h2>
            <p className="text-2xl font-bold text-yellow-400">
              ${baseCurrency.rate.toFixed(2)}
            </p>
          </div>
        </div>
        {selectedExchange && (
          <div className="flex flex-col items-center mt-4">
            <img
              src={selectedExchange.image}
              alt={selectedExchange.label}
              className="w-16 h-16 object-cover rounded-full shadow-md mb-2"
            />
            <p className="text-gray-300">{selectedExchange.label}</p>
          </div>
        )}
      </section>

      {/* Currency Selection Grid */}
      <section className="w-full max-w-xl bg-gray-800 p-6 rounded-lg shadow-md mt-6">
        <h2 className="text-xl font-bold text-white mb-4">Select a Currency</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {currencies.map((currency) => (
            <div
              key={currency.code}
              onClick={() => handleCurrencyClick(currency.code)}
              className="flex items-center p-3 rounded-md bg-gray-700 hover:bg-slate-600 transition-all duration-200 shadow-sm"
            >
              <img
                src={currency.image}
                alt={currency.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <span className="block text-sm font-medium text-white">{currency.name}</span>
                <span className="text-xs text-gray-400">{currency.code}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Approved;
