# 🗳️ Voting Smart Contract (Deployed on Goerli)

This is a basic Web3 voting dApp built with Solidity and deployed using [Hardhat](https://hardhat.org/). The contract is deployed on the Goerli Testnet and supports basic voting mechanisms, ideal for learning and experimenting with smart contract development and deployment workflows.

---

## 📦 Project Structure

voting-contract/ ├── contracts/ # Contains the Solidity smart contract │ └── Voting.sol ├── scripts/ # Deployment scripts using ethers.js │ └── deploy.js ├── test/ # Mocha/Chai-based tests (optional for now) ├── .gitignore ├── hardhat.config.js ├── package.json ├── README.md

---

## 🚀 Features

- Create a simple voting contract
- Register candidates and cast votes
- Retrieve current vote count
- Secure and transparent logic
- Deployed on Ethereum Goerli test network

---

## 🔧 Prerequisites

Make sure you have these installed before proceeding:

- Node.js (v16+)
- npm or yarn
- Hardhat (`npm install --save-dev hardhat`)
- MetaMask with Goerli ETH (for testing)

---

## 🛠️ Setup & Deployment

```bash
# Clone the repo
git clone https://github.com/yourusername/voting-contract.git
cd voting-contract

# Install dependencies
npm install

# Compile the contract
npx hardhat compile

# Deploy to Goerli
npx hardhat run scripts/deploy.js --network goerli
