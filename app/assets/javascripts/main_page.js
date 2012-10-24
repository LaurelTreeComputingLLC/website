//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function() {
	$("#menu").menu();
	$("p,img").each(
		function(){
			$(this).toggleClass('resizable');
			$(this).css('cursor','move');
		}
	);
	$('h1').css('cursor','move');
	$(".resizable").resizable( { 
		disabled: false,
		ghost:	true,
		helper: true,
	})
	.parent().draggable();
//	$('#progressbar').progressbar({ value: 0.0001 });

	var i=1024;
//	var condelay=4000;
//	va middelay=5000;
	var condelay=0;
	var middelay=0;
//	$("#progressbar .ui-progressbar-value").animate({ width: i },'slow').delay(4000);
	$("#container").delay(condelay).fadeOut("slow").delay("slow");
	$("#middle").delay(middelay).fadeIn("slow");

  });
