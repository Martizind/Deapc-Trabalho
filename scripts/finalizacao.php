<?php

    $db = new SQLite3('../banco_de_dados.db');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email1 = $_POST['email1'];
    $cc1 = $_POST['cc1'];
    $formapag1= $_POST['formapag1'];
    $formapag2= $_POST['formapag2'];
    $numerocartao = $_POST['numerocartao'];
    $cvv = $_POST['cvv'];
    $validade = $_POST['validade'];

    echo "<h2>Dados recebidos</h2>";
    echo "Nome: $nome<br>";
    echo "Email: $email1<br>";
    echo "Cartão de cidadão: $cc1<br>";
    echo "Método de pagamento: $formapag1<br>";
    echo "Método de pagamento: $formapag2<br>";
    echo "Número do cartão de crédito: $numerocartao<br>";
    echo "CVV: $cvv<br>";
    echo "Data de validade: $validade<br>";
}
?>
