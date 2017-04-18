var ContractFactory = artifacts.require("./ContractFactory.sol");
var ChildContract = artifacts.require("./ChildContract.sol");

contract('ContractFactory', function(accounts) {
  it("should assert true", function() {
    var contractFactory;
    return ContractFactory.deployed().then(function(instance){
        contractFactory = instance;
        
        return contractFactory.getChildrenCount.call();
    }).then(function(result){
      //console.log(result.toNumber());
      // dumpOwners(contractFactory);
      // lets transfer ownership
      contractFactory.purchase("John Wayne",{value:100, from:accounts[1]});
      contractFactory.purchase("Cindy Smith",{value:100, from:accounts[2]});
    }).then(function(){
      dumpOwners(contractFactory);
      // get the child contract address for John Wayne i.e., index=0
      return contractFactory.getChildContractAddress(0);
    }).then(function(result){
      console.log(result)
      var childContract = ChildContract.at(result);
      return childContract.transferOwnership(accounts[3],"Jake Crown",{from:accounts[1]});
    }).then(function(result){
      dumpOwners(contractFactory);
    });
  });
});

function  dumpOwners(contractFactory){
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
