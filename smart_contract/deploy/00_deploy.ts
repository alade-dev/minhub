import { ethers } from "hardhat";
import { MinHub__factory } from "../typechain-types";

async function main() {
  const accounts = await ethers.getSigners();
  const deployer = accounts;
  const contractFactory = new MinHub__factory(deployer[0]);
  const contract = await contractFactory.deploy(
    "Name",
    "Symbol",
    "https://",
    "https://"
  );
  await contract.deployed();
  console.log(`MinHub contract was deployed at address ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
