function lw()
{
	var i=document.getElementById("input").value;
	var xhr=new XMLHttpRequest();

	xhr.open("GET","http://192.168.43.161/cgi-bin/new.py?c=" +i,true);
	xhr.send();
	xhr.onload=function(){
		var output=xhr.responseText;
		document.getElementById("d1").innerHTML=output;
		}
}



