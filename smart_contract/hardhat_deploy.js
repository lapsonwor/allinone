const hre = require('hardhat');


async function main() {
  // Loading contract factory
  const lootbox = await hre.ethers.getContractFactory('LootBox');
  // Deploying contract
  // const data = await lootbox.deploy(
  //   "0x0000000000000000000000000000000000000000", 
  //   "0xa555fC018435bef5A13C6c6870a9d4C11DEC329C",
  //   "0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06",
  //   "0xcaf3c3727e033261d383b315559476f48034c13b18f8cafed4d871abe5049186",
  //   "100000000000000000"); //bsctestnet
  // const data = await lootbox.deploy(
  //   "0x0000000000000000000000000000000000000000", 
  //   "0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B",
  //   "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
  //   "0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311",
  //   "100000000000000000"); //rinkeby
    const data = await lootbox.deploy(
      "0x4F5339C9c50d2Af2c24c4723287f9A77D0df224e",
      "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255",
      "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
      "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4",
      "100000000000000"); //mumbai
  await data.deployed();
  console.log('LootBox token deployed to:', data.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // npx hardhat run scripts/deploy-lootbox.js --network bsctestnet
  // npx hardhat verify --network bsctestnet 0x28978BFB2813Ea84a9DC6b76e68294D3Cb1dae37 0x0000000000000000000000000000000000000000 0xa555fC018435bef5A13C6c6870a9d4C11DEC329C 0x84b9B910527Ad5C03A9Ca831909E21e236EA7b06 0xcaf3c3727e033261d383b315559476f48034c13b18f8cafed4d871abe5049186 100000000000000000

  // npx hardhat run scripts/deploy-lootbox.js --network rinkeby
  // npx hardhat verify --network rinkeby 0x28978BFB2813Ea84a9DC6b76e68294D3Cb1dae37 0x0000000000000000000000000000000000000000 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B 0x01BE23585060835E02B77ef475b0Cc51aA1e0709 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311 100000000000000000



  // npx hardhat run scripts/deploy-lootbox.js --network mumbai
  // npx hardhat verify --network mumbai 0x09f9dd166D8CB39e81176B44b63ba73eFD851D4c 0x4F5339C9c50d2Af2c24c4723287f9A77D0df224e 0x8C7382F9D8f56b33781fE506E897a4F1e2d17255 0x326C977E6efc84E512bB9C30f76E30c160eD06FB 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4 100000000000000