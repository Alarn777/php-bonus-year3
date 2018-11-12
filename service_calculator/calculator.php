<?php



class DataManipulations {
    public $func;
    public $num1;
    public $num2;
    public $retVal;
    public function checkFunc(){



        if($this->func == 'sum') {
            $this->retVal = $this->sumData($this->num1,$this->num2);
        }
        else if($this->func == 'avg') {
            $this->retVal = $this->avgOnData($this->num1,$this->num2);
        }
        else if($this->func == 'mult') {
            $this->retVal = $this->multData($this->num1,$this->num2);
        }
        else {return print ('Error, no valid function');}


    }


    private function sumData($num1,$num2)
    {
        return $res = $num1 + $num2;
    }
    private function multData($num1,$num2)
    {
        return $res = $num1 * $num2;
    }
    private function avgOnData($num1,$num2)
    {
        return $res = ($num1 + $num2)/2;
    }

    public function setData($num1,$num2,$func){
        $this->num2 = $num2;
        $this->num1 = $num1;
        $this->func = $func;
    }
    public function returnResult(){
        $a = array('retVal'=> $this->retVal);
        header('Content-Type: application/json');
        echo json_encode($a);
    }



}

class Get {
    public $num1;
    public $num2;
    public $func;

    public function checkIfGet(){
        if(isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['func'])){
            $this->num2 = (int)$_GET["num2"];
            $this->num1 = (int)$_GET["num1"];
            $this->func = $_GET["func"];
            return True;
        }
        else
            return False;

    }




}



class Post{
    public $num1;
    public $num2;
    public $func;

    public function checkIfPost(){
        if(isset($_POST['num1']) && isset($_POST['num2']) && isset($_POST['func'])){
            $this->num2 = (int)$_POST["num2"];
            $this->num1 = (int)$_POST["num1"];
            $this->func = $_POST["func"];
            return True;
        }
        else
            return False;

    }

}


class Put {
    public $num1;
    public $num2;
    public $func;

    public function checkIfPut(){
        if(isset($_PUT['num1']) && isset($_PUT['num2']) && isset($_PUT['func'])){
            return True;
        }
        else
            return False;

    }

}

$getvar = new Get();
$postvar = new Post();
$putvar = new Put();
$data = new DataManipulations();
$putvar = new Put();
// if($putvar->checkIfPut())
//     $data->setData($putvar->num1,$putvar->num2,$putvar->func);


if($postvar->checkIfPost()){
    $data->setData($postvar->num1,$postvar->num2,$postvar->func);
}

if($getvar->checkIfGet())
    $data->setData($getvar->num1,$getvar->num2,$getvar->func);


$data->checkFunc();
$data->returnResult();

?>