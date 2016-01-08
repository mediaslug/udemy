/*
	Description:
	The Function constructor creates a new Function object. In JavaScript every function is actually a Function object.

	Syntax:
	new Function ([arg1[, arg2[, ...argN]],] functionBody)
*/

function submitAnswers() {
	var total = 5; 
	var score = 0;
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// validation 
	for (var i = 1; i <= total; i++) {
		if (eval("q" + i) == null || eval("q" + i) == "") {
			alert("You missed question " + i)
			return false;	
		}
	}

	// set the correct answers
	var answers = ['b', 'a', 'd', 'b', 'd']; 


	// because we are not actually submitting this form
		// check answers (note i - 1 to account for array starting with [0])
		for (var i = 1; i <= total; i++) {
			if (eval("q" + i) == answers[i-1]) {
				score++;
			}
		}

		// display results
	
	var results = document.getElementById("results");
	if (score == total) {
		results.innerHTML = "<p>Congratulations! You scored " + score + " out of " + total + " points.</p>";
	} else {
		results.innerHTML = "<p>You scored " + score + " out of " + total + " points.</p>";
	}

		console.log(score);

		return false;
}