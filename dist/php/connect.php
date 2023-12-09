<?php

declare(strict_types=1);
error_reporting(E_ALL);

$db_host = $_POST['db_host'];
$db_port = $_POST['db_port'];
$db_name = $_POST['db_name'];
$db_user = $_POST['db_user'];
$db_pass = $_POST['db_pass'];

if ($db_port == 1433) {
    $driver = 'dblib';
} else if ($db_port == 1521) {
    $driver = 'oci';
} else if ($db_port == 3306) {
    $driver = 'mysql';
} else if ($db_port == 5432) {
    $driver = 'pgsql';
} else {
    //  The port the user submitted that we don't have in our list
    $driver = $db_port;
}

$dsn = "$driver:host={$db_host};dbname={$db_name}";

if(!empty($db_host) && !empty($db_port) && !empty($db_name) && !empty($db_user)) {
    try {
        $conn = new PDO($dsn, $db_user, $db_pass);
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Database Connected!";

        //  Close Connection
        $conn = null;

    } catch (PDOException $e) {
        echo "<br><strong>Connection failed:</strong><br><br>" . $e->getMessage() . "<br><br>";
    }
} else {
    echo '<br>All fields need to be completed.<br><br>A password is not required<br><br>';
}