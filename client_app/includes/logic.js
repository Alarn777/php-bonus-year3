
window.addEventListener('load', function () {
    document.getElementById('button').onclick = function() {
        var funcVal = "";
        var num1Val = document.getElementById('num1').value;
        var num2Val = document.getElementById('num2').value;
        if(document.getElementById('funcMult').checked) {
            funcVal = "mult";
        }
        if(document.getElementById('funcSum').checked) {
            funcVal = "sum";
        }
        if(document.getElementById('funcAvg').checked) {
            funcVal = "avg";
        }
        $.post("http://localhost:8888/service_calculator/calculator.php",
            {func:funcVal,num1:num1Val,num2:num2Val},
            function( data ) {

                $(".result").append(data.retVal);
                $(".result").
                console.log( "Return data: " + data.retVal);
            });

        if(document.getElementById('funcMult').checked) {
            document.getElementById('funcMult').checked = false;
        }
        if(document.getElementById('funcSum').checked) {
            document.getElementById('funcSum').checked = false;
        }
        if(document.getElementById('funcAvg').checked) {
            document.getElementById('funcAvg').checked = false;
        }



    }


    document.getElementById('clear').onclick = function() {
        var deleteElement = document.getElementById('result');
        if(deleteElement.childNodes[1])
            deleteElement.childNodes[1].remove();
        document.getElementById('num1').value = 0;
        document.getElementById('num2').value = 0;
        if(document.getElementById('funcMult').checked) {
            document.getElementById('funcMult').checked = false;
        }
        if(document.getElementById('funcSum').checked) {
            document.getElementById('funcSum').checked = false;
        }
        if(document.getElementById('funcAvg').checked) {
            document.getElementById('funcAvg').checked = false;
        }
    }



}, false);

