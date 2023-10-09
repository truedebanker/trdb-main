import { Web3Button } from "@thirdweb-dev/react";
import "./styles/Home.css";
import ZoraLogo from "./images/zora-logo.png"

export default function Home() {
  return (
    <main className="main">

      <div className="wrapper">
        <div className="collections">
          <div className="divider"></div>
          <div className="collection-name">

          <h3>3.</h3>
          
                <div className="chain-logo">
                  <img src={ZoraLogo} alt="zoralogo" />
                </div>
             
            <h3>TRDB Zora</h3>
          </div>
          
          <div className="col-items">
            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-Zora-1.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Zora Beggar</p><p>$Free</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x282435171dfC76d920d758d7B691168a96DAC9f2"}
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
                <img src="/images/TRDB-Zora-2.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Zora Peasant</p><p>$0.01</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x821B32AC405964959E522d6423cE999203b761C8"}
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
                <img src="/images/TRDB-Zora-3.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Zora Noble</p><p>$0.1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x336f57B7329F6e12777104921934feeCb018546c"}
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
                <img src="/images/TRDB-Zora-4.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Zora Aristocrat</p><p>$1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x38f0C780ea10d155e3eA3d8c6ee582ca8380511D"}
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
                <img src="/images/TRDB-Zora-5.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Zora Royal</p><p>$10</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x0DE1690E766AE3C6bAE1cef29ffD6Df2de89bEBB"}
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