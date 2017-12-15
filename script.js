			var starttime=new Date();
			var endtime;
			
			document.getElementById("pic").onclick=function()
				{
					
					document.getElementById("pic").style.display="none";
					endtime=new Date();
					//displaytime(starttime);
					//displaytime(endtime);
					
					document.getElementById("timetaken").innerHTML  = "  "+(endtime-starttime)/1000 + "s";
					setrandomcolor();
					setrandomsize();
					setrandomposition();
					setrandomshape();
					document.getElementById("pic").style.display="";
					starttime=new Date();
				}
					
				
			
			
				
				function displaytime(t) //display time in HH:MM:SS format
				{
					var h = (t.getHours()>10?"":"0") + t.getHours();
					var m = (t.getMinutes()>10?"":"0") + t.getMinutes();
					var s = (t. getSeconds()>10?"":"0") + t.getSeconds();
					
					if(h>=12)
						hr = h-12;
					else 
						hr = h;
						
					document.getElementById("timetaken").innerHTML  +="<p>Time:"+ hr + ":" + m + ":" + s + (h>12?"  PM":"  AM "+"</p>");
				
				}
				
				
				function setrandomposition()
				{
					var top=Math.floor(Math.random()*150);
					var bottom=Math.floor(Math.random()*150);
					var left=Math.floor(Math.random()*150);
					var right=Math.floor(Math.random()*150);
					top += "px";
					bottom += "px";
					left += "px";
					right += "px";
					document.getElementById("pic").style.top = top;
					document.getElementById("pic").style.bottom = bottom;
					document.getElementById("pic").style.left = left;
					document.getElementById("pic").style.right = right;
				}
				function setrandomsize()
				{
					var width=(Math.floor(Math.random()*250))+50;
					var height=(Math.floor(Math.random()*250))+50;
					width += "px";
					height += "px";
					document.getElementById("pic").style.width = width;
					document.getElementById("pic").style.height = height;
				}
				function setrandomshape()
				{
					var rad=Math.floor(Math.random()*100);
					if (rad >= 50)
						document.getElementById("pic").style.borderRadius= "50%";
					else 
						document.getElementById("pic").style.borderRadius= "";
					
				}
				
				function getrandomcolor(){
					var letters='0123456789ABCDEF';
					var color ="#";
					for(var i=0;i<6;i++)
						{
						  color += letters[Math.floor(Math.random()*16)];
						}
					
					return(color);
				}
				function setrandomcolor()
				{
				 var color = getrandomcolor();
				 
				 
				 
					
				 document.getElementById("pic").style.backgroundColor=color;				 
				}
				
				function timespan(t)
				{
					var endtime=new Date();
					document.getElementById("pic").style.display="none";
					var h = (t.getHours()>10?"":"0") + t.getHours();
					var m = (t.getMinutes()>10?"":"0") + t.getMinutes();
					var s = (t. getSeconds()>10?"":"0") + t.getSeconds();
					
					if(h>=12)
						hr = h-12;
					else 
						hr = h;
						
					document.getElementById("timetaken").innerHTML = hr + ":" + m + ":" + s + (h>12?"  PM":"  AM")+ (endtime-t)/1000;
				}
				
			