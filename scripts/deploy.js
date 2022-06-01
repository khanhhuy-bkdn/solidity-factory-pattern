const hre = require('hardhat');


async function main() {
    // // // Loading contract factory
    // const MintToken = await hre.ethers.getContractFactory('MintToken');
    // // Deploying contract
    // const token = await MintToken.deploy();
    // await token.deployed();
    // console.log('MintToken deployed at:', token.address);

    // Loading contract factory
    const DigicapNFT = await hre.ethers.getContractFactory("DigicapNFT");
    // Deploying contract
    const digicapNFT = await DigicapNFT.deploy("0x84C3AEEbECfDa467ed91e753542607E23987B146", "");
    await digicapNFT.deployed();
    console.log('DigicapNFT deployed at:', digicapNFT.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


    // npx hardhat run scripts/deploy.js --network mumbai
    // npx hardhat verify --network mumbai 0x84C3AEEbECfDa467ed91e753542607E23987B146
    // npx hardhat verify --network mumbai 0x696c72D66201e385cBCa8E408Df20a1a515495AD 0x84C3AEEbECfDa467ed91e753542607E23987B146 ""