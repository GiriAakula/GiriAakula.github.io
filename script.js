function outputname(){
		var result =0;
		var result1 =0;
		var result2 =0;
		var result3 =0;
		var result4 =0;
		var result5 =0;
		
		var travelTime,x;
		x=document.getElementById("form1") ;
		travelTime=x.elements["name"].value;
		
		var velocity,y;
		y=document.getElementById("form2") ;
		velocity=y.elements["name1"].value;
	
	
		
		velocity = velocity/100;

		result1 = Math.pow(velocity,2);
		result2 = 1-result1;
		result3 = Math.sqrt(result2);
		result4 = Math.pow(result3,-1);
		result5 = travelTime*result4;
		result = result5 - travelTime;


		document.getElementById("demo").innerHTML = "You are " + result + " years older than the person on the spaceship.";
	}