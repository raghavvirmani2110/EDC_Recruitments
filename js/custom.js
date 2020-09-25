
//
$(document).ready(function() {
 
			setTimeout(function(){
				$('body').addClass('loaded');
				$('h1').css('color','#222222');
			}, 3000);
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})