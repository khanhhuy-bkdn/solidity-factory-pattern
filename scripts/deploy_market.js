const hre = require('hardhat');


async function main() {
    // Loading contract factory
    const DigicapMarket = await hre.ethers.getContractFactory("DigicapMarket");
    // Deploying contract
    const digicapMarket = await DigicapMarket.deploy();
    await digicapMarket.deployed();
    console.log('DigicapMarket deployed at:', digicapMarket.address);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


    // npx hardhat run scripts/deploy_market.js --network mumbai
    // npx hardhat verify --network mumbai 0x84C3AEEbECfDa467ed91e753542607E23987B146