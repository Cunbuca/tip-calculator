$('#dinheiro').mask("#.##0,00", {reverse: true});

//capita os dois exibidores
    //exibidor de tip amount /person
const amostra = document.querySelector(".amostra");
    //exibidor total / person
const bmostra = document.querySelector(".bmostra");
//capitar o valor total da conta
const bill = document.getElementById("val");
var biu = Number(bill.value);
//capitar a qunatidade de pessoas
const People = document.getElementsByClassName("peoples");
var peoples = Number(People.value);

var tip = 0;



function Calc(){

    amostra.innerHTML = 5; 
    bmostra[0].innerHTML = tip;
}