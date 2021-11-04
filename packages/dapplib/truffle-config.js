require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember mistake idea clinic off genius'; 
let testAccounts = [
"0x19d7c88c06bb4a78068e65f66bdc6e9b6f7f901d1d0b8d8e1896a33596e97881",
"0x95ee643794c1cc29b53dba66fc1888fcf075a7c34447ddb6eae8b63c57f16702",
"0x0cf78134e3cb1ccec608dd2b76fc562e22d6190963c4e012cd33bc3f3e185122",
"0x6d4762d6256cb57c8f9a9eb05927a81229679a8d2bc55642a4a46f9adb2cf5ce",
"0xbecbec28240534fe8a76b46b7b6e015eefed7adcf2ab425118edc87e8f101b55",
"0x6e1487a62abef061a0961cb678648d6c890f251e019dd4977dd697c30e2b5ce4",
"0x855068e06e54dc0e2fd6c5f19b4328430a49e2bbc38ba794b08f9a5d831f1b57",
"0xd78409da71b2d8c129103eaa039f075ea258f6c31809407d2bf6780e2c9ab5da",
"0xab6654b068a488e8f4755540627f312db8883922f64a0f97df70bbea172db275",
"0xfdf9584ee7f1a34cfdd23e81ce76bb758256231eb4501ca996a6431c5a30eb1f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


