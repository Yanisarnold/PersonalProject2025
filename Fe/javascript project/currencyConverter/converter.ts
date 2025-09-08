
const elements  = {
  amount: document.getElementById("amount") as HTMLInputElement,
  toCurrency:document.getElementById("toCurrency") as HTMLInputElement
}

const getAmount = () => {
  return elements.amount.value || "1"; ;
}


const getConverter = () => {
  const amount = getAmount();
  const toCurrency = elements.toCurrency.value || "EUR";
  const [value, currency] = amount.split(" ");

  const converter = `https://v6.exchangerate-api.com/v6/8ab7dc5d3fd34695d51dc1b9/pair/${toCurrency}/${currency.trim()}/${value.trim()}  `;
 
 fetch(converter).then(response => {
 if (!response.ok) {
        // throw error if response is not ok
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
 }).then(data => {
   elements.toCurrency.value  = data.conversion_result
 }).catch(error => {
    console.error('Error:', error);
      alert('Error converting currency. Please check your inputs and try again.');
 })
}

elements.toCurrency?.addEventListener("focusout", () => getConverter());

