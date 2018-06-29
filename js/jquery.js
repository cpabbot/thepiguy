i = 0;
$(document).ready(function() {
    $("#leftIcon").click(function() {
    		if(i==0) {
          $("ul.sidebar").addClass("sidebarClick");
      		i++;
    		}
    		else {
      		$("ul.sidebar").removeClass("sidebarClick");
      		i = 0;
    		}
   });

 $("#inputM").click(function() { //#run
  $("#next").html("Next");
	//Pick the Murderer, Detective, etc.
	var numPlayers = document.getElementById("userInput").value; //prompt("How many players?");
  numPlayers = numPlayers - 1;
	var m = getRandomInt(0, numPlayers);
	var d = getRandomInt(0, numPlayers);
	while(d == m) {
		d = getRandomInt(0, numPlayers);
	}
	var d2 = getRandomInt(0, numPlayers);
	while(d2 == d || d2 == m) {
		d = getRandomInt(0, numPlayers);
	}

	var i = 0;
  var isNext = true;
	$("#next").click(function() {
    if(i<=numPlayers) {
          if(isNext == true) {
              isNext = false;
              $("#next").html("blank");
              if(i == m) {
        		      $("#mOutputP").html("Murderer");
        	    }
        	    else if(i == d) {
        		      $("#mOutputP").html("Detective");
        	    }
        	    else if(i == d2) {
        		      $("#mOutputP").html("Detective");
        	    }
        	    else {
        		      $("#mOutputP").html("Civilian");
        	    }
        	    i++;
          }
          else {
              isNext = true;
              $("#next").html("Next");
              $("#mOutputP").html("");
          }
    }
    else {
      $("#mOutputP").html("");
    }
	 });
  });
	/*$("#blank").click(function() {
		  $("#mOutputP").html("");
    });*/
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
