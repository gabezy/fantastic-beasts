export default function initFetchBitcoin() {}

async function fetchBitcoin(url) {
  const btcSpan = document.querySelector("[data-btc]");

  try {
    const btcResponse = await fetch(url);
    const bitcoim = await btcResponse.json();
    const btcPrice = bitcoim.BRL.buy;
    btcSpan.innerText = (1000 / btcPrice).toFixed(4);
  } catch (erro) {
    btcSpan.innerText = 0.0103;
    console.log(erro);
  }
}

fetchBitcoin("https://blockchain.info/ticker");
