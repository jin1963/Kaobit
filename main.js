let web3;
let userAccount;

async function connectWallet() {
    if (window.ethereum) {
        try {
            await ethereum.request({ method: "eth_requestAccounts" });
            web3 = new Web3(window.ethereum);
            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];
            document.getElementById("status").innerHTML = "✅ Connected:<br>" + userAccount;
            getTokenBalance();
        } catch (error) {
            document.getElementById("status").innerText = "❌ Connection rejected.";
            console.error(error);
        }
    } else {
        alert("⚠️ Wallet not found. Please install Bitget or MetaMask.");
    }
}

async function getTokenBalance() {
    const contract = new web3.eth.Contract(tokenABI, tokenAddress);
    const balance = await contract.methods.balanceOf(userAccount).call();
    const decimals = await contract.methods.decimals().call();
    const formatted = balance / (10 ** decimals);
    document.getElementById("balance").innerText = `G3X24 Balance:\n${formatted}`;
}

document.getElementById("connectWallet").addEventListener("click", connectWallet);
