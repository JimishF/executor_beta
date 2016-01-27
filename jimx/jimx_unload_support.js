
function call_reset(){
		reset = 1;
		if(confirm("Your code will be Destroyed !\nAre you sure to Reset Executer ?"))
		{
					window.location="./index.html";
		}	
}

function goodbye(e) {
	if(!e) e = window.event;
	//e.cancelBubble is supported by IE - this will kill the bubbling process.
	if(reset == 1){

	}
	else{
		
	e.cancelBubble = true;
	
	e.returnValue = 'Your code is being unsaved !\n'; //This is displayed on the dialog

	//e.stopPropagation works in Firefox.
	if (e.stopPropagation) {
		e.stopPropagation();
		e.preventDefault();
		}
	}
}
window.onbeforeunload=goodbye;