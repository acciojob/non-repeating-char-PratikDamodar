//your JS code here. If required.
const string = "heeaven";
let index =-1;
let fnc='';
for(let i of string){
	if(string.splt(i).length-1===1){
		fnc =i;
		break;
		
	}
	else{
		index+=1;
		
	}
	
}
if(index===1){
	cnsole.log("Either all characters are repeating or string")
}
else{
	console.log(`FIrst non-repeating character is ${fnc}`);
}
