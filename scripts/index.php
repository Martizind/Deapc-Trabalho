<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $locin = htmlspecialchars($_POST['locin']);
    $datin = htmlspecialchars($_POST['datin']);
    $maxhotel = htmlspecialchars($_POST['maxhotel']);
    $npessoas = htmlspecialchars($_POST['npessoas']);
    $locout = htmlspecialchars($_POST['locout']);
    $datout = htmlspecialchars($_POST['datout']);
    $maxviagem = htmlspecialchars($_POST['maxviagem']);

    echo "<h1>Informações da Viagem</h1>";
    echo "<p><strong>Local de partida:</strong> $locin</p>";
    echo "<p><strong>Data de partida:</strong> $datin</p>";
    echo "<p><strong>Preço Máximo (Hotel):</strong> $maxhotel euros</p>";
    echo "<p><strong>Número de Pessoas:</strong> $npessoas</p>";
    echo "<p><strong>Local de chegada:</strong> $locout</p>";
    echo "<p><strong>Data de volta:</strong> $datout</p>";
    echo "<p><strong>Preço Máximo (Viagem):</strong> $maxviagem euros</p>";
}
?>
