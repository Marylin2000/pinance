import React from "react";
import Home from "./home";
// import Verify from "./verify";
import Wallet from "./wallet";
import Approved from "./approved";
import Exchange from "./exchange";
import Payment from "./payment";
import SwapScreen from "./swap";
import TransactionConfirmation from "./confirm";
import ReceiptDisplay from "./receipt";

const AppRoutes = () => {
  return [
    {
      path: "/",
      element: <Home />,
      id: 1,
    },
    {
      path: "/swap/:code",
      element: <SwapScreen />,
      id: 1,
    },
    {
      path: "/home",
      element: <Home />,
      id: 2,
    },
    {
      path: "/payment/:id", // Navigation by ID
      element: <Payment />,
      id: 3,
    },
    {
      path: "/wallet",
      element: <Wallet />,
      id: 4,
    },
    {
      path: "/approved",
      element: <Approved />,
      id: 5,
    }, {
      path: "/confirmed",
      element: <TransactionConfirmation />,
      id: 5,
    },
    {
      path: "/receipt",
      element: <ReceiptDisplay />,
      id: 5,
    },
    {
      path: "/exchange",
      element: <Exchange />,
      id: 6,
    },
    // {
    //   path: "/verify",
    //   element: <Verify />,
    //   id: 7,
    // },
  ];
};

export default AppRoutes;
