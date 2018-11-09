<?php
if(isset($_GET['num1'])) // receive data via GET
    $num1 = (int)$_GET["num1"]; // convert String to Integer
else if(isset($_POST['num1'])) // receive data via POST
    $num1 = (int)$_POST["num1"]; // convert String to Integer
else $num1 = 50; // if not set=>default will be 50. BTW, if not set, it will be 0.

if(isset($_GET['num2'])) $num2 = (int)$_GET["num2"];
else if(isset($_POST['num2'])) $num2 = (int)$_POST["num2"];
else $num2 = 50;

if(isset($_GET['num3'])) $num3 = (int)$_GET["num3"];
else if(isset($_POST['num3'])) $num3 = (int)$_POST["num3"];
else $num3 = 50;

if(isset($_GET['num4'])) $num4 = (int)$_GET["num4"];
else if(isset($_POST['num4'])) $num4 = (int)$_POST["num4"];
else $num4 = 50;

$sum = $num1 + $num2 + $num3 + $num4; // calculations
$avg = ($num1 + $num2 + $num3 + $num4) / 4;
$mult = $num1 * $num2 * $num3 * $num4;

$a = array('avg'=>$avg, 'sum'=>$sum, 'mult'=>$mult); // build the results Array

header('Content-Type: application/json'); // set header for json response
echo json_encode($a); // echo the converted JSON Object from the Array

?>




<?php
//$num1 = (int)$_POST['num1'];
//$num2 = (int)$_POST['num2'];
//$num3 = (int)$_POST['num3'];
//$num4 = (int)$_POST['num4'];
//$func = $_POST['func'];
//
//if($func == 'sum') {
//    $res = $num1 + $num2 + $num3 + $num4;
//}
//else if($func == 'avg') {
//    $res = $num1 + $num2 + $num3 + $num4;
//    $res = $res/4;
//}
//else if($func == 'mult') {
//    $res = $num1 * $num2 * $num3 * $num4;
//}
//else {return print ('Error, no valid function');}
//
//$a = array('retVal'=> $res);
//header('Content-Type: application/json');
//echo json_encode($a);
//
//
//?>
