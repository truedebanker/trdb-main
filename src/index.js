import React from "react";
import { ZksyncEra } from "@thirdweb-dev/chains";
import { createRoot } from "react-dom/client";
import AppBase from "./AppBase";
import AppZKSynk from "./AppZKSynk";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={"base"}
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppBase />
    </ThirdwebProvider>

    <ThirdwebProvider
      activeChain={ ZksyncEra }
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppZKSynk />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
