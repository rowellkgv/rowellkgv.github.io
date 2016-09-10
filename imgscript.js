var events = ["Badminton", "Football", "Tennis"];
var imgs = {};
var desc = {};
var img_suffix = ".jpg";

imgs.Badminton = ["IMG_6890","IMG_6905","IMG_6912","IMG_6925","IMG_6946","IMG_6951","IMG_6953","IMG_6975","IMG_6977","IMG_7002","IMG_7024","IMG_7057","IMG_7067","IMG_7081","IMG_7086"];
desc.Badminton = "Interhouse badminton is an enjoyable but challenging event. This year Rowell did rather well, winning quite a few matches. The event is divided by year group, with all players being divided into two teams: elite and non-elite. In each team, there are 3 singles and 2 doubles games. After each team plays against each house, the team that has won the most games wins the entire event. It’s a very fun event, especially with all the players encouraging each other. Although some people are less experienced in badminton, they still joined due to their house spirit, which is specifically what makes us proud.";

imgs.Football = ["IMAGE04","IMAGE08","IMAGE11","IMAGE13","IMAGE15","IMAGE20","IMAGE21","IMAGE22","IMAGE34","IMAGE42"];
desc.Football = "This year Rowell House performed exceptionally well in the Interhouse football competition. After a rather rough start with the A grade boys, our Open grade girls team stepped up to the platter and performed admirably, finishing first! This was then followed up with strong performances in the B grade, C grade and D grade boys competitions. Overall we finished in second place, which was extremely impressive - we hope to take the top spot next year!";

desc.Tennis = "Interhouse tennis has started off fairly well for Rowell. Although the competition has not finished yet, Rowell house has had a very strong start with Jahan Balani and Alan Sou performing admirably in the B Grade Boys tournament. We hope Rowell House can continue perform to the high level set by the B Grade Boys and win the Interhouse Competition!";

$(document).ready(function(){
	var j = 0;
	for(j=0;j<events.length;j++){
		if(j==0){
			$("#nav-tabs").append('<li role="presentation" class="active"><a href="#'+events[j]+'" aria-controls="'+events[j]+' role="tab" data-toggle="tab">'+events[j]+'</a></li>');
			$('#tab-content').append('<div role="tabpanel" class="tab-pane fade in active" id="'+events[j]+'">');
		}else{
			$("#nav-tabs").append('<li role="presentation"><a href="#'+events[j]+'" aria-controls="'+events[j]+' role="tab" data-toggle="tab">'+events[j]+'</a></li>');
			$('#tab-content').append('<div role="tabpanel" class="tab-pane fade in" id="'+events[j]+'">');
		}
		$("#"+events[j]).append('<div class="gallery"><div class="gallery-main-container"><h1 class="gallery-header">'+events[j]+'</h1><table class="gallery-table"><tr><td class="first-col"><div id="'+events[j]+'-gallery-description" class="gallery-description"></div></td><td class="second-col"><img id="'+events[j]+'-gallery-main-photo" class="gallery-main-photo" align="right" /></td></tr></table></div><div id="'+events[j]+'-gallery-photo-selection" class="gallery-photo-selection"></div></div>');
		document.getElementById(events[j] + "-gallery-description").innerHTML = desc[events[j]];
	}
	for(j=0;j<events.length;j++){
		if(imgs[events[j]]){
			document.getElementById(events[j] + "-gallery-main-photo").src = "images/"+events[j] + "/" + imgs[events[j]][0] + img_suffix;
			var divSelector = "#"+events[j]+"-gallery-photo-selection";
		/*
		console.log(imgs[events[j]]);
		console.log(divSelector);
		*/
			var elements = "";
			for(var i = 0; i<imgs[events[j]].length; i++){
				var newElement = '<img src="images/'+events[j]+"/"+imgs[events[j]][i]+img_suffix+'" width="15%" height="auto" class="gallery-photo" />';
				elements = elements + newElement;
				//console.log(newElement);
			}
			$(divSelector).append(elements);
		}
	}
	
	$(".gallery-photo").click(function(){
		console.log($(this));
		var id = $(this).parent().attr('id');
		var event = id.split("-gallery-photo-selection")[0];
		console.log(event);
		$("#"+event+"-gallery-main-photo").attr('src',$(this).attr('src'));
	});
	
});
