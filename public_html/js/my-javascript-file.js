
 var i=0;
 var loop=true;
function functionName(){
	alert('Hello world');
}
 $(document).keypress(function(event) {
      console.log("hey 1"+loop);
     loop=false;
     console.log("hey 2"+loop);
});


function times()
{
    setTimeout(function(){

           console.log("Loop "+loop+"::"+ i++);
           
           if(loop)
           times();
},1000); 
}

 //times();
 
 //while(loop);
 //console.log("loop done");
 
 
  
 
 