const CONTRACT_ADDRESS = "0x6cfD8Fe423F20F94825b5edB1E94068fBea19dC9";

const TOKEN_ABI = [
  {
    "constant": true,
    "inputs": [{"name":"account","type":"address"}],
    "name": "balanceOf",
    "outputs": [{"name":"","type":"uint256"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name":"","type":"uint8"}],
    "type": "function"
  }
];
