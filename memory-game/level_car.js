window.onload = function()
{	
var game=document.getElementById('game');
var style=document.getElementById('style');
level1_next();
function level1_next()
{
var  anim="<font size='7' style='font-family:Kristen ITC;'>The character you choose: <img src='car/car_bg.png' width='100' height='100' /></font>"
style.innerHTML=anim;
anim="<br>"
style.innerHTML+=anim;
anim="<img src='imag/marble3.png'>"
style.innerHTML+=anim;
anim="<img src='imag/marble1.png' >"
style.innerHTML+=anim;
anim="<img src='imag/marble1.png' >"
style.innerHTML+=anim;
anim="<p  style='font-family:Kristen ITC; text-align: center; font-size: 24pt;'>level 1</p>"
style.innerHTML+=anim;
anim="<button id='level1'><img src='imag/level11.PNG' ></button>"
game.innerHTML=anim;
anim="<br>"
game.innerHTML+=anim;
anim="<button id='level2'><img src='imag/level22.PNG' ></button>"
game.innerHTML+=anim;
anim="<button id='level3'><img src='imag/level33.PNG' ></button>"
game.innerHTML+=anim;
lev1=document.getElementById('level1');
lev1.addEventListener('click',function(){
level1();
});
}
function level1()
{
var set_style="<font size='5' ><b>LEVEL :</b><b id='level'> 1 </b></font>"
style.innerHTML=set_style;
set_style="<font size='5' ><b> &nbsp &nbsp &nbsp &nbsp  SCORE : </b>  <b id='score'> 0</b> </font>" 
style.innerHTML+=set_style;
set_style="<font size='5' ><b>  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  TIME :</b><b id='time'> 0</b></font>"
style.innerHTML+=set_style;	
var stbtn1="<button id='start'>START</button>"
game.innerHTML=stbtn1;
var score=document.getElementById('score');
score.textContent=0;
var level=1;
var levell=document.getElementById('level');
var image1;
var image2;
var table=document.createElement("table"); 
var new_line=document.createElement('br');
game.appendChild(new_line);
new_line=document.createElement('br');
game.appendChild(new_line);
game.appendChild(table);
var gamearray=['pic1.jpg','pic1.jpg','pic2.jpg','pic2.jpg','pic3.jpg','pic3.jpg','pic4.jpg','pic4.jpg','pic5.png','pic5.png','pic6.jpg','pic6.jpg','pic8.jpg','pic8.jpg','pic11.jpg','pic11.jpg'];
var sel_array=[];
var start_btn=document.getElementById('start');
var column1;
var column2;
var bic_array=gamearray;
var counter_id;
var interval=0;
var ix=0;
start_btn.addEventListener("click",play);
var counter=0;
var array=[];
var time=document.getElementById('time');
var l=0;
var scr=0;
var x1;
var x2;
time.textContent=0;
function play()
{
scr=0;
var k=0;
levell.textContent=level;
counter=time.textContent;
counter_id=setInterval(function()
	{
		counter++;
		time.textContent=counter;
		if(scr<8&&counter==90)
		{  		
			clearInterval(counter_id);
			var string="<img  src='imag/Time_Out_logo.png' width='700' heigh='500' >,<img  src='imag/fi.gif' width='150' heigh='150' >"
			game.innerHTML=string;
			var retry="<button id='re'><img src='imag/re-try-hi.png' width=70 height=70></button>"
			game.innerHTML+=retry;
			console.log("gamee",game);
			retry=document.getElementById('re');
			retry.addEventListener('click',function()
			{
				level1();
			}
			);
		}
	},1000);

for(var i=0;i<4;i++)
{

	var row=document.createElement("tr"); 
	row.setAttribute('id',i);
	for(var j=0;j<4;j++)
	{
		var colm=document.createElement('td');
		var image=document.createElement('img');
		colm.setAttribute('id',"colm_"+k);
		var index=parseInt(Math.random()*(bic_array.length));
		image.setAttribute('src',"car/" + bic_array[index]);
		image.setAttribute('width',100);
		image.setAttribute('height',100);
		image.setAttribute('id',k);
		array[k]=bic_array[index];	
		bic_array.splice(index, 1);
		colm.appendChild(image);
		row.appendChild(colm);
		k++;
	}
	table.appendChild(row);
}

interval=setInterval(function()
{ 
	start_playing();
},3000);
start_btn.removeEventListener("click",play);
}

function start_playing()
{
	clearInterval(interval);
	for(var i=0;i<array.length;i++)
	{
	var image_btn=document.createElement('button');
	image_btn.setAttribute('id',"imagebtn_" + l);
	image_btn.textContent="MEMORY GAME";
	image_btn.setAttribute("style","width:100px; height:100px;");
	var colmn=document.getElementById("colm_"+l);
	var select_image=colmn.childNodes[0];
	colmn.removeChild(colmn.childNodes[0]);
	colmn.appendChild(image_btn); 
	l++;
	image_btn.addEventListener('click',image_btn_click);
	}

	function image_btn_click(e)
	{	
	
		var btn1;
		var btn2;		
		var selected_btn1=e.target.id;
		sel_array[ix]=selected_btn1;
		ix++;
		image_btn.removeEventListener('click',image_btn_click);
			if(sel_array.length==1)
			{	
			x1=sel_array[0].split("_")[1];
			column1=document.getElementById("colm_"+x1);
			image1=document.createElement('img');
			image1.setAttribute('src',"car/" + array[x1]);
			image1.setAttribute('width',100);
			image1.setAttribute('height',100);
			column1.removeChild(column1.childNodes[0]);
			column1.appendChild(image1);
			}

			if(sel_array.length==2)
			{
			x2=sel_array[1].split("_")[1];
			column2=document.getElementById("colm_"+x2);
			image2=document.createElement('img');
			image2.setAttribute('src',"car/" + array[x2]);
			image2.setAttribute('width',100);
			image2.setAttribute('height',100);
			column2.removeChild(column2.childNodes[0]);
			column2.appendChild(image2);		
			}

			if(sel_array.length==2)
			{			
				ix=0;
				if(array[x1]==array[x2]&&x1!=x2)
				{
					score=document.getElementById('score');
					scr++;
					score.textContent=scr;
					if(scr==8&&counter<=90)
					{
						level=2;
						clearInterval(counter_id);
						if(counter<=30)
						{   
						 	var star3="<img src='imag/Red-Star.png' width='50' height='50'>"   
						 	game.innerHTML=star3;
						    star3="<img src='imag/Green-Star.png' width='50' height='50'>" 
						 	game.innerHTML+=star3;	
						 	star3="<img src='imag/Red-Star.png' width='50' height='50'> " 	
						 	game.innerHTML+=star3;
						    star3="<br>"
							game.innerHTML+=star3;
							star3="<br>"
							game.innerHTML+=star3;
						}
						else if(counter>30&&counter<=60)
						{
						 	var star2="<img src='imag/Red-Star.png' width='50' height='50'> "
						 	game.innerHTML=star2;  
						    star2="<img src='imag/Green-Star.png' width='50' height='50'> " 	
						 	game.innerHTML+=star2;
						 	star2="<br>"
						 	game.innerHTML+=star2;
						 	star2="<br>"
						 	game.innerHTML+=star2;
						}            

						else if(counter>60&&counter<=90)
						{
						 	var star1="<img src='imag/Red-Star.png' width='50' height='50'> " 	
						 	game.innerHTML=star1;	
						    star1="<br>"
						    game.innerHTML+=star1;
						    star1="<br>"
						    game.innerHTML+=star1;
						} 	
						var string="<img  src='imag/images (5)..gif' width='450' heigh='450' >"
						game.innerHTML+=string;
						var next="<button id='next'><img src='imag/NEXT (2).gif' width=90 height=90></button>"
						game.innerHTML+=next;
						next=document.getElementById('next');
						next.addEventListener('click',function()
						{
							level2_next();
						}

						);
					}	
					}	

					else
					{
						 
						btn1=document.createElement('button');
						btn1.setAttribute('id',sel_array[0]);
						btn1.textContent="MEMORY GAME";
						btn1.setAttribute("style","width:100px; height:100px;");
						btn1.addEventListener('click',image_btn_click);
						btn2=document.createElement('button');
						btn2.setAttribute('id',sel_array[1]);
						btn2.textContent="MEMORY GAME";
						btn2.setAttribute("style","width:100px; height:100px;");
						btn2.addEventListener('click',image_btn_click);
						var show=setInterval(function()
						{
							column1.removeChild(column1.childNodes[0]);
						    column2.removeChild(column2.childNodes[0]);
							clearInterval(show);
							column1.appendChild(btn1);
							column2.appendChild(btn2);

						},300);
					}	

					sel_array=[];
				}	

				if(scr<8&&counter>90)
				{
					clearInterval(counter_id);
					var string="<img  src='imag/Time_Out_logo.png' width='700' heigh='500' >,<img  src='imag/fi.gif' width='150' heigh='150' >"
					game.innerHTML=string;
					var retry="<button id='re'><img src='imag/re-try-hi.png' width=70 height=70></button>"
					game.innerHTML+=retry;
					retry=document.getElementById('re');
					retry.addEventListener('click',function()
					{
						level1();
					}
					);
				}
			image_btn.addEventListener('click',image_btn_click);
		}	
	}

}

function level2_next()
{
var  anim="<font size='7' style='font-family:Kristen ITC;'>The character you choose: <img src='car/car_bg.png' width='100' height='100' /></font>"
style.innerHTML=anim;
anim="<br>"
style.innerHTML+=anim;
anim="<img src='imag/marble3.png'>"
style.innerHTML+=anim;
anim="<img src='imag/marble1.png' >"
style.innerHTML+=anim;
anim="<img src='imag/marble1.png' >"
style.innerHTML+=anim;
anim="<p  style='font-family:Kristen ITC; text-align: center; font-size: 24pt;'>level 2</p>"
style.innerHTML+=anim;
anim="<button id='level1'><img src='imag/level11.PNG' ></button>"
game.innerHTML=anim;
anim="<br>"
game.innerHTML+=anim;
anim="<button id='level2'><img src='imag/level22.PNG' ></button>"
game.innerHTML+=anim;
anim="<button id='level3'><img src='imag/level33.PNG' ></button>"
game.innerHTML+=anim;
img=document.getElementsByTagName('img');
img[2].setAttribute('src','imag/marble3.png'); 
img[1].setAttribute('src','imag/marble1.png');
lev1=document.getElementById('level1');
lev1.addEventListener('click',function(){
level1();
});
lev2=document.getElementById('level2');
lev2.addEventListener('click',function()
{
	level2();
  
});
}
function level2()
{
var set_style="<font size='5' ><b>LEVEL :</b><b id='level'> 1 </b></font>"
style.innerHTML=set_style;
set_style="<font size='5' ><b> &nbsp &nbsp &nbsp &nbsp  SCORE : </b>  <b id='score'> 0</b> </font>" 
style.innerHTML+=set_style;
set_style="<font size='5' ><b>  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  TIME :</b><b id='time'> 0</b></font>"
style.innerHTML+=set_style;	
var stbtn2="<button id='start'>START</button>"
game.innerHTML=stbtn2;
var level=2;
var levell=document.getElementById('level');
levell.textContent=level;
var score=document.getElementById('score');
score.textContent=0;
var image1;
var image2;
var table=document.createElement("table"); 
var new_line=document.createElement('br');
game.appendChild(new_line);
new_line=document.createElement('br');
game.appendChild(new_line);
game.appendChild(table);
var gamearray=['pic1.jpg','pic1.jpg','pic2.jpg','pic2.jpg','pic3.jpg','pic3.jpg','pic4.jpg','pic4.jpg','pic5.png','pic5.png','pic6.jpg','pic6.jpg','pic8.jpg','pic8.jpg','pic11.jpg','pic11.jpg','pic15.jpg','pic15.jpg','pic12.jpg','pic12.jpg'];
var sel_array=[];
var start_btn=document.getElementById('start');
var column1;
var column2;
var bic_array=gamearray;
var counter_id;
var interval=0;
var ix=0;
start_btn.addEventListener("click",play);
var counter=0;
var array=[];
var time=document.getElementById('time');
time.textContent=0;
var l=0;
var scr=0;
var x1;
var x2;

function play()
{
scr=0;
var k=0;
levell.textContent=level;
counter=time.textContent;
counter_id=setInterval(function()
	{
		counter++;
		time.textContent=counter;
		if(scr<10&&counter==90)
		{  
			clearInterval(counter_id);
			var string="<img  src='imag/Time_Out_logo.png' width='700' heigh='500' >,<img  src='imag/fi.gif' width='150' heigh='150' >"
			game.innerHTML=string;
			var retry="<button id='re'><img src='imag/re-try-hi.png' width=70 height=70></button>"
			game.innerHTML+=retry;
			retry=document.getElementById('re');
			retry.addEventListener('click',function()
				{
					level2();

				}

				);
			
				}

	},1000);


for(var i=0;i<4;i++)
{

	var row=document.createElement("tr"); 
	row.setAttribute('id',i);

	for(var j=0;j<5;j++)
	{
		var colm=document.createElement('td');
		var image=document.createElement('img');
		colm.setAttribute('id',"colm_"+k);
		var index=parseInt(Math.random()*(bic_array.length));
		image.setAttribute('src',"car/" + bic_array[index]);
		image.setAttribute('width',100);
		image.setAttribute('height',100);
		image.setAttribute('id',k);
		array[k]=bic_array[index];	
		bic_array.splice(index, 1);
		colm.appendChild(image);
		row.appendChild(colm);
		k++;
	}
	table.appendChild(row);
}


interval=setInterval(function()
	{ 

	start_playing();

	 },3000);

start_btn.removeEventListener("click",play);
}

function start_playing()
{
	clearInterval(interval);
	for(var i=0;i<array.length;i++)
	{
	var image_btn=document.createElement('button');
	image_btn.setAttribute('id',"imagebtn_" + l);
	image_btn.textContent="MEMORY GAME";
	image_btn.setAttribute("style","width:100px; height:100px;");
	var colmn=document.getElementById("colm_"+l);
	var select_image=colmn.childNodes[0];
	colmn.removeChild(colmn.childNodes[0]);
	colmn.appendChild(image_btn); 
	l++;
	image_btn.addEventListener('click',image_btn_click);
	}

	function image_btn_click(e)
	{	
	
		var btn1;
		var btn2;		
		var selected_btn1=e.target.id;
		sel_array[ix]=selected_btn1;
		ix++;
		image_btn.removeEventListener('click',image_btn_click);
			if(sel_array.length==1)
			{	
			x1=sel_array[0].split("_")[1];
			column1=document.getElementById("colm_"+x1);
			image1=document.createElement('img');
			image1.setAttribute('src',"car/" + array[x1]);
			image1.setAttribute('width',100);
			image1.setAttribute('height',100);
			column1.removeChild(column1.childNodes[0]);
			column1.appendChild(image1);
			}

			if(sel_array.length==2)
			{
			x2=sel_array[1].split("_")[1];
			column2=document.getElementById("colm_"+x2);
			image2=document.createElement('img');
			image2.setAttribute('src',"car/" + array[x2]);
			image2.setAttribute('width',100);
			image2.setAttribute('height',100);
			column2.removeChild(column2.childNodes[0]);
			column2.appendChild(image2);		
			}

			if(sel_array.length==2)
			{			
				ix=0;
				if(array[x1]==array[x2]&&x1!=x2)
					{
					 score=document.getElementById('score');
						scr++;
						score.textContent=scr;
						if(scr==10&&counter<=90)
						{
							level=2;
						clearInterval(counter_id);
						if(counter<=30)
						{   
						 	var star3="<img src='imag/Red-Star.png' width='50' height='50'>"   
						 	game.innerHTML=star3;
						    star3="<img src='imag/Green-Star.png' width='50' height='50'>" 
						 	game.innerHTML+=star3;	
						 	star3="<img src='imag/Red-Star.png' width='50' height='50'> " 	
						 	game.innerHTML+=star3;
						    star3="<br>"
							game.innerHTML+=star3;
							star3="<br>"
							game.innerHTML+=star3;
						 }

            			else if(counter>30&&counter<=60)
						{
						 	var star2="<img src='imag/Red-Star.png' width='50' height='50'> "
						 	game.innerHTML=star2;  
						    star2="<img src='imag/Green-Star.png' width='50' height='50'> " 	
						 	game.innerHTML+=star2;
						 	star2="<br>"
						 	game.innerHTML+=star2;
						 	star2="<br>"
						 	game.innerHTML+=star2;
						}            

						else if(counter>60&&counter<=90)
						{
						 	var star1="<img src='imag/Red-Star.png' width='50' height='50'> " 	
						 	game.innerHTML=star1;	
						    star1="<br>"
						    game.innerHTML+=star1;
						    star1="<br>"
						    game.innerHTML+=star1;
						 } 	
						var string="<img  src='imag/images (5)..gif' width='450' heigh='450' >"
						game.innerHTML+=string;
						var next="<button id='next'><img src='imag/NEXT (2).gif' width=90 height=90></button>"
						game.innerHTML+=next;							
						next=document.getElementById('next');
						next.addEventListener('click',function()
						{
							level3_next();
						}

						);
					}	
					}	

					else
					{
						 
						btn1=document.createElement('button');
						btn1.setAttribute('id',sel_array[0]);
						btn1.textContent="MEMORY GAME";
						btn1.setAttribute("style","width:100px; height:100px;");
						btn1.addEventListener('click',image_btn_click);
						btn2=document.createElement('button');
						btn2.setAttribute('id',sel_array[1]);
						btn2.textContent="MEMORY GAME";
						btn2.setAttribute("style","width:100px; height:100px;");
						btn2.addEventListener('click',image_btn_click);
						var show=setInterval(function()
						{
							column1.removeChild(column1.childNodes[0]);
						    column2.removeChild(column2.childNodes[0]);
							clearInterval(show);
							column1.appendChild(btn1);
							column2.appendChild(btn2);

						},300);
						}	

			sel_array=[];
		}	

		if(scr<10&&counter>90)
				{
					clearInterval(counter_id);
					var string="<img  src='imag/Time_Out_logo.png' width='700' heigh='500' >,<img  src='imag/fi.gif' width='150' heigh='150' >"
					game.innerHTML=string;
					var retry="<button id='re'><img src='imag/re-try-hi.png' width=70 height=70></button>"
					game.innerHTML+=retry;
					retry=document.getElementById('re');
					retry.addEventListener('click',function()
					{
						level2();

					}
					);
				}
		image_btn.addEventListener('click',image_btn_click);
	}	
}



}

function level3_next()
{
var  anim="<font size='7' style='font-family:Kristen ITC;'>The character you choose: <img src='car/car_bg.png' width='100' height='100' /></font>"
style.innerHTML=anim;
anim="<br>"
style.innerHTML+=anim;
anim="<img src='imag/marble1.png'>"
style.innerHTML+=anim;
anim="<img src='imag/marble1.png' >"
style.innerHTML+=anim;
anim="<img src='imag/marble3.png' >"
style.innerHTML+=anim;
anim="<p  style='font-family:Kristen ITC; text-align: center; font-size: 24pt;'>level 3</p>"
style.innerHTML+=anim;
anim="<button id='level1'><img src='imag/level11.PNG' ></button>"
game.innerHTML=anim;
anim="<br>"
game.innerHTML+=anim;
anim="<button id='level2'><img src='imag/level22.PNG' ></button>"
game.innerHTML+=anim;
anim="<button id='level3'><img src='imag/level33.PNG' ></button>"
game.innerHTML+=anim;
lev1=document.getElementById('level1');
lev1.addEventListener('click',function()
{
	level1();
});
lev2=document.getElementById('level2');
lev2.addEventListener('click',function(){
level2();
});
lev3=document.getElementById('level3');
lev3.addEventListener('click',function()
{
  	level3();
});
}
function level3()
{
var set_style="<font size='5' ><b>LEVEL :</b><b id='level'> 1 </b></font>"
style.innerHTML=set_style;
set_style="<font size='5' ><b> &nbsp &nbsp &nbsp &nbsp  SCORE : </b>  <b id='score'> 0</b> </font>" 
style.innerHTML+=set_style;
set_style="<font size='5' ><b>  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  TIME :</b><b id='time'> 0</b></font>"
style.innerHTML+=set_style;		
var stbtn2="<button id='start'>START</button>"
game.innerHTML=stbtn2;
var score=document.getElementById('score');
score.textContent=0;
var level=3;
var levell=document.getElementById('level');
levell.textContent=level;
var image1;
var image2;
var table=document.createElement("table"); 
var new_line=document.createElement('br');
game.appendChild(new_line);
new_line=document.createElement('br');
game.appendChild(new_line);
game.appendChild(table);
var gamearray=['pic1.jpg','pic1.jpg','pic2.jpg','pic2.jpg','pic3.jpg','pic3.jpg','pic4.jpg','pic4.jpg','pic5.png','pic5.png','pic6.jpg','pic6.jpg','pic8.jpg','pic8.jpg','pic11.jpg','pic11.jpg','pic15.jpg','pic15.jpg','pic12.jpg','pic12.jpg','pic19.jpg','pic19.jpg','pic10.jpg','pic10.jpg'];
var sel_array=[];
var start_btn=document.getElementById('start');
var column1;
var column2;
var bic_array=gamearray;
var counter_id;
var interval=0;
var ix=0;
start_btn.addEventListener("click",play);
var counter=0;
var array=[];
var time=document.getElementById('time');
time.textContent=0;
var l=0;
var scr=0;
var x1;
var x2;
function play()
{
scr=0;
var k=0;
levell.textContent=level;
counter=time.textContent;
counter_id=setInterval(function()
{
	counter++;
	time.textContent=counter;
	if(scr<12&&counter==90)
	{  
		clearInterval(counter_id);
		var string="<img  src='imag/Time_Out_logo.png' width='700' heigh='500' >,<img  src='imag/fi.gif' width='150' heigh='150' >"
		game.innerHTML=string;
		var retry="<button id='re'><img src='imag/re-try-hi.png' width=70 height=70></button>"
		game.innerHTML+=retry;
		retry=document.getElementById('re');
		retry.addEventListener('click',function()
		{
			level3();
		}				
		);
					
		}

},1000);
for(var i=0;i<4;i++)
{

	var row=document.createElement("tr"); 
	row.setAttribute('id',i);
	for(var j=0;j<6;j++)
	{
		var colm=document.createElement('td');
		var image=document.createElement('img');
		colm.setAttribute('id',"colm_"+k);
		var index=parseInt(Math.random()*(bic_array.length));
		image.setAttribute('src',"car/" + bic_array[index]);
		image.setAttribute('width',100);
		image.setAttribute('height',100);
		image.setAttribute('id',k);
		array[k]=bic_array[index];	
		bic_array.splice(index, 1);
		colm.appendChild(image);
		row.appendChild(colm);
		k++;
	}
	table.appendChild(row);
}

interval=setInterval(function()
{ 
	start_playing();
},3000);

start_btn.removeEventListener("click",play);
}

function start_playing()
{
	clearInterval(interval);
	for(var i=0;i<array.length;i++)
	{
	var image_btn=document.createElement('button');
	image_btn.setAttribute('id',"imagebtn_" + l);
	image_btn.textContent="MEMORY GAME";
	image_btn.setAttribute("style","width:100px; height:100px;");
	var colmn=document.getElementById("colm_"+l);
	var select_image=colmn.childNodes[0];
	colmn.removeChild(colmn.childNodes[0]);
	colmn.appendChild(image_btn); 
	l++;
	image_btn.addEventListener('click',image_btn_click);
	}

	function image_btn_click(e)
	{	
	
		var btn1;
		var btn2;		
		var selected_btn1=e.target.id;
		sel_array[ix]=selected_btn1;
		ix++;
		image_btn.removeEventListener('click',image_btn_click);
			if(sel_array.length==1)
			{	
			x1=sel_array[0].split("_")[1];
			column1=document.getElementById("colm_"+x1);
			image1=document.createElement('img');
			image1.setAttribute('src',"car/" + array[x1]);
			image1.setAttribute('width',100);
			image1.setAttribute('height',100);
			column1.removeChild(column1.childNodes[0]);
			column1.appendChild(image1);
			}

			if(sel_array.length==2)
			{
			x2=sel_array[1].split("_")[1];
			column2=document.getElementById("colm_"+x2);
			image2=document.createElement('img');
			image2.setAttribute('src',"car/" + array[x2]);
			image2.setAttribute('width',100);
			image2.setAttribute('height',100);
			column2.removeChild(column2.childNodes[0]);
			column2.appendChild(image2);		
			}

			if(sel_array.length==2)
			{			
				ix=0;
				if(array[x1]==array[x2]&&x1!=x2)
					{
						score=document.getElementById('score');
						scr++;
						score.textContent=scr;
						if(scr==12&&counter<=90)
						{
							level=3;
						clearInterval(counter_id);
						if(counter<=30)
						{   
						 	var star3="<img src='imag/Red-Star.png' width='50' height='50'>"   
						 	game.innerHTML=star3;
						    star3="<img src='imag/Green-Star.png' width='50' height='50'>" 
						 	game.innerHTML+=star3;	
						 	star3="<img src='imag/Red-Star.png' width='50' height='50'> " 	
						 	game.innerHTML+=star3;
						    star3="<br>"
							game.innerHTML+=star3;
							star3="<br>"
							game.innerHTML+=star3;
						 }

            			else if(counter>30&&counter<=60)
						{
						 	var star2="<img src='imag/Red-Star.png' width='50' height='50'> "
						 	game.innerHTML=star2;  
						    star2="<img src='imag/Green-Star.png' width='50' height='50'> " 	
						 	game.innerHTML+=star2;
						 	star2="<br>"
						 	game.innerHTML+=star2;
						 	star2="<br>"
						 	game.innerHTML+=star2;
						}            

						else if(counter>60&&counter<=90)
						{
						 	var star1="<img src='imag/Red-Star.png' width='50' height='50'> " 	
						 	game.innerHTML=star1;	
						    star1="<br>"
						    game.innerHTML+=star1;
						    star1="<br>"
						    game.innerHTML+=star1;
						 } 	
						var string="<img  src='imag/images (5)..gif' width='500' heigh='500' >"
						game.innerHTML+=string;
					}	
					}	

					else
						{
						 
						btn1=document.createElement('button');
						btn1.setAttribute('id',sel_array[0]);
						btn1.textContent="MEMORY GAME";
						btn1.setAttribute("style","width:100px; height:100px;");
						btn1.addEventListener('click',image_btn_click);
						btn2=document.createElement('button');
						btn2.setAttribute('id',sel_array[1]);
						btn2.textContent="MEMORY GAME";
						btn2.setAttribute("style","width:100px; height:100px;");
						btn2.addEventListener('click',image_btn_click);
						var show=setInterval(function()
						{
							column1.removeChild(column1.childNodes[0]);
						    column2.removeChild(column2.childNodes[0]);
							clearInterval(show);
							column1.appendChild(btn1);
							column2.appendChild(btn2);

						},300);
						}	

			sel_array=[];
		}	

		if(scr<12&&counter>90)
				{
					clearInterval(counter_id);
					var string="<img  src='imag/Time_Out_logo.png' width='700' heigh='500' >,<img  src='imag/fi.gif' width='150' heigh='150' >"
					game.innerHTML=string;
					var retry="<button id='re'><img src='imag/re-try-hi.png' width=70 height=70></button>"
					game.innerHTML+=retry;
					retry=document.getElementById('re');
					retry.addEventListener('click',function()
					{
						level3();

					}
					);
				}
		image_btn.addEventListener('click',image_btn_click);
	}	
}

}


}