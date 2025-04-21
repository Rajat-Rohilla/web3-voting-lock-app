module.exports = {
  solidity: "0.8.28",
  networks: {
    goerli: {
      url: `https://eth-mainnet.g.alchemy.com/v2/U3bRUnBeUygaHFA8xpt3YP74ElBIY84a`,  // Replace with your API key
      accounts: [`0x${process.env.PRIVATE_KEY}`],  // Use an .env file for your private key or directly paste it here
    },
  },
};
