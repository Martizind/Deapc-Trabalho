function login() {
    window.location.href = "./Criar conta login.html";
}

function lista() {
    var locin = document.getElementById("locin");
    var locout = document.getElementById("locout");
    var datin = document.getElementById("datin");
    var datout = document.getElementById("datout");
    var npessoas = document.getElementById("npessoas");
    var maxhotel = document.getElementsByName("maxhotel");
    var maxviagem = document.getElementsByName("maxviagem");

    if (!locin.value) {
        alert('Por favor, preencha o Local de partida.');
        locin.focus();
        return;
    }
    if (!locout.value) {
        alert('Por favor, preencha o Local de chegada.');
        locout.focus();
        return;
    }
    if (!datin.value) {
        alert('Por favor, preencha a Data de partida.');
        datin.focus();
        return;
    }
    if (!datout.value) {
        alert('Por favor, preencha a Data de volta.');
        datout.focus();
        return;
    }
    if (!npessoas.value) {
        alert('Por favor, preencha o Nº de Pessoas.');
        npessoas.focus();
        return;
    }

    alert('Pesquisa realizada com sucesso!');
    window.location.href = "./lista.de.hoteis.html";
}