const numbers = document.querySelector("[numbers]")

const upper = document.querySelector("#upper")
const lower = document.querySelector("#lower")





//  start = window.parseInt(prompt("Please enter your name:"));
//  end = window.parseInt(prompt("Please enter your name:"));




function calculate(){
let start = lower.value;
let end=upper.value;

if(start < 1 || end > 10000){
	window.alert("please enter in range")
return;
}

console.log(end)
	for(i=start; i<=end; i++){

		if(i==2){
			console.log(i)
			const newDiv = document.createElement("div");
			newDiv.textContent = i;
			numbers.appendChild(newDiv);
			continue;
		}
		else if(i%2==0 || i==1){
			continue;
		}
	
		else{
			const newDiv = document.createElement("div");
			newDiv.textContent = i;
			numbers.appendChild(newDiv);
			console.log(i)
		}
	}
}



	function printDiv() {
		calculate();
		var divContents = document.getElementById("numbers_data").innerHTML;
		var a = window.open('', '', 'height=500, width=500');
		a.document.write('<html>');
		a.document.write('<body > <h1>Prime Number are<br>');
		a.document.write(divContents);
		a.document.write('</body></html>');
		a.document.close();
		a.print();
	}