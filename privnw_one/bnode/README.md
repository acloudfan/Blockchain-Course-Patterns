# Run this command to generate the key file
# Script generate.sh
   bootnode -genkey boot.key

# Run this command to launch
# Script launch.sh
   bootnode -nodekey "./boot.key" -addr "127.0.0.1:33333"  -verbosity 9