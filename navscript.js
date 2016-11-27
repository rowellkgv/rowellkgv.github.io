$(document).ready(function(){
	$("#events-content").hide();
	$("#contact-content").hide();
	$("#pastSites-content").hide();
	$("#home").click(function(){
		console.log("home clicked");
		$("#events-content").fadeOut("fast",function(){
			$("#contact-content").fadeOut("fast",function(){
				$("#sidebar").fadeIn("fast", function(){
					$("#home-content").fadeIn();
					$("#content").css("width","calc(100% - 290px)");
				});
			});
		});
	});
	$("#events").click(function(){
		console.log("events clicked");
		$("#contact-content").fadeOut("fast",function(){
			$("#home-content").fadeOut("fast",function(){
				$("#sidebar").fadeOut("fast",function(){
					$("#events-content").fadeIn();
					$("#content").css("width","100%");
				});
			});
		});
	});
	$("#contact").click(function(){
		$("#events-content").fadeOut("fast",function(){
			$("#home-content").fadeOut("fast",function(){
				$("#sidebar").fadeIn("fast", function(){
					$("#contact-content").fadeIn();
					$("#content").css("width","calc(100% - 290px)");
				});
			});
		});
	});
});
