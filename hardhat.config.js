require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["b375757cd5526b0514e8f0ee87f66c80bf2ff61f12594a7c301dd3398c023adb"], //Your private key starting with "0x"
    },
  },
};
