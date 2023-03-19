import Caver from 'caver-js'; // or const Caver = require('caver-js')


const caver = new Caver(klaytn);

export default async function Connect() {
  if (window.confirm("Are you sure you want to connect your wallet!!!")) {
    try {
      caver.klay.sendAsync(
        {
          method: "wallet_switchKlaytnChain",
          params: [
            {
              chainId: "0x3e9",
            },
          ],
        },
        (err, result) => console.log(err, result)
      );
      const accounts = await caver.klay.enable();
      const account = accounts[0];
      location.reload();
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await klaytn.request(
            {
              method: "wallet_addKlaytnChain",
              params: [
                {
                  chainId: "0x1",
                  rpcUrls: ["https://..."],
                  chainName: "Klaytn mainnet",
                  nativeCurrency: {
                    name: "KLAYTN",
                    symbol: "KLAY",
                    decimals: 18,
                  },
                  blockExplorerUrls: ["https://..."],
                },
              ],
            },
            (err, result) => console.log(err, result)
          );
        } catch (addError) {
          // handle "add" error
          console.log(addError);
        }
      }
    }
  }
}

//klaytn.on('accountsChanged', handleAccountsChanged);
klaytn.on("accountsChanged", function (accounts) {
  // Time to reload your interface with accounts[0]!
});

function handleAccountsChanged() {
  // Your code
  if (accounts.length === 0) {
    window.alert("Please connect your wallet!!!");
  } else if (accounts[0] !== currentAccount) {
    currentAccount = accounts[0];
  }
}
