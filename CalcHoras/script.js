let hi = document.getElementById("horaInicial");
let mi = document.getElementById("minInicial");
let hf = document.getElementById("horaFinal");
let mf = document.getElementById("minFinal");
let resultado = document.getElementById("resultado")

function soma(){
    let somaHora = Number(hi.value) + Number (hf.value);
    let somaMinuto = Number(mi.value) + Number (mf.value);
    while (somaMinuto > 59){
        somaMinuto -= 60;
        somaHora ++;
    }

    resultado.innerHTML = somaHora + ":" + somaMinuto
}

function sub(){
    let momentoInicial = hi.value*60 + Number(mi.value);
    let momentoFinal = hf.value*60 + Number(mf.value);
    let resultadoHora = 0;
    let resultadoMinuto = momentoInicial - momentoFinal
    if(resultadoMinuto < 0){
        resultadoMinuto *= -1;
    }
    while(resultadoMinuto > 59){
        resultadoMinuto -= 60;
        resultadoHora ++;
    }
    resultado.innerHTML = resultadoHora+":"+resultadoMinuto;
}