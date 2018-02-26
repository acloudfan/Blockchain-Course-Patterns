# Copy Paste this command in ....../privnw_poa/node1
# Boot node should be running
# This is the sealer node
geth --networkid 1015 --mine --datadir "./data"  --port  30303 --ipcdisable --syncmode full --rpc --rpccorsdomain "*" --rpcport 8545 --unlock bc758cc69671f3bb2a4f0ab9aa3ca233d0074c0a --password password.txt --bootnodes 'enode://83cab5439021f0dcad5a12faa2c628c212bc072d78d2ebf5dd80c3cdd0d625f262bbac924492f5e0c0ce1140fdbfc569dfa5893615e386395bca2f61f551b722@127.0.0.1:30310'  console