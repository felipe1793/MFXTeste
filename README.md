# MFXTeste
## Documentação

### Manipulação de Matrizes com JavaScript
*Execute a função* `processMatrix(matriz)` *no console do seu navegador para recerber a soma das linhas, soma das colunas, diagonal principal e diagonal secundario.*

**Exemplos:**

`processMatrix(matriz).sumRows` <br>
`processMatrix(matriz).sumColumns` <br>
`processMatrix(matriz).diagonalPrincipal` <br>
`processMatrix(matriz).diagonalSecundaria` 

![TesteMFXMatriz](https://github.com/user-attachments/assets/9f2ecdbf-44a6-4a8b-bae0-1b2b9c1776f9)<br>
**Se a matriz não for quadrada essa mensagem será exibida: "Como a matriz não quadrada não faz sentido ter diagonalPrincipal e diagonalSecundaria"**

### Manipulação de Data e Hora com JavaScript
*Execute a função* `handleDateOperations("00/00/00", "00/00/00", 0, 0, 0)` *no console do seu navegador para recerber a diferença entre duas, adicionar dias a uma data, convertar a para outro fuso horario e formatar a data.*

**Exemplos:**

`handleDateOperations("25/04/2024", "16/05/2024",0, 2, 2).daysBetween`
![daysBetweenMfx](https://github.com/user-attachments/assets/bcf040b6-a3a9-4314-960a-5b902c5e0763)<br>
**Não alterar data junto com dias para evitar erro de calculo !**


`handleDateOperations("00/00/00", "16/05/2024",10, 2, 2).newDate`
![newDateMFX](https://github.com/user-attachments/assets/da686e80-a2ff-49e5-8f93-9b9c5069e591)<br>

**Não alterar dias junto com a data para evitar erro de calculo**

`handleDateOperations("00/00/00", "00/00/00",0, 2, 2).convertedTimeZone`
![convertedTimeZoneMFX](https://github.com/user-attachments/assets/798ef0e7-cdb5-4084-84b3-3f36997278f2)

`handleDateOperations("00/00/00", "00/00/00", 0, 1, 1).formattedDate`
![formattedDateMFX](https://github.com/user-attachments/assets/d58b453b-696d-4c23-b7b5-71a13a889117)
