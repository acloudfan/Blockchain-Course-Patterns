pragma solidity ^0.4.4;

/**
 * Implements the registry for address => name mapping
 * 
 **/

contract UserAddressRegistry {

  address   owner;

  mapping(address => bytes32)  addressMap;
  
  address[]   addresses;

  modifier OwnerOnly() {
    if(msg.sender == owner) _;
    else throw;
  }

  function registerName(bytes32 name) returns (bool){
    if(addressMap[msg.sender] == bytes32(0)){
      addresses.push(msg.sender);
    }
    addressMap[msg.sender] = name;
    return true;
  }

  function updateName(address given, bytes32 name) OwnerOnly returns (bool){
    if(addressMap[given] == bytes32(0)) return false;
    addressMap[given] = name;
    return true;
  }

  function  count() constant returns (uint){

    return addresses.length;

  }

  
  function  getNameByIndex(uint index) constant returns (bytes32){
    address addr = addresses[index];
    return addressMap[addr];
  }

  function  getNameByAddress(address addr) constant returns (bytes32){
    return addressMap[addr];
  }
}
