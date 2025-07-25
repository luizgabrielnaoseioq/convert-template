// Cotacao de moedas do dia.
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

// Obtendo os eventos de formularios.
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result")

// Manipulando o input amount para receber somento numeros.
amount.addEventListener("input", () => {
  const hascharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hascharacterRegex, "");
});

// Captando o evento de submit (enviar) do formulario.
form.onsubmit = () => {
  event.preventDefault();
  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
    default:
      break;
  }
};

// Funcao para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotacao da modeda
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    // Calcula o total
    let total = amount * price

    // Exibe o total
    result.textContent = `${formatCurrencyBRL(total)} Reais`

    // Aplica a classe que exibe o footer para mostrar o resultado.
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    // Remove a classse que exibe o footer.
    footer.classList.remove("show-result");
    alert("Não foi possivel converter, tente novamente mais tarde");
  }
}

// Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value) {
  // Converte numero para utilizar o toLocaleString para formatar no padrao BRL
  return Number(value).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
