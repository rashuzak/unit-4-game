//This is to prevent any jQuery code from running before the document is finished loading (is ready).

$(document).ready(function () {

    var
        crystals = ["assets/images/th (1).jpeg", "assets/images/th (4).jpeg", "assets/images/th (3).jpeg", "assets/images/th.jpeg"];

    var wins = 0;
    var lose = 0;
    var counter = 0;

    // The computer generates a numbre from 19 to 120 

    var computerNumber = Math.floor((Math.random() * 101) + 19);

    $("#targetNumber").text(computerNumber);

    // Restart the game: changing the targetNumber and four crystalNum

    function restart() {
        computerNumber = Math.floor((Math.random() * 101) + 19);
        console.log(computerNumber);
        $("#targetNumber").text(computerNumber);

        // here you make a new counts value but never put it anywhere
        crystalNum = (Math.floor(Math.random() * 11) + 1);
        counter = 0;
        $("#scores").text(counter);
    }

    // Next we create a for loop to create crystals and give them hidden values

    for (var i = 0; i < crystals.length; i++) {
        var crystalNum = Math.floor(Math.random() * 11) + 1;

        // For each iteration, we will create an imageCrystal

        var imagecrystal = $("<img>");

        // Each imageCrystal will be given a src link to the crystal image

        imagecrystal.attr("src", crystals[i]);


        // Each crystal will be given the class ".crystal-image". (for css)

        imagecrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image

        // imagecrystal.attr("src", crystals[i]);

        // Each imageCrystal will be given a data attribute called data-crystalValue.

        imagecrystal.attr("data-crystalvalue", crystalNum);


        // Each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystal").append(imagecrystal);
    }

    // Our click event applies to every single crystal on the page. 

    $(".crystal-image").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(computerNumber);

        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.

        counter += crystalValue;
        console.log(counter);
        $("#scores").text(counter);

        if (counter === computerNumber) {
            wins++;
            $("#wins").text(wins);
            restart();
        }
        else if (counter >= computerNumber) {
            lose++;
            $("#lose").text(lose);
            restart();
        }
    });
});