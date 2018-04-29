pragma solidity ^0.4.4;

contract SelfDestruct {

    address         owner;
    string  public  someValue = "NOT-SET-YET";

    modifier  OwnerOnly {
        if(msg.sender != owner){
            revert();
        } else {
            _;
        }
    }

    // Constructor
    function SelfDestruct() public {
        owner = msg.sender;
    }

    // Sets the storage variable
    function  setValue(string value) public {
        someValue = value;
    }

    // This is where the contract is destroyed
    function  killContract() public OwnerOnly {
        // suicide(owner);
        selfdestruct(owner);
    }

}


