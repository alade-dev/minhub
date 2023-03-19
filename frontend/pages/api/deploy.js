import { useState } from "react";
import { ContractFactory, ethers } from "ethers";
import nft from "./utils/MinHub.json";

function deploy() {
const [isConnected, setIsConnected] = useState();
  const [nftAddress, setNftAddress] = useState();
  const [nftName, setNftName] = useState();
  const [nftSymbol, setNftSymbol] = useState();
  const [initBaseURL, setInitBaseURL] = useState();
  const [initNotRevealedUri, setInitNotRevealedUri] = useState();
  const [contract, setContract] = useState();

  const connectWallet = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log({ account: accounts[0] });
      setIsConnected(true);
    } else {
      window.alert("Wallet not found!");
    }
  };

  const createNft = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const factory = new ContractFactory(nft.abi, nft.object, signer);

    // If your contract requires constructor args, you can specify them here
    const contract_new = await factory.deploy(
        nftName,
      nftSymbol,
      initBaseURL,
      initNotRevealedUri
    );
    setContract(contract_new);
    setNftAddress(contract_new.address);
  };
  connectWallet()
  createNft()
  return;
}



//  Deploy function
async function deploy(nft, nftName, nftSymbol, initBaseURL, initNotRevealedUri) {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("found an account:", accounts[0]);
            const account = accounts[0];

            // deploying
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            console.log(signer);
            const minHubContract = new ethers.ContractFactory(nft.abi, nft.object, signer);
            console.log("Created Contract");
            const minHub = await minHubContract.deploy(
              nftName,
              nftSymbol,
              initBaseURL,
              initNotRevealedUri);
            
            console.log("Awaiting deploy");
            await minHub.deployed();
            console.log("Deployed");
            console.log(minHub.address);
            setNftAddress(minHub.address)
           } catch (err) {
            console.log(err);
           }
    } else {
        window.alert("Please connect Metamask")
    }
}


/*
// Testing the mint function

const contractAddr = "NftAddress";
async function mint() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("found an account:", accounts[0]);
            account = accounts[0];

            // interacting
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            console.log(signer);

            const minC = new ethers.Contract(contractAddr, abi, signer);
            const minttx = await minC.mint(2);
            await minttx.wait();
            console.log(minttx);


        } catch (err) {
            console.log(err);
           }

    } else {

    }
}

*/