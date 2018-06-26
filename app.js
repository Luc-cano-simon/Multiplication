// var  ColorTab ;

// 	document.write("<table border='5px'>");

// 	for(var i = 1; i < 10; i++) 
// 	{

// 	document.write("<tr style='height:50px;'>");

// 	for(var j = 1; j < 10; j++) 
// 	{

// 		if(j == 1 || i == 1) 
// 		{
// 			ColorTab = "grey"
		
// 		 }else {
			
// 		}
	
// 	document.write("<td style='width:50px;'"  +ColorTab+  "'>"  +i*j+  "</td>");
		
// 	}

// }


var  ColorTab ;
var div = $("#Tab") ;

	var table = div.append("<table border='5px'>");

	for(var i = 1; i < 10; i++) 
	{

	var row = table.append("<tr style='height:50px;'>");

	for(var j = 1; j < 10; j++) 
	{

		if(j == 1 || i == 1) 
		{
			
		
		 }else {
			
		}
	
	row.append("<td style='width:50px;'"  +ColorTab+  "'>"  +i*j+  "</td>");
		
	}
	table.append("</tr>");

}

div.append("</table>");