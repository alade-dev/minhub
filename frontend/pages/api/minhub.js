import { ContractFactory, ethers } from "ethers";
import { Step8 } from "../../components/Steps";

const projectStruct =
  "(string name , string symbol ,uint price, address contractAddress, address owner, string uri)";
const abi = [
  "function addProject(string memory _name, string memory _symbol, uint256 _price, address _contractAddress, string memory _uri )  public payable",
  `function viewProjects() public view returns(${projectStruct}[] memory)`,
  "function noOfProjects() public view returns(uint)",
];

const contractAddr = "0xB1be3AC75e6c4723d5F56A3BaAdd22E9473Fe08d";

const getContract = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum); // A connection to the Ethereum network
    var signer = await provider.getSigner(); // Holds your private key and can sign things
    const Contract = new ethers.Contract(contractAddr, abi, signer);
    return Contract;
  } else {
    alert("No wallet detected");
  }
};

async function viewProject() {
  const minHubContract = await getContract();
  var projects = await minHubContract.viewProjects();
  for (let i = 0; i < projects.length; i++) {
    console.log(projects[i]);
  }
  return projects;
};

export async function addProject(name, symbol, price, uri) {
  const minHubContract = await getContract();
  var tx = await minHubContract.addProject(
    name,
    symbol,
    price,
    contractAddr,
    uri,
    {"value": 10000000000000000000n}
  );
  await tx.wait();
}

{
  /* <Step8 viewProjects={viewProjects} />; */
}

const noOfProjects = async () => {
  const minHubContract = await getContract();
  count = await minHubContract.noOfProjects();
  console.log(count);
  return count;
};
