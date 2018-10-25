
function gerarAposta() {
	var tipoJogo = document.querySelector("#sel1").value;

	var tabela = document.querySelector("#tabela");

	var tr = document.createElement("tr");
	var td1 = document.createElement("td");

	td1.appendChild(document.createTextNode("Jogo " + tipoJogo + " - "));
	if (tipoJogo == "Mega-Sena") {
		td1.append(document.createTextNode(megaSena()));
	} else if (tipoJogo == "Lotofácil") {
		td1.append(document.createTextNode(lotoFacil()));
	} else if (tipoJogo == "Quina") {
		td1.append(document.createTextNode(quina()));
	} else if (tipoJogo == "Lotomania") {
		td1.append(document.createTextNode(lotomania()));
	}

	tr.appendChild(td1);
	tabela.appendChild(tr);

}


function megaSena() {
	var lista = [];
	var num;
	for (var i = 0; i < 6; i++) {
		num = getRandomInt(1, 61);
		if (lista.indexOf(Number(num)) === -1) {
			lista[i] = Number(num);
		} else {
			i--;
		}
	}

	return lista.sort(compararNumeros);
}

function lotoFacil() {
	var lista = [];
	var num;
	for (var i = 0; i < 15; i++) {
		num = getRandomInt(1, 26);
		if (lista.indexOf(Number(num)) === -1) {
			lista[i] = Number(num);
		} else {
			i--;
		}
	}

	return lista.sort(compararNumeros);
}

function quina() {
	var lista = [];
	var num;
	for (var i = 0; i < 5; i++) {
		num = getRandomInt(1, 81);
		if (lista.indexOf(Number(num)) === -1) {
			lista[i] = Number(num);
		} else {
			i--;
		}
	}

	return lista.sort(compararNumeros);
}

function lotomania() {
	var lista = [];
	var num;
	for (var i = 0; i < 50; i++) {
		num = getRandomInt(0, 100);
		if (lista.indexOf(Number(num)) === -1) {
			lista[i] = Number(num);
		} else {
			i--;
		}
	}

	return lista.sort(compararNumeros);
}


function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function compararNumeros(a, b) {
	return a - b;
}
