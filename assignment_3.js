$(document).ready( function() {
	var marquee = new Marquee(news["news"]);
});

function Marquee(data) {
	
	var self = this;
	this.state = 'play';
	this.icon = '#toggle';
	this.news = data;
	this.news_item = ".news_item"
		
		
	var change_marquee_function=function(){
		self.change_marquee.call(self);
	};
	
	var show_details_function=function(id){
		self.show_details.call(self, id);
	}
	
	$(this.icon).on("click", change_marquee_function);
	
	this.load_news(data);

	
	$(this.news_item).on("click", function() {
		console.log(this);
		var val = $(this).attr("news_id");
		show_details_function(val);
	});

}


Marquee.prototype.load_news = function(data) {
		var template = $("#news-item-template").html(); //get the marquee template
		var html_maker = new htmlMaker(template); //create an html Maker
		var html = html_maker.getHTML(data); //generate dynamic HTML based on the news data
		$("#news").html(html);
};


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
