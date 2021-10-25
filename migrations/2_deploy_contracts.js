const Wolfgang = artifacts.require("Wolfgang");

module.exports = function (deployer) {
  deployer.deploy(Wolfgang, 1000000);
};
