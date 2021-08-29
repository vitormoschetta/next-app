export default function convert() {
    var checks = document.getElementsByName('opcao')

    var contador = 0;
    var option = null;

    for (var i = 0; i < checks.length; i++) {
        if (checks[i].checked == true) {
            contador++;
            option = checks[i].value
            break
        }
    }

    if (contador == 0) {
        alert("Selecione uma opção de coversão!")
        return
    }

    ExecuteConversao(option)
}

function ExecuteConversao(option) {
    var texto = document.getElementById("textarea01").value
    var textoConvertido = ""

    switch (option) {
        case "r01":
            textoConvertido = ConverterParaMaiusculo(texto)
            break;
        case "r02":
            textoConvertido = ConverterParaMinusculo(texto)
            break;
        case "r03":
            textoConvertido = PrimeiraLetraPalavrasMaiusculo(texto)
            break;
        case "r04":
            textoConvertido = PrimeiraLetraFrasesMaiusculo(texto)
            break;
        default:
            break;
    }

    document.getElementById("textarea02").innerText = textoConvertido
}


function ConverterParaMaiusculo(texto) { return texto.toUpperCase() }

function ConverterParaMinusculo(texto) { return texto.toLowerCase() }

function PrimeiraLetraPalavrasMaiusculo(texto) { return toPascalCase(texto) }

function PrimeiraLetraFrasesMaiusculo(texto) { return toPascalCasePhrases(texto) }


function toPascalCase(text) {
    text = removerEspacosDuplicados(text)
    var words = text.toLowerCase().split(" ")
    for (var i = 0; i < words.length; i++) {
        var item = words[i]
        if (item === "")
            continue
        words[i] = item[0].toUpperCase() + item.slice(1)
    }
    return words.join(" ")
}

function toPascalCasePhrases(text) {
    text = removerEspacosDuplicados(text)
    var phrases = text.split(".")
    for (var i = 0; i < phrases.length; i++) {
        var phrase = phrases[i]
        if (i == phrases.length - 1) {
            phrase = removerEspacosDuplicados(phrase)
            if (phrase === " ") {
                continue
            }
        }
        if (i == 0) {
            phrases[i] = phrase[0].toUpperCase() + phrase.slice(1)
        }
        else {
            phrases[i] = phrase[1].toUpperCase() + phrase.slice(2)
        }
    }
    return phrases.join(". ")
}


function removerEspacosDuplicados(texto) { return texto.replace(/\s{2,}/g, ' ') }