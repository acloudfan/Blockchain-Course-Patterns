var ContractFactory = artifacts.require("./ContractFactory.sol");

var ChildContract = artifacts.require("./ChildContract.sol");

contract('ContractFactory', function(accounts) {
  it("should assert true", function() {
    var contractFactory;
    var childContract;
    return ContractFactory.deployed().then(function(instance){
        contractFactory = instance;
      // lets transfer ownership
      contractFactory.purchase("John Wayne",{value:100, from:accounts[1]});
      contractFactory.purchase("Cindy Smith",{value:100, from:accounts[2]});
    }).then(function(result){
      printOwners(contractFactory);
      // get the child contract address for John Wayne i.e., index=0
      return contractFactory.getChildContractAddress.call(0);
    }).then(function(result){
      console.log("John Wayne - Asset Address=", result);
      childContract = ChildContract.at(result);
      return childContract.transferOwnership(accounts[3],"Jake Crown",{from:accounts[1]});
    }).then(function(result){
      printOwners(contractFactory);

      // John Wayne tries to sell the asset again
      //return childContract.transferOwnership(accounts[3],"Sue Kenworth",{from:accounts[1]});
    });
  });
});

function  printOwners(contractFactory){
    // var ctr = 0;
    for(i=0; i < 5; i++){
        contractFactory.getInfo(i).then(function(result){
            var name = web3.toAscii(result[2]);
            name = name.replace(/\0/g, '');
            console.log(result[0].toNumber(), '---', result[1],'----' , name);
            // console.log(name);
        });
    }
}
