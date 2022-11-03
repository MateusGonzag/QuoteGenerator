const url = "https://type.fit/api/quotes";
const botaoAnimar = document.getElementById("new-quote");
const caixa = document.querySelector(".ani");

botaoAnimar.addEventListener("click", () => {
  caixa.style.animation = "";
  setTimeout(() => (caixa.style.animation = "deslizar 2s linear"), 5);
});

async function quote() {
  const num = Math.floor(Math.random() * 1643);
  let result = await fetch(url);
  result = await result.json();
  document.getElementById("text").innerHTML = result[num].text;
  if (result[num].author === null) {
    document.getElementById("author").innerHTML = "Autor Desconhecido";
  } else {
    document.getElementById("author").innerHTML = "-" + result[num].author;
  }
}
quote();
