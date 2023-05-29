
const hre = require("hardhat");

async function main() {

  const tracking=await hre.ethers.getContractFactory("Tracking");
  const contract=await tracking.deploy();
  await contract.deployed();
  console.log("Address of contaract:",contract.address);


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//Contract Address 0x980049D06826C92dd23E37f3E4D53c40fc808bf6