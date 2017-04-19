/**
 * Tests the contract SelfDestruct
 */
var SelfDestruct = artifacts.require("./SelfDestruct.sol");

module.exports = function(callback) {
    
    var  selfDestruct;
    //1. Get the deployed contract instance
    return SelfDestruct.deployed().then(function(instance){
        selfDestruct = instance;  
        //2. Set the value
        selfDestruct.setValue("Some Value");
        //3. Get the value
        return selfDestruct.someValue.call(); 
    }).then(function(result){
        //4. Print the received value to console
        console.log("Value=", result);
        //5. Call kill
        return selfDestruct.killContract();
    }).then(function(result){
        console.log("Contract Destroyed");
        // This call will throw an excepion as contract is destroyed
        selfDestruct.setValue("NEW Value");
        
    });
}


