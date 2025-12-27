# Multi-Chain Test Token Deployer

This project is a streamlined Hardhat setup designed to deploy test ERC20 and ERC721 smart contracts across multiple EVM-compatible networks. It is optimized to ensure contracts can be deployed to the same address on different chains by using the same deployer wallet.

## Features

- **Standardized Contracts**: Pre-configured ERC20 and ERC721 contracts based on OpenZeppelin standards.
- **Multi-Chain Support**: Extensive configuration for numerous EVM testnets and mainnets (Mode, Bob, Taiko, Linea, Berachain, etc.).
- **Hardhat Ignition**: Uses Hardhat Ignition for reliable and declarative deployments.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd contract-deployment

2. **Install dependencies:**
   ```bash
   npm install

Configuration

Security is handled via environment variables. You need to provide your wallet's private key. To keep deployed contract address, reach out to team coordinator for the private key.

1. **Create a `.env` file** in the root directory:
   ```bash
   touch .env
   ```

2. **Add your Private Key:**
   Open the `.env` file and add the following line. Replace `YOUR_PRIVATE_KEY_HERE` with your actual account private key.

   ```env
   PRIVATE_KEY=your_private_key_here
   ```

   > **Note:** Ensure this account has sufficient native currency on the networks you intend to deploy to.

## Usage

### 1. Compile Contracts

Ensure your contracts are compiled:

```bash
npx hardhat compile
```

### 2. Deploy Contracts

This project uses **Hardhat Ignition** for deployments.

**To deploy the ERC20 Token:**

```bash
npx hardhat ignition deploy ignition/modules/ERC20.js --network <network_name>
```

**To deploy the ERC721 NFT:**

```bash
npx hardhat ignition deploy ignition/modules/ERC721.js --network <network_name>
```

Replace `<network_name>` with one of the configured networks in `hardhat.config.js` (e.g., `mode_testnet`, `taiko_hekla`).

### Supported Networks

Check `hardhat.config.js` for the full list of configured networks, including:
- Mode (Mainnet & Testnet)
- Bob (Testnet & Sepolia)
- Taiko
- Linea Sepolia
- Berachain
- And many others...

## Project Structure

- `contracts/`: Solidity source files (`ERC20.sol`, `ERC721.sol`).
- `ignition/modules/`: Deployment modules for Hardhat Ignition.
- `hardhat.config.js`: Hardhat configuration and network setup.
