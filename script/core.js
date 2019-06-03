$(document).ready(function () {
    
    $('#show').click(function () 
    { 
    getUsers();      
    //console.log("hola");
    });
    function getUsers() 
    {
        $.ajax({
            type: "GET",
            url: "https://mini-shop-rg.herokuapp.com/products",
            dataType: "json",
            success: function (respuesta) {
                var divListaCatalogo = $('#mostrar')
                var collection= respuesta;
                var newElement="";
                console.log(respuesta);        
            for(var i=0;i<collection.length;i++)
            {
                var user=collection[i];
                //$('#mostrar').append(`<img src=${user.image}>`);
                 
     //newElement += `<img src=${user.image}>`+"<b>"
       //         +user.name+"</b>"+ user.price +"<br><br><hr>";

       newElement += "<table class='fuente'><tbody><tr><td>" +`<img class='fotto' src=${user.image}>`+"</td><td><b>&nbsp;"+ user.name+"</b><br>"+" <b>&nbsp;$"+ user.price+
       "</b></td></tr></tbody></table><br><div class='description fuente'><b class='fuente'>Descripcion:</b></div><div class='texto'><span class='description'>"+user.description+"</span></div><hr>";

                 console.log(user.image);
            }
            divListaCatalogo.html(newElement);
    
            },
    
            error:function(error) {
                alert("Error, porfavor intentalo más tarde");
            },
    
            complete:function(status){
                console.log("catalogo mostrado con exito");
            }
            
    
        });
    }
        
    
    });