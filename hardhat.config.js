require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    mode: {
      url: "https://mainnet.mode.network",
      chainId: 34443,
      accounts: [process.env.PRIVATE_KEY],
    },
    mode_testnet: {
      url: "https://sepolia.mode.network",
      chainId: 919,
      accounts: [process.env.PRIVATE_KEY],
    },
    bob_testnet: {
      url: "https://testnet.rpc.gobob.xyz",
      chainId: 111,
      accounts: [process.env.PRIVATE_KEY],
    },
    taiko_hekla: {
      url: "https://rpc.hekla.taiko.xyz",
      chainId: 167009,
      accounts: [process.env.PRIVATE_KEY],
    },
    crossfi_testnet: {
      url: "https://rpc.testnet.ms",
      chainId: 4157,
      accounts: [process.env.PRIVATE_KEY],
    },
    cyber_testnet: {
      url: "https://rpc.testnet.cyber.co",
      chainId: 111557560,
      accounts: [process.env.PRIVATE_KEY],
    },
    saakuru: {
      url: "https://rpc.saakuru.network",
      chainId: 7225878,
      accounts: [process.env.PRIVATE_KEY],
    },
    morph_holesky: {
      url: "https://rpc-holesky.morphl2.io",
      chainId: 2810,
      accounts: [process.env.PRIVATE_KEY],
    },
    sei: {
      url: "https://evm-rpc.sei-apis.com",
      chainId: 1329,
      accounts: [process.env.PRIVATE_KEY],
    },
    taiko: {
      url: "https://rpc.mainnet.taiko.xyz",
      chainId: 167000,
      accounts: [process.env.PRIVATE_KEY],
    },
    linea_sepolia: {
      url: "https://rpc.sepolia.linea.build",
      chainId: 59141,
      accounts: [process.env.PRIVATE_KEY],
    },
    aleph_zero_testnet: {
      url: "https://rpc.alephzero-testnet.gelato.digital",
      chainId: 2039,
      accounts: [process.env.PRIVATE_KEY],
    },
    reya: {
      url: "https://rpc.reya.network",
      chainId: 1729,
      accounts: [process.env.PRIVATE_KEY],
    },
    open_campus_codex: {
      url: "https://rpc.open-campus-codex.gelato.digital",
      chainId: 656476,
      accounts: [process.env.PRIVATE_KEY],
    },
    zircuit_testnet: {
      url: "https://zircuit1.p2pify.com",
      chainId: 48899,
      accounts: [process.env.PRIVATE_KEY],
    },
    xai_testnet: {
      url: "https://testnet-v2.xai-chain.net/rpc",
      chainId: 37714555429,
      accounts: [process.env.PRIVATE_KEY],
    },
    xai: {
      url: "https://rpc.ankr.com/xai",
      chainId: 660279,
      accounts: [process.env.PRIVATE_KEY],
    },
    berachain_bartio: {
      url: "https://bartio.rpc.berachain.com",
      chainId: 80084,
      accounts: [process.env.PRIVATE_KEY],
    },
    etherlink_testnet: {
      url: "https://node.ghostnet.etherlink.com",
      chainId: 128123,
      accounts: [process.env.PRIVATE_KEY],
    },
    kava_testnet: {
      url: "https://evm.testnet.kava.io",
      chainId: 2221,
      accounts: [process.env.PRIVATE_KEY],
    },
    kava: {
      url: "https://evm.kava.io",
      chainId: 2222,
      accounts: [process.env.PRIVATE_KEY],
    },
    autonomys_testnet: {
      url: "https://nova-0.gemini-3h.subspace.network/ws",
      chainId: 490000,
      accounts: [process.env.PRIVATE_KEY],
    },
    everclear_sepolia: {
      url: "https://rpc.connext-sepolia.gelato.digital",
      chainId: 6398,
      accounts: [process.env.PRIVATE_KEY],
    },
    aleph_zero_mainnet: {
      url: "https://rpc.alephzero.raas.gelato.cloud",
      chainId: 41455,
      accounts: [process.env.PRIVATE_KEY],
    },
    cronos_zkevm: {
      url: "https://mainnet.zkevm.cronos.org",
      chainId: 388,
      accounts: [process.env.PRIVATE_KEY],
    },
    boba_sepolia: {
      url: "https://sepolia.boba.network",
      chainId: 28882,
      accounts: [process.env.PRIVATE_KEY],
    },
    shape_sepolia: {
      url: "https://sepolia.shape.network",
      chainId: 11011,
      accounts: [process.env.PRIVATE_KEY],
    },
    flow_testnet: {
      url: "https://testnet.evm.nodes.onflow.org",
      chainId: 545,
      accounts: [process.env.PRIVATE_KEY],
    },
    vana_moksha: {
      url: "https://rpc.moksha.vana.org",
      chainId: 14800,
      accounts: [process.env.PRIVATE_KEY],
    },
    inkchain_testnet: {
      url: "https://rpc.moksha.vana.org",
      chainId: 14800,
      accounts: [process.env.PRIVATE_KEY],
    },
    sonenium_minato: {
      url: "https://rpc.minato.soneium.org",
      chainId: 1946,
      accounts: [process.env.PRIVATE_KEY],
    },
    bob_sepolia: {
      url: "https://bob-sepolia.rpc.gobob.xyz",
      chainId: 808813,
      accounts: [process.env.PRIVATE_KEY],
    },
    citrea_testnet: {
      url: "https://rpc.testnet.citrea.xyz/",
      chainId: 5115,
      accounts: [process.env.PRIVATE_KEY],
    },
    flow: {
      url: "https://mainnet.evm.nodes.onflow.org",
      chainId: 747,
      accounts: [process.env.PRIVATE_KEY],
    },
    bob: {
      url: "https://rpc.gobob.xyz",
      chainId: 60808,
      accounts: [process.env.PRIVATE_KEY],
    },
    mantle_sepolia: {
      url: "https://rpc.sepolia.mantle.xyz",
      chainId: 5003,
      accounts: [process.env.PRIVATE_KEY],
    },
    sophon: {
      url: "https://rpc.sophon.xyz",
      chainId: 50104,
      accounts: [process.env.PRIVATE_KEY],
      confirmations: 1,
    },
    nibiru_testnet: {
      url: "https://evm-rpc.testnet-2.nibiru.fi/",
      chainId: 6911,
      accounts: [process.env.PRIVATE_KEY],
    },
    abstract_testnet: {
      url: "https://api.testnet.abs.xyz",
      chainId: 11124,
      accounts: [process.env.PRIVATE_KEY],
    },
    tangible_testnet: {
      url: "https://rpc.unreal-orbit.gelato.digital",
      chainId: 18233,
      accounts: [process.env.PRIVATE_KEY],
    },
    saga_evm: {
      url: "https://sagaevm.jsonrpc.sagarpc.io/",
      chainId: 5464,
      accounts: [process.env.PRIVATE_KEY],
    },
    filecoin: {
      url: "https://rpc.ankr.com/filecoin",
      chainId: 314,
      accounts: [process.env.PRIVATE_KEY],
    },
    berachain_bepolia: {
      url: "https://bepolia.rpc.berachain.com",
      chainId: 80069,
      accounts: [process.env.PRIVATE_KEY],
    },
    dogeos_testnet: {
      url: "https://rpc.testnet.dogeos.com",
      chainId: 6281971,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
