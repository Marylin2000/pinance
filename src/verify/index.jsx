// import React from 'react'
// import '../../node_modules/font-awesome/css/font-awesome.min.css';
// import "./index.css"
// import pilogo from "../assets/pi_logo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';
// import { datas } from '../services/data';

// function Verify() {
//     return (
//         <div>
//             <div >
//                 <div className="App">
//                     <div className="piscreen">
//                         <div className="pi_sign flex flex-col items-center">
//                             <img src={pilogo} alt="" />
//                             <h3>Welcome to the Pi Browser </h3>
//                         </div>
//                         <div className='lg:flex items-center justify-center'>

//                         <div className="flex flex-wrap lg:grid lg:grid-cols-3 px-3 items-center justify-center ">

//                             {
//                                 datas.map((item, index)=>{

//                                     return(
//                                         <div key={index} className='mx-3'>
                                            

//                                             <a href={item.link} >
//                                         <img src={item.icon}  className='mb-2'/>
//                                     <p className='text-purple-700'>{item.label}</p>
//                                 </a></div>
//                                     )
//                                 })
//                             }
                          
//                         </div >
//                             </div>
//                         <button className="explorebtn">
//                             <FontAwesomeIcon icon={faCircleNotch} />
//                             Explore the Testnet Ecosystem
//                         </button>
//                     </div >
//                 </div >
//             </div >
//         </div >
//     )
// }

// export default Verify