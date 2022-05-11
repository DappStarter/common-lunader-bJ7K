require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom kiwi forget tell tissue renew stick slow good clog metal ghost'; 
let testAccounts = [
"0x15cfe06bb57d61c8271524127fa65b7f071c873cbf4ac4070ed8318c1a168137",
"0x22c437888973a96569d564feef5696f34ae71ce461a3979f3c85df4b95cc90fb",
"0x4359c9f5ac399108336f97a6f62008f8ad2852491a8dcebd0eda30b07c4e5431",
"0x10eb7423ecd03fc226a6ed17f4fb317fcb248e32c2450923dcd989bddddac27a",
"0xee906cc1aae6390bd724a90b1d3f10582ca3967fc7a1d38c592778d6b31e5a0f",
"0xe23e46ee7ae6819386e5eb05875091224c2fafc14a54ff50198c251a3818b33c",
"0x16d6aa674051bbae37c4c4ec9ea3427b0a7198418fca38835c8abaff1babebc0",
"0xa54ed24b8079b1760fbd8b747dc0081be8a5327e1407d13443f8410699ac09a6",
"0x8bf79c96eb58c2fa00e0ad37fcde37e205415a1f0936e73e639708719d23bc3e",
"0xc2779a1d022ce679fe85a8148b6a00e9fc0bbf0e8563dbc073886d7c5a172a6f"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


