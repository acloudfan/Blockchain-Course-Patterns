# REPLACE THE <<enode>> information from the enode from bootnode process
# Copy this command to integrated terminal to launch node 1
# Node 2

geth --networkid 1015 --datadir "./data" --bootnodes 'enode://f5f9987d60528396da43a07a208215a9791ffd4b88fc992d8caf3e191a27555d555f6d1bcb7f0c9d79d71862a14648533daf858227bcb10ff1cee0402a900715@127.0.0.1:30310'  --port  30304 --ipcdisable --syncmode full console