$(document).ready(load_news);

function load_news() {
	
	var data = news["news"];
	var template = $("#news-item-template").html(); //get the marquee template
	var html_maker = new htmlMaker(template); //create an html Maker
	var html = html_maker.getHTML(data); //generate dynamic HTML based on the news data
	$("#news").html(html);
	
	var marquee = new Marquee(data);
}


function Marquee(data) {
	
	var self = this;
	this.state = 'play';
	this.icon = '#toggle';
	this.news = news["news"];
		
		
	var change_marquee_function=function(){
		self.change_marquee.call(self);
	};
	
	var show_details_function=function(id){
		self.show_details.call(self, id);
	}
	
	
	$(this.icon).on("click", change_marquee_function);
	//$("#news").on("click", show_details_function);
	$("#news").on("click",function() {
		var val = $(this).attr("news_id");
	 	val = parseInt(val);
	    show_details_function(val);
 	   });
}

Marquee.prototype.change_marquee = function() {
	var marquee = document.getElementById("news");
	if (this.state == 'play')
	{
		$("#toggle").attr("src", "data/play.png");
		this.state = 'pause';
		$("#news").attr("class", "marquee_paused");
	}
	
	else
	{
		$("#toggle").attr("src", "data/pause.png");
		this.state = 'play';
		$("#news").attr("class", "marquee");
	}
};


Marquee.prototype.show_details = function(news_id) {
	for (var key = 0; key < 5; key++) {
		    if (news_id == this.news[key]["id"]) {
				var Template = $("#news-detail-template").html();
				var html_Maker = new htmlMaker(Template); 
		        var Html = html_Maker.getHTML(this.news[key]);
		        $("#detail").html(Html);  
		    }
		}
}
