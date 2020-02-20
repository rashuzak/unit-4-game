//This is to prevent any jQuery code from running before the document is finished loading (is ready).

$(document).ready(function(){

    

    crystals = ['assets/images/th(1).jpg', 'assets/images/th(2).jpg', 'assets/images/th(3).jpg', 'assets/images/th.jpg'];
	
	var wins = 0;
	var lose = 0;
    var counter = 0;
    
    // The computer generates a numbre from 19 to 120 
	
    var targetNumber = Math.floor((Math.random() * 101) + 19);
  
    $("#number-to-guess").text(targetNumber);
    
   // Restart the game: changing the targetNumber and four crystalNum

	function restart() {
		targetNumber = Math.floor((Math.random() * 101) + 19);
		console.log(targetNumber);
		$("#targetNumber").text(targetNumber);

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
    
         // First each crystal will be given the class ".crystal-image".
         // This will allow the CSS to take effect.
             
         imagecrystal.addClass("crystal-image");

         // Each imageCrystal will be given a data attribute called data-crystalValue.
        
          
          imagecrystal.attr("data-crystalvalue", crystalNum);
        

          // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        	$("#crystals").append(imagecrystal);
    }

    // Our click event applies to every single crystal on the page. 

    $(".crystal-image").on("click", function() {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

		var crystalValue = ($(this).attr("data-crystalvalue"));
      	    crystalValue = parseInt(crystalValue);
            console.log(targetNumber);
            
            // We then add the crystalValue to the user's "counter" which is a global variable.
            // Every click, from every crystal adds to the global counter.
            
            counter += crystalValue;
      	    console.log(counter);
      	    $("#scores").text(counter);

		if (counter === targetNumber) {
      		wins++;
        	$("#wins").text(wins);
        	restart();
      	}
      	else if (counter >= targetNumber) {
      		lose++;
        	$("#lose").text(lose);
        	restart();
      	}
    });
});