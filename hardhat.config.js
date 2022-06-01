require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-solhint");
require("@nomiclabs/hardhat-etherscan");

require('hardhat-docgen');

require('dotenv').config();


const config = {
  defaultNetwork: "hardhat",
  networks: {
      hardhat: {
          accounts: { count: 100 }
      },
      rinkeby: {
          url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
          accounts: [`${process.env.PRIVATE_KEY}`]
      },
      // ropsten: {
      //     url: `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,
      //     accounts: [`${process.env.PRIVATE_KEY}`],
      //     gas: 8100000,
      //     gasPrice: 8000000000
      // },
      // mainnet: {
      //     url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      //     accounts: [`${process.env.PRIVATE_KEY}`]
      // }

      mumbai: {
          url: `https://matic-mumbai.chainstacklabs.com/`,
          accounts: [`${process.env.PRIVATE_KEY}`]
      },
      bsctestnet: {
          url: `https://data-seed-prebsc-1-s1.binance.org:8545/`,
          accounts: [`${process.env.PRIVATE_KEY}`]
      }
  },
  accounts: {
      count: 100
  },
  etherscan: {
      apiKey: `${process.env.SCAN_KEY}`
  },
  solidity: {
      compilers: [
          {
              version: "0.8.4",
              settings: {
                  optimizer: {
                      enabled: true,
                      runs: 200
                  }
              }
          },
          {
              version: "0.4.22",
              settings: {
                  optimizer: {
                      enabled: true,
                      runs: 200
                  }
              }
          },
      ],
  },
  paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts",
      deploy: 'deploy',
      deployments: 'deployments',
  },
  mocha: {
      timeout: 200000,
      useColors: true,
      reporter: 'mocha-multi-reporters',
      reporterOptions: {
          configFile: './configs/mocha-report.json',
      },
  },
  docgen: {
      path: './docs',
      clear: true,
      runOnCompile: false,
    }
};

module.exports = config;
