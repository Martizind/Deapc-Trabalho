function homepage() {
    window.location.href = "./index.html";
}

function login() {
    window.location.href = "./Criar conta login.html";
}

function carrinho() {
    window.location.href = "./finalizacao.html";
}

function add() {
    const checkboxes = document.querySelectorAll('.adicionar:checked');
    const carrinho = [];

    checkboxes.forEach(checkbox => {
        const hotelInfo = checkbox.nextElementSibling;
        const hotel = {
            nome: hotelInfo.querySelector('h4').innerText,
            estrelas: hotelInfo.querySelector('h5').innerText,
            localizacao: hotelInfo.querySelector('h6:nth-of-type(1)').innerText,
            instalacoes: hotelInfo.querySelector('h6:nth-of-type(2)').innerText,
            hospitalidade: hotelInfo.querySelector('h6:nth-of-type(3)').innerText,
            descricao: hotelInfo.querySelector('h6:nth-of-type(4)').innerText,
            preco: hotelInfo.querySelector('h6:nth-of-type(5)').innerText
        };
        carrinho.push(hotel);
    });

    alert('Adicionado com sucesso');
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
        return;
    }
    if (!locout.value) {
        alert('Por favor, preencha o Local de chegada.');
        return;
    }
    if (!datin.value) {
        alert('Por favor, preencha a Data de partida.');
        return;
    }
    if (!datout.value) {
        alert('Por favor, preencha a Data de volta.');
        return;
    }
    if (!npessoas.value) {
        alert('Por favor, preencha o Nº de Pessoas.');
        return;
    }

    alert('Pesquisa realizada com sucesso!');
    window.location.href = "./lista.de.hoteis.html";
}

function login2() {
    var email2 = document.getElementById("email2");
    var senha2 = document.getElementById("senha2");

    if (!email2.value) {
        alert('Por favor, preencha o email.');
        email2.focus();
        return;
    }
    if (!email2.value.includes('@') || !email2.value.endsWith('.com')) {
        alert('Por favor, utilize um email válido que contenha "@" e termine com ".com".');
        email2.focus();
        return;
    }
    if (!senha2.value) {
        alert('Por favor, preencha com a sua senha.');
        senha2.focus();
        return;
    }
    window.location.href = "./dadospessoais.html";
}
    

     function criarconta() {
     var nome = document.getElementById("nome");
     var cc1 = document.getElementById("cc1");
     var email1 = document.getElementById("email1");
     var senha1 = document.getElementsByName("senha1");

     if (!nome.value) {
        alert('Por favor, preencha com o nome.');
        nome.focus();
        return;
     }
    if (!cc1.value) {
         alert('Por favor, preencha o Cartão de Cidadao');
        cc1.focus();
         return;
     }
    if (!email1.value) {
         alert('Por favor, preencha o email.');
         email1.focus();
         return;
     }
     if (!email1.value.includes('@') || !email1.value.endsWith('.com')) {
        alert('Por favor, utilize um email válido que contenha "@" e termine com ".com".');
        email2.focus();
        return;
     }
    if (!senha1.value) {
        alert('Por favor, preencha com a sua senha');
         senha1.focus();
        return;
    }
    if (senha1.value.length < 8 || !/[A-Z]/.test(senha1.value) || !/[!@#$%^&*(),.?":{}|<>]/.test(senha1.value)) {
        alert('A senha deve conter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial.');
        senha1.focus();
        return;
    }

    window.location.href = "./dadospessoais.html";
}
