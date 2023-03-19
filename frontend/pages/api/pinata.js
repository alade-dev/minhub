// uploads the details to pinata
import { NFTStorage, File } from 'nft.storage'

export default async function uploadNFTData(image, values) {
 const NFT_STORAGE_TOKEN =
   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDdjMTVkRTM4NUU0Mzc1M0RBODNGZUE0NjgzZkZhMzc4RTFjZTUyZjEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2ODk3NjUxMTc3NCwibmFtZSI6IkRvY1QifQ.t7bF1OuxuS6S9QMP_rfl72fYMneOa1jzs-mZhdjEhog';
 const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

 const imageFile = new File(values.images, { type: 'image/png' });
 const metadata = await client.store({
   name: values.name,
   description: values.description,
   website: values.website,
   tokensupply: values.tokensupply,
   token: values.token,
   image: imageFile,
 });

  console.log(metadata);

  if (window.ethereum) {
      try {
          // const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          // console.log("found an account:", accounts[0]);
          // const account = accounts[0];

          // deploying
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          console.log(signer);
          //import nft from "./utils/MinHub.json";
          const minHubContract = new ethers.ContractFactory(nft.abi, nft.object, signer);
          console.log("Created Contract");
          const minHub = await minHubContract.deploy(
            nftName,
            nftSymbol,
            metadata.url,
            metadata.url);
          
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

// returns the cid and metadata url
