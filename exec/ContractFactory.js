/**
 * Tests the contract SelfDestruct
 */
var ContractFactory = artifacts.require("./ContractFactory.sol");

module.exports = function() {
    var contractFactory;
    ContractFactory.deployed().then(function(instance){
        contractFactory = instance;
        dumpOwners(contractFactory);
    });
}

function  dumpOwners(contractFactory){
    for(i=0; i < 5; i++){
        contractFactory.getOwnerName.call(i).then(function(result){
            console.log(i,". ", result);
        });
    }

}