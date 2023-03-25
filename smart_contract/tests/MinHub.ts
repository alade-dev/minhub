import { expect } from "chai";
import { ethers } from "hardhat";
import { MinHub } from "../typechain-types";

describe("HelloWorld", function () {
  let MinHubContract: MinHub;

  beforeEach(async function () {
    const minHubFactory = await ethers.getContractFactory("MinHubs");

    // MinHubContract = (await minHubFactory.deploy()) as MinHub;

    await MinHubContract.deployed();
  });
});
