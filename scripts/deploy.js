const { ethers } = require("hardhat");

async function main() {
  // Get the account that will deploy the contract
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Get the contract factory for the Lock contract
  const Lock = await ethers.getContractFactory("Lock");

  // Set a future unlockTime (example: 1 hour from now)
  const unlockTime = Math.floor(Date.now() / 1000) + 3600;  // Current time + 1 hour

  // Deploy the contract with the unlockTime argument
  const lock = await Lock.deploy(unlockTime, { value: ethers.utils.parseEther(".001") }); // Sending 1 ETH

  console.log("Lock contract deployed to:", lock.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
