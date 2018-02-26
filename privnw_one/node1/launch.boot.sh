# REPLACE THE <<enode>> information from the enode from bootnode process
# Copy this command to integrated terminal to launch node 1
# Node 1

geth --networkid 1015 --datadir "./data" --bootnodes '<<enode>>'  --port  30303 --ipcdisable --syncmode full console

