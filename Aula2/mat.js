function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    var res = document.getElementById("res")
    res.textContent = numero1 + numero2
    return res
}
function Subtração(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    var res = document.getElementById("resu")
    res.textContent = numero3 - numero4
    return res
}
function Multiplicação(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    var res = document.getElementById("resul")
    res.textContent = numero5 * numero6
    return res
}
function Divisão(){
    document.getElementById("n8").style.bolder = "1px solid black"
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    var res = document.getElementById("result")
    if(numero8 !== 0){
        res.textContent = (numero7 / numero8).toFixed(1)
    }else{
        res.innerHTML = "Não é permitido divisão por 0"
        document.getElementById("n8").style.border = "2px solid red"
    }
    return res
}