const swap = (vetor, p1, p2) => {
    const elemento1 = vetor[p1]
    const elemento2 = vetor[p2]

    vetor[p2] = elemento1
    vetor[p1] = elemento2
}

const particionamento = (vetor, posicaoInicial, posicaoFinal, valorPivo) => {


    let atualInicio = posicaoInicial; //0
    let atualFim = posicaoFinal; //10

    while (atualInicio <= atualFim) {
        while (vetor[atualInicio] < valorPivo) {
            atualInicio++
        }

        while (vetor[atualFim] > valorPivo) {
            atualFim--
        }

        if (atualInicio <= atualFim) {
            swap(vetor, atualInicio, atualFim);
            atualInicio++;
            atualFim--;
        }
    }
    return atualInicio;
}

const shuffle = (vetor, trocas) => {
    for (let indice = 0; indice < trocas; indice++) {
        for (let i = vetor.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            swap(vetor, i, randomIndex)
        }
    }
    return vetor;
}

const bubble_sort = (vetor) => {
    const tamanho = vetor.length;
    for (let i = 0; i < tamanho - 1; i++) {
        for (let j = 0; j < tamanho - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                swap(vetor, j, j + 1)
            }
        }
    }
    return vetor;
}

const selection_sort = (vetor) => {
    for (let i = 0; i < vetor.length - 1; i++) {
        let indiceInicial = i;
        for (let c = i + 1; c < vetor.length; c++) {
            if (vetor[c] < vetor[indiceInicial]) {
                indiceInicial = c;
            }
        }
        if (indiceInicial !== i) {
            swap(vetor, i, indiceInicial);
        }
    }
    return vetor;
}

const quick_sort = (vetor, posicaoInicial, posicaoFinal) => {
    if (vetor.length > 1) {
        let indiceAtual = particionamento(vetor, posicaoInicial, posicaoFinal, vetor[Math.floor((posicaoInicial + posicaoFinal) / 2)]);
        if (posicaoInicial < indiceAtual - 1) {
            quick_sort(vetor, posicaoInicial, indiceAtual - 1);
        }
        if (indiceAtual < posicaoFinal) {
            quick_sort(vetor, indiceAtual, posicaoFinal);
        }
    }
    return vetor
}


let vetorTeste = [4, 1, 7, 2, 4]
console.log(bubble_sort(vetorTeste))




