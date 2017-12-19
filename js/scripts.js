setInterval(function(){
    atualizaTudo();
}, 3000);

//Declaração de variáveis
var dia;
var mes;
var ano4;
var hora;
var min;
var seg;
var str_data;
var str_hora_atual;
var str_hora_early;
var str_hora_late;
var timeNow;
var timeEarly;
var timeLate;
var timeStamp_start;
var timeStamp_now;
var timeStamp_finish;

function calculaValoresHora(){
    var data = new Date();

    dia  = data.getDate();
    mes  = data.getMonth();
    ano4 = data.getFullYear();
    hora = data.getHours();
    min  = data.getMinutes();
    seg  = data.getSeconds();

    str_data = (mes+1) + '/' + dia + '/' + ano4;
    str_hora_atual = hora + ':' + min + ':' + seg;
    str_hora_early = '09:00:00';
    str_hora_late  = '18:00:00';

    timeNow   = str_data + ' ' + str_hora_atual;
    timeEarly = str_data + ' ' + str_hora_early;
    timeLate  = str_data + ' ' + str_hora_late;

    timeStamp_now    = Date.parse(timeNow) - Date.parse(timeEarly);
    timeStamp_finish = Date.parse(timeLate) - Date.parse(timeEarly)
}

function calculaPercentual(timestamp){
    return ((timestamp * 100) / timeStamp_finish);
}

function atualizaProgressBar(percentual){
    var progress_bar = document.getElementById("progressbar");
    progress_bar.style.width = percentual + "%";
    progress_bar.textContent = parseFloat(percentual.toFixed(2)) + "%";
}

function atualizaTudo(){
    calculaValoresHora();
    atualizaProgressBar(calculaPercentual(timeStamp_now));
}