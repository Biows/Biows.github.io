function calcular() {
    let n1 = document.getElementById('n1')
    let n2 = document.getElementById('n2')
    let res = document.querySelector('#res')

    function inLength(a, b) {
        if (a.value.length != 0 && b.value.length != 0) {
            return false
        } else {
            return true
        }
    }

    if (inLength(n1, n2)) {
        alert('[erro] Digite os dados corretamente!')
    } else {
        let ss = document.getElementsByName('somsub')
        if (ss[0].checked) {
            let soma = function (a, b) { return a + b }
            res.innerHTML = `A soma entre ${n1.value} e ${n2.value}
         é igual a ${soma(Number(n1.value), Number(n2.value))}`
        } else if (ss[1].checked) {
            let subtracao = function (a, b) { return a - b }
            res.innerHTML = `A diferença entre ${n1.value} e ${n2.value}
             é igual a ${subtracao(Number(n1.value), Number(n2.value))}`
        } else if (ss[2].checked) {
            let multi = function (a, b) { return a * b }
            res.innerHTML = `O produto entre ${n1.value} e ${n2.value}
             é igual a ${multi(Number(n1.value), Number(n2.value))}`
        } else if (n2.value == 0) {
            alert('[Erro] O denominador não pode ser 0 ')
            n2.value = ''
        } else {
            let divisao = function (a, b) { return a / b }
            res.innerHTML = `O quociente entre ${n1.value} e ${n2.value}
             é igual a ${divisao(Number(n1.value), Number(n2.value))}`
        }
    }
}

