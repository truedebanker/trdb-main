import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import Logo from "./images/logo.svg"

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">

          <div className="logo">
            <img src={Logo} alt="TRDB" />
          </div>

          <div className="connect">
            <ConnectWallet theme="light"
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <div className="welcome">

          <div className="title"><h1>Welcome True DeBankers</h1></div>
          <div className="text">Unlock cost-effective EVM transactions for potential airdrops through NFTs. Engage with Web3 marketplaces to enhance your rewards. Join us today for a chance at exclusive 1/1 NFTs and more!</div>

        </div>

      </div>

      <div className="wrapper">
        <div className="title-2"><h2>Start Here</h2></div>
      </div>

    </main>
  );
}
