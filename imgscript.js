var events = ["Athletics", "Badminton", "Basketball", "Debating", "Football", "Knitting", "Mathematics", "Photography", "Rounders", "Rugby", "Swimming", "Tennis","Tug", "Volleyball"];
var imgs = {};
var desc = {};
var img_suffix = ".jpg";

desc.Athletics = "Athletics is a interhouse event where each student from each year participates in different olympic events such as 100m, 200m, 400m, 800m, 1500m, 4 x 100m for track events and high jump, long jump, shotput, triple jump, javelin etc.. for field events. Students are required to participate in these events and the best for each event gets chosen to represent our house during the annual sports day.";

imgs.Badminton = ["IMG_6890","IMG_6905","IMG_6912","IMG_6925","IMG_6946","IMG_6951","IMG_6953","IMG_6975","IMG_6977","IMG_7002","IMG_7024","IMG_7057","IMG_7067","IMG_7081","IMG_7086"];
desc.Badminton = "Interhouse badminton is an enjoyable but challenging event. This year Rowell did rather well, winning quite a few matches. The event is divided by year group, with all players being divided into two teams: elite and non-elite. In each team, there are 3 singles and 2 doubles games. After each team plays against each house, the team that has won the most games wins the entire event. It&#39;s a very fun event, especially with all the players encouraging each other. Although some people are less experienced in badminton, they still joined due to their house spirit, which is specifically what makes us proud.";

imgs.Basketball = ["DSC_0085","DSC_0086","DSC_0087","DSC_0088","DSC_0093","DSC_0096","DSC_0099","DSC_0104","DSC_0107","DSC_0110"];
desc.Basketball = "Throughout the term, A, B, C, and D Grade all participated in the interhouse basketball competition. For all those who took part, congratulations! We did very well as a house.";

imgs.Debating = ["img1"];
desc.Debating = "Interhouse debating is an intellectual and competitive event, based on the standard parliamentary debate structure found in competitions. Teams of three work together on a motion given to them a few days prior, and give passionate and well reasoned individual speeches on one side of the debate. A combination of strong tactical arguments and persuasive speaking is therefore required to succeed at this event.";

imgs.Football = ["IMAGE04","IMAGE08","IMAGE11","IMAGE13","IMAGE15","IMAGE20","IMAGE21","IMAGE22","IMAGE34","IMAGE42"];
desc.Football = "This year Rowell House performed exceptionally well in the Interhouse football competition. After a rather rough start with the A grade boys, our Open grade girls team stepped up to the platter and performed admirably, finishing first! This was then followed up with strong performances in the B grade, C grade and D grade boys competitions. Overall we finished in second place, which was extremely impressive - we hope to take the top spot next year!";

desc.Knitting = "Knitting is one of the most rewarding events of the school year. We compete to knit the most squares to create blankets that will get donated. It&#39;s simple and easy for everyone to participate in and you may get to learn a new skill because of it.";

imgs.Mathematics = ["DSC_0072","DSC_0073","DSC_0075","DSC_0078","DSC_0081"];
desc.Mathematics = "Interhouse mathematics was a new and exciting event this year. It involved all the year groups and almost every single maths class across a timespan of one week. Students were split into groups and given a set period of time to solve mathematically stimulating questions. Rowell managed to place third in the overall standings for this event, a ranking that we hope to improve in the coming years. Overall it was an intriguing and fruitful experience.";

desc.Photography = "Interhouse Photography: Rowell has definitely got some keen photographers. Us Rowell media captains have seen some stunning submission across all year groups from last year&#39;s Interhouse Photography competition. The participation for this event was the most impressive, and it&#39;s brilliant to see Rowell so eager to commit to house events.";

desc.Rounders = "This year for interhouse rounders, Rowell did extremely well taking into account that we were short of numbers for almost all the age groups. In spite of having only seven girls for the year sevens. We smashed each of our games winning by far. Most of our other matches were won with well composed teams for each age group. Overall winning it for both year seven teams as well as year eight girls.";

desc.Rugby = "Interhouse touch rugby is a fun filled event where participants have to run, kick, pass the ball in order to touch the ball into the opposition&#39;s end goal in order to score. Passing the ball only backwards! The game requires respect and teamwork in order to win. It may be one of the smaller events but it is equally important which is why everyone should participate.";

imgs.Swimming = ["1","10","11","12","13","14","15","16","17","18","19","2","20","21","22","23","24","25","26","27","28","29","3","30","31","32","33","34","35","36","37","38","39","4","40","41","42","43","44","5","6","7","8","9"];
desc.Swimming = "Swimming Gala is a swimming competition between four houses consisting of various swimming strokes. The swim captains have the job to ensure that every individual supports Rowell especially the ones that are taking part in the event. Participation is the main key in this event inclusive of having fun as well as striving to win swim gala.";

desc.Tennis = "Interhouse tennis has started off fairly well for Rowell. Although the competition has not finished yet, Rowell house has had a very strong start with Jahan Balani and Alan Sou performing admirably in the B Grade Boys tournament. We hope Rowell House can continue perform to the high level set by the B Grade Boys and win the Interhouse Competition!";

desc.Tug = "Tug of War is an inter-house event for Middle School that takes place on the field every year. It is an intense game of tugging to win, made up of teams from each tutor group. Winners of each competition will get to the next level, and the best team wins overall.";

imgs.Volleyball = ["IMG_5248","IMG_5249","IMG_5250","IMG_5251","IMG_5252","IMG_5258","IMG_5259","IMG_5260","IMG_5261","IMG_5262","IMG_5263","IMG_5264"];
desc.Volleyball = "Volleyball is a team sport in which two teams of six players are separated by a net whereby each team scores points by grounding a ball on the other team&#39;s court. It is a great sport that can be enjoyed regardless of age and skill levels, and develops your coordination, reflexes and balance on top of teamwork and communication skills. As captains we encourage you to drop by and try out the game as we&#39;re sure you’ll enjoy it.";

$(document).ready(function(){
	var j = 0;
	for(j=0;j<events.length;j++){
		var label = events[j];
		if(events[j] == "Tug"){
			label = "Tug of War";
		}
		if(j==0){
			$("#nav-tabs").append('<li role="presentation" class="active"><a href="#'+events[j]+'" aria-controls="'+events[j]+' role="tab" data-toggle="tab">'+label+'</a></li>');
			$('#tab-content').append('<div role="tabpanel" class="tab-pane fade in active" id="'+events[j]+'">');
		}else{
			$("#nav-tabs").append('<li role="presentation"><a href="#'+events[j]+'" aria-controls="'+events[j]+' role="tab" data-toggle="tab">'+label+'</a></li>');
			$('#tab-content').append('<div role="tabpanel" class="tab-pane fade in" id="'+events[j]+'">');
		}
		if(imgs[events[j]]){
			$("#"+events[j]).append('<div class="gallery"><div class="gallery-main-container"><h1 class="gallery-header">'+label+'</h1><table class="gallery-table"><tr><td class="first-col"><div id="'+events[j]+'-gallery-description" class="gallery-description"></div></td><td class="second-col"><img id="'+events[j]+'-gallery-main-photo" class="gallery-main-photo" align="right" /></td></tr></table></div><div id="'+events[j]+'-gallery-photo-selection" class="gallery-photo-selection"></div></div>');
		}else{
			$("#"+events[j]).append('<div class="gallery"><div class="gallery-main-container"><h1 class="gallery-header">'+label+'</h1><table class="gallery-table"><tr><td class="first-col"><div id="'+events[j]+'-gallery-description" class="gallery-description"></div></td></table></div><div id="'+events[j]+'-gallery-photo-selection" class="gallery-photo-selection"></div></div>');
		}
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
