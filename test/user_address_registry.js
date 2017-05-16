var UserAddressRegistry = artifacts.require("./UserAddressRegistry.sol");

contract('UserAddressRegistry', function(accounts) {
  it("should assert true", function() {
    var addressRegistry;

    return UserAddressRegistry.deployed().then(function(instance){
      addressRegistry = instance;
      
      addressRegistry.registerName("Cindy Smith",{from:accounts[2]});
      addressRegistry.registerName("George Clooney",{from:accounts[1]});
      addressRegistry.registerName("Jackie Chen",{from:accounts[0]});
      
      return addressRegistry.count.call();

    }).then(function(result){
      console.log("Count=", result.toNumber());
      addressRegistry.updateName(accounts[2],"Cindy Only",{from:accounts[0]});
      
      printNames(addressRegistry, result.toNumber())
      // Lets delete George
      addressRegistry.registerName("",{from:accounts[1]});
      return addressRegistry.count.call();
    }).then(function(result){
      console.log(result)
      printNames(addressRegistry, result.toNumber())
    });
  });
});

function  printNames(addressRegistry, count){
    // var ctr = 0;
    for(i=0; i < count; i++){
        addressRegistry.getByIndex.call(i).then( function(result){
          var name = web3.toAscii(result[1]);
          name = name.replace(/\0/g, '');
          console.log(result[0],'----',name,'---', new Date(result[2].toNumber()*1000));
        });
    }
}