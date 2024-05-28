
function login() {
    var email2 = document.getElementById("email2");
    var senha2 = document.getElementById("senha2");
    var nome = document.getElementById("nome");
    var cc1 = document.getElementById("cc1");
    var email1 = document.getElementById("email1");
    var senha1 = document.getElementsByName("senha1");

    if (!email.value) {
        alert('Por favor, preencha o email.');
        locin.focus();
        return;
    }
    if (!senha2.value) {
        alert('Por favor, preencha com a sua senha.');
        locout.focus();
        return;
    }
    if (!nome.value) {
        alert('Por favor, preencha com o nome.');
        datin.focus();
        return;
    }
    if (!cc1.value) {
        alert('Por favor, preencha o CArtão de Cidadao');
        datout.focus();
        return;
    }
    if (!email1.value) {
        alert('Por favor, preencha o emial.');
        npessoas.focus();
        return;
    }
    if (!senha1.value) {
        alert('Por favor, crie um senha com 8 caracteres');
        npessoas.focus();
        return;
