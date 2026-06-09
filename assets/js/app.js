document
.getElementById("app")
.innerHTML =
"<h2>Sistema carregado</h2>";


async function iniciar(){

const resposta =
await fetch(
"data/catalog.json"
);

const catalogo =
await resposta.json();

document
.getElementById("app")
.innerHTML =

`
<h2>
${catalogo.transtornos[0].nome}
</h2>
`;

}

iniciar();
