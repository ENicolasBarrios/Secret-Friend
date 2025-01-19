// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  } else {
    amigos.push(amigo);
    mostrarAmigos();
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
  }
}
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}
function sortearAmigo() {
  document.getElementById("listaAmigos").innerHTML = "";
  if (amigos.length !== 0) {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById(
      "resultado"
    ).textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
  }
}
