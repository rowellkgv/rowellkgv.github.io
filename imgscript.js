var events = ["Badminton"];
var imgs = {};
var desc = {};

imgs.Badminton = ["IMG_6890.JPG","IMG_6905.JPG","IMG_6912.JPG","IMG_6925.JPG","IMG_6946.JPG","IMG_6951.JPG","IMG_6953.JPG","IMG_6975.JPG","IMG_6977.JPG","IMG_7002.JPG","IMG_7024.JPG","IMG_7057.JPG","IMG_7067.JPG","IMG_7081.JPG","IMG_7086.JPG"];
desc.Badminton = "Interhouse badminton is an enjoyable but challenging event. This year Rowell did rather well, winning quite a few matches. The event is divided by year group, with all players being divided into two teams: elite and non-elite. In each team, there are 3 singles and 2 doubles games. After each team plays against each house, the team that has won the most games wins the entire event. It’s a very fun event, especially with all the players encouraging each other. Although some people are less experienced in badminton, they still joined due to their house spirit, which is specifically what makes us proud.";

$(document).ready(function(){
	var j = 0;
	for(j=0;j<events.length;j++){
		$("#"+events[j].toLowerCase()).append('<div class="gallery"><div class="gallery-main-container"><h1 class="gallery-header">'+events[j]+'</h1><table class="gallery-table"><tr><td class="first-col"><div id="'+events[j]+'-gallery-description" class="gallery-description"></div></td><td class="second-col"><img id="'+events[j]+'-gallery-main-photo" class="gallery-main-photo" align="right" /></td></tr></table></div><div id="'+events[j]+'-gallery-photo-selection" class="gallery-photo-selection"></div></div>');
		document.getElementById(events[j] + "-gallery-description").innerHTML = desc[events[j]];
		document.getElementById(events[j] + "-gallery-main-photo").src = "images/"+events[j] + "/" + imgs[events[j]][0];
		var divSelector = "#"+events[j]+"-gallery-photo-selection";
		/*
		console.log(imgs[events[j]]);
		console.log(divSelector);
		*/
		var elements = "";
		for(var i = 0; i<imgs[events[j]].length; i++){
			var newElement = '<img src="images/'+events[j]+"/"+imgs[events[j]][i]+'" width="15%" height="auto" class="gallery-photo" />';
			elements = elements + newElement;
			//console.log(newElement);
		}
		$(divSelector).append(elements);
	}
	
	$(".gallery-photo").click(function(){
		//console.log($(this));
		var id = $(this).parent().attr('id');
		var event = id.split("-gallery-photo-selection")[0];
		//console.log(event);
		$("#"+event+"-gallery-main-photo").attr('src',$(this).attr('src'));
	});
	
});
