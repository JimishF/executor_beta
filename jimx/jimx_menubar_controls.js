var mAlgo = Math,
	d= document,
	getById = function(s){ return d.getElementById(s) },
	getByTag = function(s){ return d.getElementsByTagName(s) };

function chkx(finalCode){	
		if (finalCode.substr(0,1) == "x") {
				finalCode = finalCode.substr(1,finalCode.length-1);
			 return chkx(finalCode);
		}
		else{
			return finalCode;
		}
	}
		
function getCodeText(){

	var preData=getByTag("pre");
		var finalCode = "";
		
		for(var i = 0; i< preData.length;i++)
		{
			currentData = encodeURI(preData[i].textContent)			
			if(currentData != "%E2%80%8B")
			{
				finalCode += currentData+ "\n"  ;
			}
		}

	finalCode = chkx(finalCode);
	code = decodeURI(finalCode);
	return code;
}


function executeHtml(){					   
		
	code = getCodeText();
	preProcess = "<div align='center' style='margin-top:20%'>Executing..</div>"

		if(code.length>3)
		{
			var ifrm = getById('execution');
			ifrm = (ifrm.contentWindow) ? ifrm.contentWindow : (ifrm.contentDocument.document) ? ifrm.contentDocument.document : ifrm.contentDocument;
			
			ifrm.document.open();
			ifrm.document.write(preProcess);
			
			setTimeout(function(){
				ifrm.document.write(code);
			},500);
			
			ifrm.document.close();
		}
	};
function getCodeTemp() {
    var name = "xecutecode=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "L";
};
console.log("jhasg");

window.onload=function(){	
console.log(getCodeTemp());

var execute =getById("executeMenuSpan"),
	reset = getById("resetMenuSpan"), 
	save = getById("saveMenueSpan"),
	execute_2 =getById("executeMenuSpan"),
	// reset_2 = getById("resetMenuSpan"), 
	save_2 = getById("saveMenueSpan"),
	codeArea = getById("exe_code");

	execute.addEventListener("click",executeHtml);
	reset.addEventListener("click",call_reset);
	save.addEventListener("click",call_saveIt);
	execute_2.addEventListener("click",executeHtml);
	// reset_2.addEventListener("click",call_reset);
	save_2.addEventListener("click",call_saveIt);
 
 $(".button-collapse").sideNav();
}