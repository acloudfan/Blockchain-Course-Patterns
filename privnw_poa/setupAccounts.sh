geth --datadir ./node1/data  account new

geth --datadir ./node2/data  account new

geth --datadir node1/ init genesis.json
