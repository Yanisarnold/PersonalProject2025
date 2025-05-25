
const elements = {
  amount: document.getElementById("amount"),
  fromCurrency: document.getElementById("fromCurrency"),
  toCurrency:document.getElementById("toCurrency")
}
  const toCurrency = elements.toCurrency.value || "EUR";
const getAmount = () => {
  return elements.amount.value || "1";
}
const getConverter = (to, from) => {
  const amount = getAmount();
  const fromCurrency = elements.fromCurrency.value || "USD";
  // const toCurrency = elements.toCurrency.value || "EUR";

  const converter = `https://v6.exchangerate-api.com/v6/8ab7dc5d3fd34695d51dc1b9/pair/${toCurrency}/${fromCurrency}/${amount}`;
 
 fetch(converter).then(response => {
 if (!response.ok) {
        // throw error if response is not ok
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // return response.json();
      return response.json();
 }).then(data => {
      //  console.log(data)
   console.log(data.conversion_result)
   elements.toCurrency.value  = data.conversion_result
 }).catch(error => {
    console.error('Error:', error);
      alert('Error converting currency. Please check your inputs and try again.');
 })
}

elements.toCurrency.addEventListener("focusout", () => getConverter("EUR",toCurrency,amount))