import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faAngleDown,
  faMagnifyingGlass,
  faHamburger,
  faArrowRight,
  faComputer,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import piphone from "../assets/pi-phone.webp";
import pipic2 from "../assets/pi_pic2.png";
import piad1 from "../assets/pi_adpic1.webp";
import google from "../assets/google_playpic.webp";
import pisign from "../assets/pisign.webp";

import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faSpinner } from "@fortawesome/free-solid-svg-icons/faSpinner";
import { Link } from "react-router-dom";
import { footerLinks } from "../services/footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div className="home">
        <div id="root">
          <div className="App">
          <Navbar />
            <div className="components">
              <div className="banner-write-up">
                <h1>
                  The First Digital Currency You Can Mine On Your&nbsp; Phone
                </h1>
                <p className="text-left font-thin">
                  Start mining Pi cryptocurrency today with our free,
                  energy-light mobile app!{" "}
                </p>
                <br />
          
                  <Link className="rounded-sm border-[#fcb349] py-3 px-2 border" to="/exchange">
                    Payment Method
                    <FontAwesomeIcon className="check" icon={faCheck} />
                  </Link>
            
              </div>
              <div className="banner-pic">
                <img src={piphone} alt="" />
              </div>
            </div>
            <div className="mid-writeup text-lg">
              Mining crypto is hard <br></br>Investing in crypto is risky{" "}
              <br></br>Too many of us are left out of the <br></br>
              cryptocurrency revolution...
            </div>
            <div className="section-two">
              <div className="sect2-write-up">
                <h2>Pi makes crypto mining easy.</h2>
                <p>
                  Breakthrough tech allows you to mine Pi on your phone without
                  draining your battery
                </p>
                <button>
                  Learn The Tech Behind Pi &nbsp;
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
              <div className="sect2-pic">
                <img src={pipic2} alt=""></img>
              </div>
            </div>
            <div className="card-sect">
              <div className="card">
                <div
                  className="card-icon"
                  style={{ color: "rgb(138, 52, 142)", marginBottom: "10%" }}
                >
                  <FontAwesomeIcon icon={faSpinner} />
                </div>
                <h4>Decentralized</h4>
                <p>
                  Secure, Immutable, non-counterfeitable and interoperable
                  digital money.
                </p>
              </div>
              <div className="card">
                <div
                  className="card-icon"
                  style={{ color: " rgb(138, 52, 142)", marginBottom: "10%" }}
                >
                  <FontAwesomeIcon icon={faComputer} />
                </div>
                <h4>Mobile First</h4>
                <p>
                  Works on your mobile phone and does not drain your battery.
                </p>
              </div>
              <div className="card">
                <div
                  className="card-icon"
                  style={{ color: "rgb(138, 52, 142)", marginBottom: "10%" }}
                >
                  <FontAwesomeIcon icon={faGlobe} />
                </div>
                <h4>User Planet Friendly</h4>
                <p>
                  Easy to use, secure at scale, without the massive electrical
                  waste.
                </p>
              </div>
            </div>
            <div className="ad">
              <div className="ad-pic">
                <img src={piad1} alt=""></img>
              </div>
              <div className="adtext">
                <h4>
                  Download the mobile app to start mining today! Join now.
                </h4>
                <p>
                  Keep your money! Mining Pi is free.
                  <br></br>
                  All you need is an invitation from an existing trusted member
                  on the network. If you have an invitation.
                  <br></br>
                  you can download the mobile app below.
                </p>
                <a href="https://play.google.com/store/apps/details?id=com.blockchainvault">
                  <img src={google} alt=""></img>
                </a>
              </div>
            </div>
            <footer className="w-full">
  {footerLinks.map((section, index) => (
    <ul key={index} className={`text-[16px] my-6 ${section.section}`}>
      {section.links.map((link, idx) => (
        <Link
          key={idx}
          className="text-[16px] my-3 text-white"
          to={link.url}
        >
          {link.label}
        </Link>
      ))}
    </ul>
  ))}
  <div className="w-1/2">
    <img src={pisign} alt="Pi Sign" className="w-full object-cover" />
  </div>
</footer>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
