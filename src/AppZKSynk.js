import { Web3Button } from "@thirdweb-dev/react";
import "./styles/Home.css";
import zkSynkLogo from "./images/zksynk-logo.png"

export default function Home() {
  return (
    <main className="main">

      <div className="wrapper">
        <div className="collections">
          <div className="divider"></div>
          <div className="collection-name">

          <h3>2.</h3>
          
                <div className="chain-logo">
                  <img src={zkSynkLogo} alt="zksynklogo" />
                </div>
             
            <h3>TRDB zkSynk</h3>
          </div>
          
          <div className="col-items">
            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-ZKSynk-1.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkSynk Beggar</p><p>$Free</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
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
                <img src="/images/TRDB-ZKSynk-2.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkSynk Peasant</p><p>$0.01</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
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
                <img src="/images/TRDB-ZKSynk-3.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkSynk Noble</p><p>$0.1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
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
                <img src="/images/TRDB-ZKSynk-4.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkSynk Aristocrat</p><p>$1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
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
                <img src="/images/TRDB-ZKSynk-5.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkSynk Royal</p><p>$10</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
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