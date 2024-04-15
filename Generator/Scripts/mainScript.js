function randomLetter(){
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const rndmLet = alphabet[Math.floor(Math.random()*alphabet.length)];
	document.getElementById('displayRndmlet').innerHTML = rndmLet;
}

function generateNum(){
	minNum = document.getElementById('minNum').value;
	maxNum = document.getElementById('maxNum').value;
	minNum = parseInt(minNum);
	maxNum = parseInt(maxNum);
	if(minNum>maxNum){
		alert("Fehler: Min darf nicht größer als Max sein!");
	}else{
		let rndmNum = Math.floor (Math.random() * (maxNum - minNum))+minNum;
		document.getElementById('display_rndmNum').innerHTML = rndmNum;
	}
}