// const contract = require('../contracts_verify.json');
const hre = require('hardhat');

async function main() {
  const { houseMaxToken, buildingMaxToken, ipfs } = hre.network.config;

  console.log('=====================================================================================');
  console.log('VERIFY:');
  console.log('=====================================================================================');

  try {
    await hre.run("verify:verify", {
      address: "0xeC0E2BC58c6E092F363D0a304DB738c9278fd333"
    });
  } catch (e) {
    console.log(e.message);
  }

  try {
    await hre.run("verify:verify", {
      address: "0xAA79247FA7ae348E8F0139F3fB3098A3D02675e9",
      constructorArguments: ["0x84C3AEEbECfDa467ed91e753542607E23987B146", ""],
    });
  } catch (e) {
    console.log(e.message);
  }

  // try {
  //   await hre.run("verify:verify", {
  //     address: '0xe9c17334743b5a9c32190874b34937bd6778bf09',
  //     // constructorArguments: [contract.CASH]
  //   });
  // } catch (e) {
  //   console.log(e.message);
  // }

  // try {
  //   await hre.run("verify:verify", {
  //     address: contract.HouseGame,
  //     // constructorArguments: [contract.CASH, contract.Randomizer, ipfs, houseMaxToken, buildingMaxToken],
  //   });
  // } catch (e) {
  //   console.log(e.message);
  // }

  // try {
  //   await hre.run("verify:verify", {
  //     address: contract.Agent,
  //     // constructorArguments: [contract.HouseGame, contract.CASH, contract.Randomizer],
  //   });
  // } catch (e) {
  //   console.log(e.message);
  // }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
