const textoInicial = document.getElementById("textoInput");
const textFinal = document.getElementById("textoFinal");
const desencriptar = document.getElementById("button__desencriptar");
const copy = document.getElementById("button__copiar");
const munheco = document.getElementById("munheco");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth")
const encriptar = document.getElementById("button__encriptar");


const remplazo = (newvalue) => {
	textFinal.innerHTML = newvalue;
	textFinal.classList.add("ajustar");
	rigth.classList.add("ajuste")
	textoInicial.value = "";
	textoInicial.style.height = "auto"
	textoInicial.placeholder = "Ingrese el texto aquí";
	munheco.classList.add("ocultar");
	textInfo.classList.add("ocultar");
	copy.classList.remove("bn_ocultar");
}

const reiniciar = () => {
	textoInicial.value = "";
	textoInicial.style.height = "auto";
	textFinal.innerHTML = "";
	rigth.classList.remove("ajuste")
	textFinal.classList.remove("ajustar");
	munheco.classList.remove("ocultar");
	textFinal.placeholder = "Ningún mensaje fue encontrado";
	textInfo.classList.remove("ocultar")
	copy.classList.add("bn_ocultar");
	textoInicial.focus();
};

let remplazar = [
	["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"]
];

encriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function encript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][0])) {
					newtext = newtext.replaceAll(remplazar[i][0], remplazar[i][1]);
				};
			};
			return newtext;
		};
		remplazo(encript(texto));
	} else {
		alert("Ingrese texto para encriptar");
		reiniciar();
	};
});

desencriptar.addEventListener('click', () => {

	const texto = textoInicial.value.toLowerCase();

	if (texto != "") {
		function desencript(newtext) {
			for (let i = 0; i < remplazar.length; i++) {
				if (newtext.includes(remplazar[i][1])) {
					newtext = newtext.replaceAll(remplazar[i][1], remplazar[i][0]);
				};
			};
			return newtext;
		};
		remplazo(desencript(texto));
	} else {
		alert("Ingrese texto a desencriptar");
		reiniciar();
	};
});

copy.addEventListener("click", () => {
	let texto = textFinal;
	texto.select();
	document.execCommand('copy');
	//navigator.clipboard.writeText(texto.value);
	//clipboard función no compatible con móviles
	alert("Texto Copiado");
	reset();
});
//auto ajuste de textarea
textoInicial.addEventListener("change", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});
textoInicial.addEventListener("keyup", e => {
	textoInicial.style.height = "auto";
	let scHeight = e.target.scrollHeight;
	textoInicial.style.height = `${scHeight}px`;
});