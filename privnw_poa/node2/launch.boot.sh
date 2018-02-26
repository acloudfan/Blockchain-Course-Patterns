# Copy Paste this command in ....../privnw_poa/node1
# Boot node should be running
# This is the sealer node
geth --networkid 1015 --datadir "./data" --bootnodes 'enode://83cab5439021f0dcad5a12faa2c628c212bc072d78d2ebf5dd80c3cdd0d625f262bbac924492f5e0c0ce1140fdbfc569dfa5893615e386395bca2f61f551b722@127.0.0.1:30310'  --port  30304 --ipcdisable --syncmode full --rpc --rpccorsdomain "*" --rpcport 8546 --unlock 5813e7391b56a2e08ce5f6ac069d9eeb45ff84d8 --password password.txt console