/**
 * Tests the name registry contract
 */
var NameRegistry = artifacts.require("./NameRegistry.sol");

module.exports = function (callback) {

    var nameRegistry;
    NameRegistry.deployed().then(function (instance) {
        nameRegistry = instance;
        //1. Add the name & contract address
        nameRegistry.registerName ("CheckingAccountFactory",generateRandomAddress(), 1);
        nameRegistry.registerName ("SavingAccountFactory", generateRandomAddress(), 1);

        PrintRegistry(nameRegistry);

        //3. Get the value
        return nameRegistry.registerName("CheckingAccountFactory", generateRandomAddress(), 2);
    }).then(function(result){
        PrintRegistry(nameRegistry);
    });
}

function PrintRegistry(nameRegistry) {
    nameRegistry.getContractInfo("CheckingAccountFactory").then(function(result){
        console.log("CheckingAccountFactory", result[0],' version=', result[1].toNumber());
        return nameRegistry.getContractInfo("SavingAccountFactory")
    }).then(function(result){
        console.log("SavingAccountFactory", result[0],' version=', result[1].toNumber());
        console.log('------------------------------------------');
    });
}

// For testing this function generates random 20 byte strings
function generateRandomAddress() {
    var text = "";
    var possible = "0123456789abcde";

    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return '0x'+text;
}