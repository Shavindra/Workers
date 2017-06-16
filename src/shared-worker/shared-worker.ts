var connections = 0; // count active connections  

addEventListener("connect", function(e) {  
    console.log('SHARED WORKER', e)
   var port = e["ports"][0];  
   connections++;  
   port.addEventListener("message", function(e) {  
       port.postMessage("Welcome to Shared Worker " + e.data +
		" (On port #" + connections + ")");  
   }, false); 
   //  
   port.start();  
}, false);