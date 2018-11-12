// jQuery.each( [ "put", "delete" ], function( i, method ) {
//     jQuery[ method ] = function( url, data, callback, type ) {
//       if ( jQuery.isFunction( data ) ) {
//         type = type || callback;
//         callback = data;
//         data = undefined;
//       }

//       return jQuery.ajax({
//         url: url,
//         type: method,
//         dataType: type,
//         data: data,
//         success: callback
//       });
//     };
//   });


window.addEventListener('load', function () {
    document.getElementById('button').onclick = function() {
        var funcVal = "";
        var num1Val = document.getElementById('num1').value;
        var num2Val = document.getElementById('num2').value;
        var num3Val = document.getElementById('num3').value;
        if(document.getElementById('funcMult').checked) {
            funcVal = "mult";
        }
        if(document.getElementById('funcSum').checked) {
            funcVal = "sum";
        }
        if(document.getElementById('funcAvg').checked) {
            funcVal = "avg";
        }
        var deleteElement = document.getElementById('result');
        for (var i = deleteElement.childNodes.length ;deleteElement.childNodes.length > 1;i++)
        {
            deleteElement.childNodes[1].remove()
        }


        if(document.getElementById('put').checked) {
            var dataCombined = "num1=" + num1Val + "&" + "num2=" + num2Val + "&" + "num3=" + num3Val + "&" +"func=" + funcVal;
            console.log(dataCombined);
            $.ajax({
                url: '../service_calculator/calculator.php',
                type: 'PUT',
                data: dataCombined,
                success: function(data) {
                    $(".result").append(data.retVal);
                    console.log( "Return data: " + data.retVal);
                }
            });



            // $.put('../service_calculator/calculator.php',
            // {func:funcVal,num1:num1Val,num2:num2Val,num3:num3Val},
            //  function(data){
            //         c$(".result").append(data.retVal);
            //         console.log( "Return data: " + data.retVal);
            // })
        }
        if(document.getElementById('get').checked) {
            $.get(
                "../service_calculator/calculator.php",
                {func:funcVal,num1:num1Val,num2:num2Val,num3:num3Val},
                function(data) {

                    $(".result").append(data.retVal);
                    console.log( "Return data: " + data.retVal);
                }
            );



        }
        if(document.getElementById('post').checked) {
            $.post("../service_calculator/calculator.php",
                {func:funcVal,num1:num1Val,num2:num2Val,num3:num3Val},
                function( data ) {

                    $(".result").append(data.retVal);
                    console.log( "Return data: " + data.retVal);
                });
        }

        if(document.getElementById('get').checked)
            document.getElementById('get').checked = false;

        if(document.getElementById('put').checked)
            document.getElementById('put').checked = false;

        if(document.getElementById('post').checked)
            document.getElementById('post').checked = false;

        if(document.getElementById('funcMult').checked) {
            document.getElementById('funcMult').checked = false;
        }
        if(document.getElementById('funcSum').checked) {
            document.getElementById('funcSum').checked = false;
        }
        if(document.getElementById('funcAvg').checked) {
            document.getElementById('funcAvg').checked = false;
        }



    };


    document.getElementById('clear').onclick = function() {
        var deleteElement = document.getElementById('result');
        if(deleteElement.childNodes[1])
            deleteElement.childNodes[1].remove();
        document.getElementById('num1').value = 0;
        document.getElementById('num2').value = 0;
        document.getElementById('num3').value = 0;
        if(document.getElementById('funcMult').checked) {
            document.getElementById('funcMult').checked = false;
        }
        if(document.getElementById('funcSum').checked) {
            document.getElementById('funcSum').checked = false;
        }
        if(document.getElementById('funcAvg').checked) {
            document.getElementById('funcAvg').checked = false;
        }
        if(document.getElementById('get').checked)
            document.getElementById('get').checked = false;

        if(document.getElementById('put').checked)
            document.getElementById('put').checked = false;

        if(document.getElementById('post').checked)
            document.getElementById('post').checked = false;

    }



}, false);

