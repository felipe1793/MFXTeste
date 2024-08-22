function processMatrix(matrix) {
    let maiorLinha = 0
    let qtdLinhas = matrix.length
    let resLinha = []
    let resSomaColuna = []
    let diaPrincipal = []
    let diaSecundaria = []

    // Laço que contabiliza a linha com mais colunas
    for (let i = 0; i < matrix.length; i++) {

        if (matrix[i].length > maiorLinha) {
            maiorLinha = matrix[i].length
        }
    }

    // Laço que contabiliza a soma de linhas
    for (let linha = 0; linha < qtdLinhas; linha++) {
        let soma = 0
        for (let coluna = 0; coluna < maiorLinha; coluna++) {
            soma += matrix[linha][coluna]
        }
        resLinha.push(soma)
    }

    // Laço que contabiliza a soma de colunas
    for (let coluna = 0; coluna < maiorLinha; coluna++) {
        let soma = 0
        for (let linha = 0; linha < qtdLinhas; linha++) {
            if (matrix[linha][coluna] === undefined) {
                break
            } else {
                soma += matrix[linha][coluna]
            }
        }
        resSomaColuna.push(soma)
    }

    // Verifica se a matriz é quadrada
    if (qtdLinhas !== maiorLinha) {
        console.log("Como a matriz não quadrada não faz sentido ter diagonalPrincipal e diagonalSecundaria")
    } else {

        // Laço que contabiliza a diagonal principal
        for (let linha = 0; linha < qtdLinhas; linha++) {
            diaPrincipal.push(matrix[linha][linha])
        }

        // Laço que contabiliza a diagonal secundaria
        for (let linha = 0; linha < qtdLinhas; linha++) {
            maiorLinha--
            diaSecundaria.push(matrix[linha][maiorLinha])
        }
    }



    return {
        sumRows: resLinha,
        sumColumns: resSomaColuna,
        diagonalPrincipal: diaPrincipal,
        diagonalSecundaria: diaSecundaria
    };
}
