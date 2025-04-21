const { ethers } = require("hardhat");

async function main() {
  // Get the deployed contract address and ABI
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  
  // Replace with your contract's ABI (the output generated after compilation)
  const contractABI = [
    // ABI of the contract (example)
    "function lock(uint256 _amount) public",
    "function unlock() public",
    "function isLocked() public view returns (bool)"
  ];

  // Connect to the network and get the signer
  const [signer] = await ethers.getSigners();
  console.log("Interacting with the contract using account:", signer.address);

  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  // Example: Call the `isLocked` function to check if the contract is locked
  const isLocked = await contract.isLocked();
  console.log("Is the contract locked?", isLocked);

  // Example: Call the `lock` function (if applicable)
  const amount = ethers.utils.parseEther("1"); // 1 Ether
  const lockTx = await contract.lock(amount);
  console.log("Locking the contract with 1 Ether:", lockTx.hash);
  await lockTx.wait(); // Wait for the transaction to be mined
  console.log("Lock transaction completed!");

  // Example: Call the `unlock` function (if applicable)
  const unlockTx = await contract.unlock();
  console.log("Unlocking the contract:", unlockTx.hash);
  await unlockTx.wait(); // Wait for the transaction to be mined
  console.log("Unlock transaction completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

