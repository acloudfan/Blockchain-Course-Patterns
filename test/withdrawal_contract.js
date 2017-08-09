var WithdrawalContract = artifacts.require("./WithdrawalContract.sol");

contract('WithdrawalContract', function(accounts) {

  var  owner   = accounts[0];
  var  payer_1 = accounts[1];
  var  payer_2 = accounts[2];

  it("should assert true", function() {
    var withdrawalContract;

    return WithdrawalContract.deployed().then(function(instance){
      withdrawalContract = instance;
      
      // Payer 1 sends 1 ETH
      withdrawalContract.pay({from:payer_1, value:web3.toWei(1, 'Ether')});

      // Payer 2 sends 1 ETH
      withdrawalContract.pay({from:payer_2, value:web3.toWei(1, 'Ether')});

      // Get Balance of ethers in Withdrawal contract
      return withdrawalContract.getBalance.call();

      //return withdrawalContract.balance();
    }).then(function(result){
      // Expecte to be 2 ETH
      var balance = web3.fromWei(result,"Ether");
      console.log('Balance#1 =',balance.toNumber(), " Ethers")

      // Payer 1 withdraws
      withdrawalContract.withdraw({from:payer_1});

      return withdrawalContract.getBalance.call();

    }).then(function(result){
      // Expecte to be 1 ETH
      var balance = web3.fromWei(result,"Ether");
      console.log('Balance#2=',balance.toNumber(), " Ethers")

      // Payer 2 withdraws
      withdrawalContract.withdraw({from:payer_2});

      return withdrawalContract.getBalance.call();
      
    }).then(function(result){
      // Expect 0 Ether
      var balance = web3.fromWei(result,"Ether");
      console.log('Balance#3=',balance.toNumber(), " Ethers")
    });
  });
});