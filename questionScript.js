function validate()
{
	var question=document.getElementById("question");
	var answers=document.getElementsByName("ANS");
    var countElement = document.getElementById("count");
	var count=parseInt(countElement.value);
    var qcountElement = document.getElementById("qcount");
    var qcount = parseInt(qcountElement.value);
    qcount++;
    qcountElement.value = qcount.toString();

    var ans;
    for(var i = 0; i < answers.length; i++){
        if(answers[i].checked){
            ans = answers[i].value;
            break;
        }
    }
    
	if(ans == "James Gosling")
	{
		count++;
        countElement.value = count.toString();
	}
    if(ans == "Whatsavatar")
	{
		count++;
        countElement.value = count.toString();
	}
    if(ans == "DS Sheep")
	{
		count++;
        countElement.value = count.toString();
	}
	if(ans == "DS")
	{
		count++;
        countElement.value = count.toString();
	}
	if(ans == "A")
	{
		count++;
        countElement.value = count.toString();
	}
    
    if(qcount == 2)
    {
        question.innerHTML = 
            '<table align="left"><tr><th><h2>Q.Who is the CEO of "Tesla Inc"?</h2></th></tr><tr><td><br></td></tr><tr><td><input type="radio" value="Adavatar" id="ANS" name="ANS">Mark Zuckerberg</td></tr>	<tr><td><br></td></tr><tr><td><input type="radio" value="Whatsavatar" id="ANS" name="ANS">Elon Musk</td></tr>	<tr><td><br></td></tr><tr><td><input type="radio" value="lilGthequeenbee" id="ANS" name="ANS">Tim Cook</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="None of the above" id="ANS" name="ANS">None of the above</td></tr><tr><td><br></td></tr><tr><td><input type="submit" value="Next" class="S"></td></tr><tr><td><br></td></tr></table>';
    }
    if(qcount == 3)
    {
        question.innerHTML = 
            '<table align="left"><tr><th><h2>Q.In which city is the 2020 Summer Olympics going to be held?</h2></th></tr><tr><td><br></td></tr><tr><td><input type="radio" value="DS Sheep" id="ANS" name="ANS">Tokyo</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="DS Wolves" id="ANS" name="ANS">Bucharest</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="None of the above" id="ANS" name="ANS">None of the above</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="All of the above" id="ANS" name="ANS">All of the above</td></tr><tr><td><br></td></tr><tr><td><input type="submit" value="Next" class="S"></td></tr>	<tr><td><br></td></tr></table>';
    }
	if(qcount == 4)
    {
        question.innerHTML = 
            '<table align="left"><tr><th><h2>Q.Who is the current president of FIFA?</h2></th></tr><tr><td><br></td></tr><tr><td><input type="radio" value="DS" id="ANS" name="ANS">Gianni Infantino</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="DS Wolves" id="ANS" name="ANS">Joseph Blatter</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="Prince Ali bin Hussein" id="ANS" name="ANS">Prince Ali bin Hussein</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="None of the above" id="ANS" name="ANS">None of the above</td></tr><tr><td><br></td></tr><tr><td><input type="submit" value="Next" class="S"></td></tr>	<tr><td><br></td></tr></table>';
    }
	if(qcount == 5)
    {
        question.innerHTML = 
            '<table align="left"><tr><th><h2>Q.Where are the headquarters of United Nations located?</h2></th></tr><tr><td><br></td></tr><tr><td><input type="radio" value="A" id="ANS" name="ANS">New York City</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="DS Wolves" id="ANS" name="ANS">The Hague</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="C" id="ANS" name="ANS">Paris</td></tr><tr><td><br></td></tr><tr><td><input type="radio" value="None of the above" id="ANS" name="ANS">None of the above</td></tr><tr><td><br></td></tr><tr><td><input type="submit" value="Next" class="S"></td></tr>	<tr><td><br></td></tr></table>';
    }
    if(qcount == 6)
    {
        alert("You have completed the test !!!\nYou scored: "+count+" marks");
        question.innerHTML = 
            '<a href="Login form.html">Click here to logout...</a>'
    }
    return false;
}