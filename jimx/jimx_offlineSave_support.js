	var reset = 0;
var fn_available = false;
var extHtml ="."+"html";
function currentToken(){ return Date.now().toString().substr(0,8)+((mAlgo.random().toString().replace(".","")).substr(2,8));}

function call_saveIt(){
	var default_fn;

	if(fn_available){
		default_fn	= final_fn;
	}
	else{
		default_fn = "Practice Code [token:"+ currentToken() +"] [codestudy.in]";
	}

	if(final_fn = prompt("Save As... ( *.html )",default_fn)){



	if(final_fn == null ||  final_fn == "" || final_fn.toString().trim() == ""){
		final_fn = default_fn;
	}		
	
	fn_available = true;
	
	var code = getCodeText();
	var tempAncNode = document.createElement('a');

	var publicity = "\n\n <!-- \n\n *  We are Thankful to you, for using CodeStudy executer !\n"
	+" * Please keep supporting us at CodeStudy.in !\n"
	+" * Created By : Jimish Fotariya.\n * Humbly supported by : Hardik Solanki \n\n -->";
 	
 	finalHtml  = 'data:text/html;charset=utf-8,'+ encodeURIComponent(code) +"\n\n\n\n\n"+ encodeURIComponent(publicity);

	tempAncNode.setAttribute('href',finalHtml);
	tempAncNode.setAttribute('download',final_fn+extHtml);
	tempAncNode.click();
	//document.removeElement(tempAncNode);
	//document.removeChild(tempAncNode);
	}
}

