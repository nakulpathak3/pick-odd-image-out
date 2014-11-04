$(document).ready(function (){

$('.aftercount').hide();

function endCountdown() {
	$('.aftercount').show();	
	$('#count_num').hide();    
}

function handleTimer() 
{
  if(count === 0) 
  {
    clearInterval(timer);
    endCountdown();
  }
  else 
  {
    $('#count_num').html(count);
    count--;
  }
}

var count = 3;
var timer = setInterval(function() { handleTimer(count); }, 1000);

	$('body').keydown(function(event){
		if(event.which == 37)
		{
			$('#leftkey').css({
			    "-webkit-box-shadow": "0px 2px 0px #aaaaaa",
			    "-moz-box-shadow": "0px 2px 0px #aaaaaa",
			    "box-shadow": "0px 2px 0px #aaaaaa",
				"top": "3px"
			});
		}
		else if(event.which == 38)
		{
			$('#upkey').css({
			    "-webkit-box-shadow": "0px 2px 0px #aaaaaa",
			    "-moz-box-shadow": "0px 2px 0px #aaaaaa",
			    "box-shadow": "0px 2px 0px #aaaaaa",
				"top": "-73px"
			});
		}
		else if(event.which == 39)
		{
			$('#rightkey').css({
			    "-webkit-box-shadow": "0px 2px 0px #aaaaaa",
			    "-moz-box-shadow": "0px 2px 0px #aaaaaa",
			    "box-shadow": "0px 2px 0px #aaaaaa",
				"top": "3px"
			});
		}
	});

	$('body').keyup(function(event){
		if(event.which == 37)
		{
			$('#leftkey').css({
			    "-webkit-box-shadow": "",
			    "-moz-box-shadow": "",
			    "box-shadow": "",
				"top": ""
			});
		}
		else if(event.which == 38)
		{
			$('#upkey').css({
			    "-webkit-box-shadow": "",
			    "-moz-box-shadow": "",
			    "box-shadow": "",
				"top": ""
			});
		}
		else if(event.which == 39)
		{
			$('#rightkey').css({
			    "-webkit-box-shadow": "",
			    "-moz-box-shadow": "",
			    "box-shadow": "",
				"top": ""
			});
		}
	});
});