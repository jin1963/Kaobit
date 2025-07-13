let userAddress = "";

document.getElementById("connectButton").addEventListener("click", async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      userAddress = accounts[0];
      document.getElementById("status").innerHTML = `✅ Connected:<br>${userAddress}`;
      await getBalance();
    } catch (error) {
      console.error("User denied connection:", error);
      document.getElementById("status").innerText = "❌ Connection failed.";
    }
  } else {
    alert("⚠️ No Web3 wallet found. Please use Bitget Wallet or MetaMask.");
  }
});

async function getBalance() {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(TOKEN_ABI, CONTRACT_ADDRESS);
  const raw = await contract.methods.balanceOf(userAddress).call();
  const decimals = await contract.methods.decimals().call();
  const balance = raw / (10 ** decimals);
  document.getElementById("balance").innerText = `G3X24 Balance: ${balance}`;
}
