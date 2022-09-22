var VipToken = artifacts.require("./VipToken.sol");
var VipTokenSale = artifacts.require("./VipTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(VipToken, 1000000).then(function () {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(VipTokenSale, VipToken.address, tokenPrice);
  });
};
//
