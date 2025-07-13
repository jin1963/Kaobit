// Token G3X24
const tokenAddress = "0x6cfD8Fe423F20F94825b5edB1E94068fBea19dC9";

// Minimal ABI to get ERC20 Token balance
const tokenABI = [
    {
        "constant": true,
        "inputs": [{ "name": "owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "name": "", "type": "uint8" }],
        "type": "function"
    }
];
