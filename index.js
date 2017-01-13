
//ready event
$(document).ready(function() {

    //array 
    var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148],
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ];

    //for loop for selecting planet and getting value
    for (var i = 0; i < planets.length; i++) {
        $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo("#planet");
    }
    // the [1] grabs the value of the array

    //array finish//

    //button function to calculate and print answer to user//
    $(function() {
        $("#weightbutton").on("click", function() {

            var personWeight = $("#weightlbs").val();

            var yourplanets = $("#planet").val();

            var thetotal = personWeight * yourplanets;

            $("#sentence").text("Your weight is " + Math.round(thetotal) + "lbs");

            console.log(thetotal)
        });
    });

});



