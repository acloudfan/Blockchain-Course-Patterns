pragma solidity ^0.4.4;

/**
 * Implements the registry for address => name mapping
 * This registry pattern contract is used by thedapps.com for personalizing the user experience
 **/

contract UserAddressRegistry {

  address   owner;
  // Manages the mapping between address & name
  mapping(address => bytes32)  addressMap;
  // Manages the list of addresses
  address[]   addresses;

  modifier OwnerOnly() {
    if(msg.sender == owner) _;
    else throw;
  }

  function UserAddressRegistry(){
    owner = msg.sender;
  }

  // Registers the name
  function registerName(bytes32 name) returns (bool){
    if(addressMap[msg.sender] == bytes32(0)){
      addresses.push(msg.sender);
    }
    addressMap[msg.sender] = name;
    return true;
  }

  // Only Owner can update the name 
  function updateName(address given, bytes32 name) OwnerOnly returns (bool){
    if(addressMap[given] == bytes32(0)) return false;
    addressMap[given] = name;
    return true;
  }

  // Returns the count of registered names
  function  count() constant returns (uint){
    return addresses.length;
  }
  
  // Returns the address-name at the specified index
  function  getByIndex(uint index) constant returns (address, bytes32){
    address addr = addresses[index];
    return (addr, addressMap[addr]);
  }

  // Returns the address-name by way of the address
  function  getByAddress(address addr) constant returns (address,bytes32){
    return (addr, addressMap[addr]);
  }
}
