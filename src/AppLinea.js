import { Web3Button } from "@thirdweb-dev/react";
import "./styles/Home.css";
import LineaLogo from "./images/linea-logo.png"

export default function Home() {
  return (
    <main className="main">

      <div className="wrapper">
        <div className="collections">
          <div className="divider"></div>
          <div className="collection-name">

          <h3>4.</h3>
          
                <div className="chain-logo">
                  <img src={LineaLogo} alt="linealogo" />
                </div>
             
            <h3>TRDB Linea</h3>
          </div>
          
          <div className="col-items">
            <div className="col-item">
              <div className="nft-img">
                <img src="/images/TRDB-Linea-1.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Linea Beggar</p><p>$Free</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0xA762A98F0e1e9C9267f82D04e65D4A8B454bC77a"}
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
                <img src="/images/TRDB-Linea-2.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Linea Peasant</p><p>$0.01</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0xBeb52b200a47B7655aA0226E7fae275050517f09"}
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
                <img src="/images/TRDB-Linea-3.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Linea Noble</p><p>$0.1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x7642abED520d99056e52a66375f47Fc0e524A977"}
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
                <img src="/images/TRDB-Linea-4.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Linea Aristocrat</p><p>$1</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0xC6B8d555085FABB488d1665930deE9879e983DAb"}
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
                <img src="/images/TRDB-Linea-5.gif"></img>
              </div>
              <div className="item-info">
                <div className="item-title"><p>Linea Royal</p><p>$10</p></div>
                <div className="mint-nft">
                  <Web3Button
                  theme={"light"}
                  contractAddress={"0x78CC2F617e18d81F3B73D07B4CCCDfbfe814DEbC"}
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