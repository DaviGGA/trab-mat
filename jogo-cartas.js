let cartas = []
let naipes = ['♠','♣','♥','♦']

jogador1 = []
jogador2 = []
jogador3 = []
jogador4 = []

mesa = []

for(let i = 1; i < 14; i++) {
    for (let naipe of naipes) {
        const obj = {
            naipe: naipe,
            valor: i
        }
        cartas.push(obj)
        
    }
}

function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	if (k > set.length || k <= 0) {
		return [];
	}
	
	if (k == set.length) {
		return [set];
	}
	
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
	
		head = set.slice(i, i + 1);
	
		tailcombs = k_combinations(set.slice(i + 1), k - 1);

		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

const darMaos = (jogador) => {
    let random = Math.floor(Math.random() * cartas.length);
    jogador.push(cartas[random])
    cartas.splice(random,1)
}

for (let i = 0 ; i < 3; i++) {
    darMaos(jogador1)
    darMaos(jogador2)
    darMaos(jogador3)
    darMaos(jogador4)
    
    if (i <= 1) {
        darMaos(mesa)
    }
    
}



const calculaPontos = (jogador) => {
    let pontos = 0
    let valores = []
    let naipes = [0,0,0,0]
    for( let carta of jogador) {
        valores.push(carta.valor)
        if (carta.naipe === '♥') {
            naipes[0]++
        }
        if (carta.naipe === '♠') {
            naipes[1]++
        }
        if (carta.naipe === '♣') {
            naipes[2]++
        }
        if (carta.naipe === '♦') {
            naipes[3]++
        }
    }
    
    insertionSort(valores)
    
    for (let i = 0; i < 4;i++) {
        if (naipes[i] > 1) {
            pontos += naipes[i]
        }
    }
    
    if (valores[0] === valores[1] - 1) {
        pontos += 2
    }
    
    if (valores[1] === valores[2] - 1) {
        pontos += 2
    }
    
    if (valores[0] === valores[1] - 1 && valores[1] === valores[2] - 1) {
        pontos += 2
    }
    
    return pontos
}

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
    let vmin = i;

    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[vmin]) {
            vmin = j
        }
    }
    let min = arr[vmin]

    arr[vmin] = arr[i]
    arr[i] = min
    
    }
}


let jogador1eMesa = [...jogador1,...mesa]
let jogador2eMesa = [...jogador2,...mesa]
let jogador3eMesa = [...jogador3,...mesa]
let jogador4eMesa = [...jogador4,...mesa]

const melhorCombinacao = (jogadoreMesa) => {
    let melhorPontuacao = 0
    let melhorCombinacao = []
    
    let combinacoes = k_combinations(jogadoreMesa,3)
    
    for (let combinacao of combinacoes) {
        let pontuacao = calculaPontos(combinacao)
        if (pontuacao > melhorPontuacao) {
            melhorPontuacao = pontuacao
            melhorCombinacao = combinacao
        }
    }
    
    return {melhorPontuacao,melhorCombinacao}
}

resultado = []

resultado.push(melhorCombinacao(jogador1eMesa))
resultado.push(melhorCombinacao(jogador2eMesa))
resultado.push(melhorCombinacao(jogador3eMesa))
resultado.push(melhorCombinacao(jogador4eMesa))

resultado.sort((a,b) => b.melhorPontuacao - a.melhorPontuacao)

vencedores = []
for (let i = 0; i < 4; i++) {
    maior = resultado[0].melhorPontuacao
    
    if (resultado[i].melhorPontuacao == maior ) {
        vencedores.push(i+1)
    }
    
    console.log("------------------------------------")
    console.log(`Jogador ${i+1}:`)
    console.log(`Melhor pontuação: ${resultado[i].melhorPontuacao}`)
    console.log(`Melhor combinação:`)
    console.log(resultado[i].melhorCombinacao)
}

console.log("------------------------------------")

if (vencedores.length == 1) {
    console.log(`O vencedor foi o Jogador ${vencedores[0]}`)
    console.log(" ")
    console.log("Parabéns!")
} else {
    console.log("Os vencedores foram:")
    for (let vencedor of vencedores) {
        console.log(`Jogador ${vencedor}`)
    }
    console.log(" ")
    console.log("Parabéns!")
}

console.log("------------------------------------")
console.log("MÃO JOGADOR 1:")
console.log(jogador1)
console.log("------------------------------------")
console.log("MÃO JOGADOR 2:")
console.log(jogador2)
console.log("------------------------------------")
console.log("MÃO JOGADOR 3:")
console.log(jogador3)
console.log("------------------------------------")
console.log("MÃO JOGADOR 1:")
console.log(jogador4)
console.log("------------------------------------")
console.log("MESA:")
console.log(mesa)
