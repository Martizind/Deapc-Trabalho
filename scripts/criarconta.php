<?php
$db = new SQLite3('../banco_de_dados.db');
    
    $nome = isset($_GET['nome']) ? $_GET['nome'] : '';
    $cc = isset($_GET['cc1']) ? $_GET['cc1'] : '';
    $email = isset($_GET['email1']) ? $_GET['email1'] : '';
    $senha = isset($_GET['senha1']) ? $_GET['senha1'] : '';
    $userType = isset($_GET['user']) ? $_GET['user'] : '';

    $query = "SELECT * FROM Perfil WHERE 1=1";
    if ($nome) $query .= " AND Nome LIKE '%$nome%'";    
    if ($cc) $query .= " AND CC LIKE '%$cc%'";
    if ($email) $query .= " AND Email LIKE '%$email%'";
    if ($senha) $query .= " AND Pass LIKE '%$senha%'";
    if ($userType) $query .= " AND  LIKE '%$matricula%'";

    $results = $db->query($query);
?>
