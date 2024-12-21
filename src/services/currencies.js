import bnbImage from '../assets/images/currencies/bnb.png';
import btcImage from '../assets/images/currencies/btc.png';
import dogeImage from '../assets/images/currencies/doge.png';
import ethImage from '../assets/images/currencies/eth.png';
import usdImage from '../assets/images/currencies/usd.png';
import usdtImage from '../assets/images/currencies/usdt.png';
import rippleImage from '../assets/images/currencies/ripple.png';
import solImage from '../assets/images/currencies/sol.png';
import polkaImage from '../assets/images/currencies/polka.png';
import adaImage from '../assets/images/currencies/ada.png';


export const currencies = [
  { code: "USD", name: "United States Dollar", rate: 44.1, image: usdImage },
  { code: "BTC", name: "Bitcoin", rate: 0.001287, image: btcImage }, // 1 BTC ≈ 34,253 USD
  { code: "ETH", name: "Ethereum", rate: 0.0205, image: ethImage }, // 1 ETH ≈ 2,150 USD
  { code: "USDT", name: "Tether", rate: 44.1, image: usdtImage }, // Stablecoin
  { code: "BNB", name: "Binance Coin", rate: 0.154, image: bnbImage }, // 1 BNB ≈ 286 USD
  { code: "ADA", name: "Cardano", rate: 70.43, image: adaImage }, // 1 ADA ≈ 0.626 USD
  { code: "XRP", name: "Ripple", rate: 86.25, image: rippleImage }, // 1 XRP ≈ 0.511 USD
  { code: "SOL", name: "Solana", rate: 1.35, image: solImage }, // 1 SOL ≈ 32.67 USD
  { code: "DOGE", name: "Dogecoin", rate: 692.3, image: dogeImage }, // 1 DOGE ≈ 0.0637 USD
  { code: "DOT", name: "Polkadot", rate: 6.91, image: polkaImage }, // 1 DOT ≈ 6.38 USD
];

  