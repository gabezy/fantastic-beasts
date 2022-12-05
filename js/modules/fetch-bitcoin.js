export default function fetchBitcoin(url, targetElement, amount) {
  async function fetchBTC() {
    const btcSpan = document.querySelector(targetElement);
    try {
      // fecth the bitcoin api a& wait the promisse
      // to convert to JSON
      const btcResponse = await fetch(url);
      const bitcoim = await btcResponse.json();
      // get the price in BRL
      const btcPrice = bitcoim.BRL.buy;
      // divide the amout by the current BTC price
      btcSpan.innerText = (amount / btcPrice).toFixed(4);
    } catch (erro) {
      btcSpan.innerText = 0.0103;
      console.log(erro);
    }
  }
  return fetchBTC();
}
