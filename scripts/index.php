<?php
$db = new SQLite3('../banco_de_dados.db');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $locin = htmlspecialchars($_POST['locin']);
    $datin = htmlspecialchars($_POST['datin']);
    $maxhotel = htmlspecialchars($_POST['maxhotel']);
    $npessoas = htmlspecialchars($_POST['npessoas']);
    $locout = htmlspecialchars($_POST['locout']);
    $datout = htmlspecialchars($_POST['datout']);
    $maxviagem = htmlspecialchars($_POST['maxviagem']);

}
?>
