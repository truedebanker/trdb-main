import { ConnectWallet } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";
import "./styles/Home.css";
import BaseLogo from "./images/base-logo.png"
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

          <div className="title"><h1>Welcome TrueDeBanker</h1></div>
          <div className="text">Unlock cost-effective EVM transactions for potential airdrops through NFTs. Engage with Web3 marketplaces to enhance your rewards. Join us today for a chance at exclusive 1/1 NFTs and more!</div>

        </div>

      </div>

      <div className="wrapper">
        <div className="title-2"><h2>Start Here</h2></div>
        <div className="collections">
          <div className="divider"></div>
          <div className="collection-name">

          <h3>1.</h3>
          
                <div className="chain-logo">
                  <img src={BaseLogo} alt="baselogo" />
                </div>
             
            <h3>TRDB Base</h3>
          </div>
          
          <div className="col-items">
            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-Base-1.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Base Beggar</p><p>$ Free</p></div>
                <div className="mint-nft">
                  <Web3Button
                  contractAddress={"0x65f8aEEa6fCD2Cbd29DBE0A0F5e8603C63CbA9C6"}
                  action={(contract) => contract.erc721.claim(1)}
                  onSuccess={() => alert("NFT Minted Successfully!")}
                  onError={(err) => alert(err)}
                  className="mint-nft-button"
                  >
                  Mint NFT
                  </Web3Button>
                </div>
              </div>
            </div>

            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-Base-2.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Base Peasant</p><p>$ 0.01</p></div>
                <div className="mint-nft">
                  <Web3Button
                  contractAddress={"0xA6457C0F311f243e690d235Df2Db092e081d522C"}
                  action={(contract) => contract.erc721.claim(1)}
                  onSuccess={() => alert("NFT Minted Successfully!")}
                  onError={(err) => alert(err)}
                  className="mint-nft-button"
                  >
                  Mint NFT
                  </Web3Button>
                </div>
              </div>
            </div>

            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-Base-3.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Base Noble</p><p>$ 0.1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  contractAddress={"0x389b6F223AD37c861ed3e0B65bDE97b37eb411e5"}
                  action={(contract) => contract.erc721.claim(1)}
                  onSuccess={() => alert("NFT Minted Successfully!")}
                  onError={(err) => alert(err)}
                  className="mint-nft-button"
                  >
                  Mint NFT
                  </Web3Button>
                </div>
              </div>
            </div>

            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-Base-4.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Base Aristocrat</p><p>$ 1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  contractAddress={"0xAfDbD6E1654931C8f13E2cf181002f9BbA39ac74"}
                  action={(contract) => contract.erc721.claim(1)}
                  onSuccess={() => alert("NFT Minted Successfully!")}
                  onError={(err) => alert(err)}
                  className="mint-nft-button"
                  >
                  Mint NFT
                  </Web3Button>
                </div>
              </div>
            </div>

            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-Base-5.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Base Royal</p><p>$ 10</p></div>
                <div className="mint-nft">
                  <Web3Button
                  contractAddress={"0x49fABFBCb95C748EB7Ad3d80A255fe17c415C2F7"}
                  action={(contract) => contract.erc721.claim(1)}
                  onSuccess={() => alert("NFT Minted Successfully!")}
                  onError={(err) => alert(err)}
                  className="mint-nft-button"
                  >
                  Mint NFT
                  </Web3Button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
