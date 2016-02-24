
var wins = 0;
var losses = 0;
var score = 0;
var winningNumber = Math.floor((Math.random() * 120) + 19);

// Random value assigned to crystals from 1 to 12
var redCrystal = Math.floor((Math.random() * 12) + 1);
var blueCrystal = Math.floor((Math.random() * 12) + 1);
var yellowCrystal = Math.floor((Math.random() * 12) + 1);
var greenCrystal = Math.floor((Math.random() * 12) + 1);



$(document).ready(function(){
// Crystal Buttons
$('#red').click(function(){
			score = score + redCrystal;
			result();
		})

$('#blue').click(function(){
			score = score + blueCrystal;
			result();	
		})

$('#yellow').click(function(){
			score = score + yellowCrystal;
			result();
		})

$('#green').click(function(){
			score = score + greenCrystal;
			result();
		})
		// Display winning number in html
		$("#randomNumber").append(winningNumber);

		// Display score in html
		$("#score").append(score);

});


// update score in html
function updateScore(){
	$('#score').empty();
	$('#score').append(score);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
	$('#score').replaceAll(score);
}

// Restarts game and resets random numbers
function restart(){
	score = 0;
	winningNumber = Math.floor((Math.random() * 120) + 19);
	$("#randomNumber").empty();
	$("#randomNumber").append(winningNumber);
	redCrystal = Math.floor((Math.random() * 12) + 1);
	blueCrystal = Math.floor((Math.random() * 12) + 1);
	yellowCrystal = Math.floor((Math.random() * 12) + 1);
	greenCrystal = Math.floor((Math.random() * 12) + 1);
	updateScore();
}

function result (){
	if (score == winningNumber) {
			wins = wins + 1;
			alert('Yayyy You Win!');
			restart();
			}			
		else if (score > winningNumber) {
			losses = losses + 1;
			alert('2 Bad You Lost!');
			restart();
			}
		else {
			updateScore();
			}
}
