$(function(){
    $("#hello").click(function(){
        console.log("Heelo,jQuery");
        $("#name").addClass("display-1");

        $("#photo").attr("src","images/2.jpg")
    });
    $("#getname").click(function(){
        var name =$("#name").html();
        console.log(name);
    })
    $("#setname").click(function(){
      $("#name").html("Fair");
    })
    $("#addbobby").click(function(){
        var newhobby = $("#newhobby").val();
        $("#hobby").append("<li>" + newhobby + "</li>");
        $("#newhobby").val("");
      })
      $("#clear").click(function(){
        $("#hobby").empty("");
      })


});

// function hello(){
//     console.log("Hello,JS");
// }
// function getDOM(){
//    var name = document.getElementById("name").innerHTML;
//    console.log(name);
// }
// function setDOM(){
//     var name = document.getElementById("name").innerHTML = "Fair";
//  }
//  function addhob(){
//     var newhobby = document.getElementById("newhobby").value;
//     console.log(newhobby);
//     document.getElementById("hobby").innerHTML += "<li>" + newhobby +  "</li>"
//  }
//  function clearhobby(){
//     document.getElementById("hobby").innerHTML ="";
//  }