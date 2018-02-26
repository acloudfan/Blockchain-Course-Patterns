# Copy Paste this command to launch the bootnode
# Node the Bootnode <<enode>> information as it is needed by the clients

# Setup the address with public IP if you want the Bootnode to be available
# over public internet e.g., AWS

# Verbosity is set high so that you can see the peer connections

bootnode -nodekey "./boot.key" -verbosity 7 -addr "127.0.0.1:30310"
