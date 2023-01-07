const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "garden inherit fun surface lobster answer make hat nerve dream beauty rebuild";
const infura_key = "f0178077c3874af28a65a5f36f296f2f"
// test wallet not real one
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 7545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/infura_key`
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    rinkby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/infura_key`
        ),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      mumbai: {
        provider: () =>
          new HDWalletProvider(
            mnemonic,
            `https://polygon-mumbai.infura.io/v3/infura_key`
          ),
        network_id: 80001,
        gas: 5500000,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true,
      },
      matic: {
        provider: () =>
          new HDWalletProvider(
            mnemonic,
            `https://polygon-mainnet.infura.io/v3/infura_key`
          ),
        network_id: 137,
        gas: 5500000,
        confirmations: 2,
        timeoutBlocks: 200,
        skipDryRun: true,
      },
    },

  };
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  contracts_build_directory: "./src/contracts/",
  compilers: {
    solc: {
      version: "0.8.1", // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
  // Note: if you migrated your contracts prior to enabling this field in your Truffle project and want
  // those previously migrated contracts available in the .db directory, you will need to run the following:
  // $ truffle migrate --reset --compile-all

  db: {
    enabled: false,
  },
};
