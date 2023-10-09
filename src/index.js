import React from "react";
import { ZksyncEra, Zora, Linea, PolygonZkevm, Zetachain } from "@thirdweb-dev/chains";
import { Mantle } from "@thirdweb-dev/chains";
import { createRoot } from "react-dom/client";
import AppHeader from "./AppHeader";
import AppBase from "./AppBase";
/*import AppZKSynk from "./AppZKSynk";*/
import AppMantle from "./AppMantle";
import AppZora from "./AppZora";
import AppLinea from "./AppLinea";
import AppZKEVM from "./AppZKEVM";
/*import AppZetachain from "./AppZetachain";*/
import AppFooter from "./AppFooter";
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
      <AppHeader />
    </ThirdwebProvider>

    <ThirdwebProvider
      activeChain={"base"}
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppBase />
    </ThirdwebProvider>

    {/*<ThirdwebProvider
      activeChain={ ZksyncEra }
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppZKSynk />
</ThirdwebProvider>*/}

    <ThirdwebProvider
      activeChain={ Mantle }
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppMantle />
    </ThirdwebProvider>

    <ThirdwebProvider
      activeChain={ Zora }
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppZora />
    </ThirdwebProvider>

    <ThirdwebProvider
      activeChain={ Linea }
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppLinea />
    </ThirdwebProvider>

    <ThirdwebProvider
      activeChain={ PolygonZkevm }
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppZKEVM />
    </ThirdwebProvider>

    {/*<ThirdwebProvider
      activeChain={ Zetachain }
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <AppZetachain />
    </ThirdwebProvider>*/}

    <AppFooter />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
