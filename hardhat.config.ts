import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.0'
      },
      {
        version: '0.7.0'
      },
      {
        version: '0.7.1'
      },
      {
        version: '0.8.0',
      }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 9999,
        details: {
          yul: false,
          yulDetails: {
            stackAllocation: true,
            optimizerSteps: "dhfoDgvulfnTUtnIf"
          }
        }
      },
    }
  }
};

export default config;
