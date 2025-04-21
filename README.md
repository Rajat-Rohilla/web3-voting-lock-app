# 🗳️ Voting Smart Contract (Deployed on Goerli)

This is a basic Web3 voting dApp built using **Solidity** and deployed with **Hardhat**. The contract is deployed on the **Goerli Testnet** and supports fundamental voting operations, ideal for learning and experimenting with smart contract development and Ethereum workflows.

---

## 📦 Project Structure

# 🗳️ Voting Smart Contract (Deployed on Goerli)

This is a basic Web3 voting dApp built using **Solidity** and deployed with **Hardhat**. The contract is deployed on the **Goerli Testnet** and supports fundamental voting operations, ideal for learning and experimenting with smart contract development and Ethereum workflows.

---

## 📦 Project Structure


---

## 🚀 Features

- Create a simple and secure voting contract  
- Register candidates and cast votes  
- Retrieve vote counts  
- Transparent on-chain logic  
- Deployed to Ethereum’s Goerli test network  

---

## 🔧 Prerequisites

Before running the project, make sure you have:

- **Node.js** (v16 or higher)  
- **npm** or **yarn**  
- **Hardhat** (`npm install --save-dev hardhat`)  
- **MetaMask** with Goerli ETH for testing  

---

## 🛠️ Setup & Deployment

```bash
# Clone the repo
git clone https://github.com/Rajat-Rohilla/web3-voting-lock-app.git
cd web3-voting-lock-app

# Install dependencies
npm install

# Compile the contract
npx hardhat compile

# Deploy to Goerli
npx hardhat run scripts/deploy.js --network goerli
