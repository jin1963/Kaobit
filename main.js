let web3;
let account;

window.addEventListener("load", async () => {
  if (window.ethereum && window.ethereum.isBitKeep) {
    web3 = new Web3(window.ethereum);

    document.getElementById("connectButton").addEventListener("click", async () => {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        account = accounts[0];
        document.getElementById("status").innerHTML = `✅ Connected:<br>${account}`;
        getTokenBalance();
      } catch (error) {
        console.error("User rejected connection:", error);
        document.getElementById("status").innerHTML = "❌ Connection rejected.";
      }
    });
  } else {
    alert("กรุณาเปิดเว็บไซต์นี้ผ่าน Bitget Wallet เท่านั้น (BitKeep)");
    document.getElementById("status").innerText = "⚠️ Bitget Wallet ไม่ถูกตรวจพบ";
  }
});

async function getTokenBalance() {
  const minABI = [
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function"
    }
  ];

  const contract = new web3.eth.Contract(minABI, TOKEN_ADDRESS);
  try {
    const balance = await contract.methods.balanceOf(account).call();
    const adjusted = balance / Math.pow(10, TOKEN_DECIMALS);
    document.getElementById("balance").innerText = `${TOKEN_SYMBOL} Balance: ${adjusted}`;
  } catch (error) {
    console.error("Error fetching token balance:", error);
    document.getElementById("balance").innerText = `${TOKEN_SYMBOL} Balance: Error`;
  }
}
