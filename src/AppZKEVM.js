import { Web3Button } from "@thirdweb-dev/react";
import "./styles/Home.css";
import zkEVMLogo from "./images/zkevm-logo.png"

export default function Home() {
  return (
    <main className="main">

      <div className="wrapper">
        <div className="collections">
          <div className="divider"></div>
          <div className="collection-name">

          <h3>5.</h3>
          
                <div className="chain-logo">
                  <img src={zkEVMLogo} alt="zkevmlogo" />
                </div>
             
            <h3>TRDB Polygon zkEVM</h3>
          </div>
          
          <div className="col-items">
            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-ZKEVM-1.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkEVM Beggar</p><p>$Free</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x117f2a838275a1Fe8b4604c20D192E2AF3165561"}
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
                <img src="/images/TRDB-ZKEVM-2.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkEVM Peasant</p><p>$0.01</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0xc891F6a872b35D5E413084AE79680E954A474C08"}
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
                <img src="/images/TRDB-ZKEVM-3.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkEVM Noble</p><p>$0.1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0xE2B3D73952F879298a648394006C270Aaa961A03"}
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
                <img src="/images/TRDB-ZKEVM-4.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkEVM Aristocrat</p><p>$1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x073AEfd375AC9EE3f14621750C585D8951095D1E"}
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
                <img src="/images/TRDB-ZKEVM-5.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>zkEVM Royal</p><p>$10</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x5eA11184A77EDcdbdcAAf77fa061F27423b971F1"}
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