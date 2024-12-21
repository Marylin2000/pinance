import React from 'react';
import { Link } from 'react-router-dom';
import pilogo from "../assets/pi_logo.png";
import { exchanges } from '../services/exchange';
import { useExchange } from '../context/ExchangeContext';

function Exchange() {
  const { selectExchange } = useExchange(); // Get the selectExchange function from context

  const handleSelectExchange = (exchange) => {
    selectExchange(exchange); // Select the exchange and update the context
  };

  return (
    <main className="bg-gray-900 min-h-screen flex items-center justify-center py-10">
      <div className="flex flex-col items-center w-full max-w-4xl px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <img src={pilogo} alt="Pi Logo" className="w-24 h-24 mx-auto mb-4 transition-transform transform hover:scale-110" />
          <h3 className=" font-bold text-white text-[20px] mt-3">
            Welcome to the <span className="text-purple-500 text-[20px">PINANCE Exchange</span>
          </h3>
          <p className="text-gray-400 mt-2 text-lg">Select your preferred exchange to continue</p>
        </div>

        {/* Exchange List - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center w-full">
          {exchanges.map((item) => (
            <Link
              key={item.id}
              to="/approved"
              className="group flex flex-col items-center justify-center gap-2 cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg rounded-lg p-4 bg-gray-800 text-white hover:bg-gray-700"
              onClick={() => handleSelectExchange(item)} // Select the exchange on click
            >
              {/* Exchange Logo */}
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transform transition-all">
                <img
                  src={item.image}
                  alt={`${item.label} logo`}
                  className="object-cover w-full h-full bg-white"
                />
              </div>

              {/* Exchange Label */}
              <p className="text-md font-semibold group-hover:text-gray-100">{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Exchange;
