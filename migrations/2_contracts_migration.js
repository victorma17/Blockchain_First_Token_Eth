const erc20Token = artifacts.require("./erc20Token.sol");
const SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
    deployer.deploy(erc20Token, 17000, "Viccoin First Token", 18, "VICCOIN");
    deployer.deploy(SupplyChain);
};