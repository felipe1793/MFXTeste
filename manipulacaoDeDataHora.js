let primeiro = "20/01/2024"
let segundo = "27/08/2024"

// primeiro = "25/04/2024"
// segundo = "16/05/2024"

// primeiro = "13/07/2024"
// segundo = "10/08/2024"


function handleDateOperations(primeiraData = "00/00/00", segundaData = "00/00/00", dias = 0, formatoData = 0, fusoHorario = 0) {

    // validação de entradas
    if (typeof (primeiraData) !== "string" || typeof (segundaData) !== "string") {
        console.log(`data incorreta. exemplo: "20/01/2024"`)

    }



    if (typeof (dias) !== "number") {
        console.log("dias deve ser um numero!")
    }

    if (typeof (formatoData) !== "number") {
        console.log("formato da data deve ser um numero!")
    }

    if (typeof (fusoHorario) !== "number") {
        console.log("formato do fuso deve ser um numero!")
    }

    // Alterando formato da data
    let data = new Date()
    let listaData = ["pt-br", "de-DE", "ar-EG"]
    if (formatoData !== null) {
        data.toLocaleDateString(listaData[formatoData])
    }

    // Alterando o formato da data e fuso horario
    listaFuso = ["America/Sao_Paulo", "Europe/Berlin", "Egypt"]
    if (fusoHorario !== null) {
        data.toLocaleDateString(listaData[formatoData], listaFuso[fusoHorario])
    }

    if (primeiraData === null) {
        primeiraData = "00/00/00"
    }
    if (segundaData === null) {
        segundaData = "00/00/00"
    }


    let infoPrimeiraData = primeiraData.split("/")
    let infoSegundaData = segundaData.split("/")
    let primeiraDataDia = Number(infoPrimeiraData[0])
    let primeiraDataMes = Number(infoPrimeiraData[1])
    let primeiraDataAno = Number(infoPrimeiraData[2])
    let segundaDataDia = Number(infoSegundaData[0])
    let segundaDataMes = Number(infoSegundaData[1])
    let segundaDataAno = Number(infoSegundaData[2])
    let mesesTrintaUm = [1, 3, 5, 7, 8, 10, 12]
    let diasPassados = 0

    // validação de datas
    if (primeiraDataDia > 31 || primeiraDataMes > 12) {
        console.log("data invalida")
    }
    if (segundaDataDia > 31 || segundaDataMes > 12) {
        console.log("data invalida")
    }


    // adicionando dias a uma data
    segundaDataDia += dias
    if (mesesTrintaUm.includes(primeiraDataMes)) {
        if (segundaDataDia > 31) {
            segundaDataDia -= 31
        }
    }

    if (segundaDataMes === 2 && segundaDataDia > 29) {
        segundaDataDia -= 29
    }

    if (segundaDataMes === 2 && segundaDataDia > 28) {
        segundaDataDia -= 28
    }

    if (segundaDataDia > 30) {
        segundaDataDia -= 31
    }


    // Verificando se as datas são iguais
    while (primeiraDataDia !== segundaDataDia || primeiraDataMes !== segundaDataMes || primeiraDataAno !== segundaDataAno) {
        // ultimo dia do mês e ultimo dia do ano
        if (primeiraDataDia === 31 && primeiraDataMes === 12) {
            primeiraDataDia = 1
            primeiraDataMes = 1
            primeiraDataAno++
            diasPassados++
        }
        // mês de fevereiro e com ano bissexto
        if (primeiraDataMes === 2 && primeiraDataDia === 28 || primeiraDataMes === 2 && primeiraDataDia === 29) {
            primeiraDataDia = 1
            primeiraDataMes++
            diasPassados++
            // mês com 31 dias
        } else if (mesesTrintaUm.includes(primeiraDataMes)) {
            if (primeiraDataDia === 31) {
                primeiraDataDia = 1
                primeiraDataMes++
                diasPassados++
            } else {
                primeiraDataDia++
                diasPassados++
            }
            // mês com 30 dias
        } else if (primeiraDataDia === 30) {
            primeiraDataDia = 1
            primeiraDataMes++
            diasPassados++
        }
        else {
            primeiraDataDia++
            diasPassados++
        }
    }
    return {
        daysBetween: diasPassados,
        newDate: segundaDataDia.toString(),
        convertedTimeZone: data.toLocaleDateString(listaData[formatoData], listaFuso[fusoHorario]),
        formattedDate: data.toLocaleDateString(listaData[formatoData])
    };
}

handleDateOperations("00/00/00", "00/00/00", 0, 3, 3).convertedTimeZone
