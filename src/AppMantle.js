import { Web3Button } from "@thirdweb-dev/react";
import "./styles/Home.css";
import MantleLogo from "./images/mantle-logo.png"

export default function Home() {
  return (
    <main className="main">

      <div className="wrapper">
        <div className="collections">
          <div className="divider"></div>
          <div className="collection-name">

          <h3>2.</h3>
          
                <div className="chain-logo">
                  <img src={MantleLogo} alt="mantlelogo" />
                </div>
             
            <h3>TRDB Mantle</h3>
          </div>
          
          <div className="col-items">
            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-Mantle-1.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Mantle Beggar</p><p>$Free</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x6C5D535E5D8a1d11CDA5f6C7bc88307950243119"}
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
                <img src="/images/TRDB-Mantle-2.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Mantle Peasant</p><p>$0.01</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0xE6e8F80aF37bE31D1F140196eE5208be88F2bd69"}
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
                <img src="/images/TRDB-Mantle-3.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Mantle Noble</p><p>$0.1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0xE1E97Bd5673297a2E94CBa7b3897d134D90346E5"}
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
                <img src="/images/TRDB-Mantle-4.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Mantle Aristocrat</p><p>$1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0xd1506325a4240D70f40Ad17ca1b299847103d1F4"}
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
                <img src="/images/TRDB-Mantle-5.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Mantle Royal</p><p>$10</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x7b8B6cD98E20463c3Ae73BD0f33A191c94b8bA6d"}
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