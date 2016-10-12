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
	var state = 'play';
	this.icon = '#toggle';
	
	$(this.icon).on("click", change_marquee);
		
	//$("#news").children("#3").on("click", show_details('2'));
	//$("#news").children("#2").on("click", show_details('1'));
	$("#news").children().on("click", show_details('0'));
		
	
	function change_marquee() {
		var marquee = document.getElementById("news");
		if (state == 'play')
		{
			$("#toggle").attr("src", "data/play.png");
			state = 'pause';
			$("#news").attr("class", "marquee_paused");
		}
		
		else
		{
			$("#toggle").attr("src", "data/pause.png");
			state = 'play';
			$("#news").attr("class", "marquee");
		}
	};
	
	
	function show_details(index) {
		var Template = $("#news-detail-template").html();
		var html_Maker = new htmlMaker(Template); 
		var Html = html_Maker.getHTML(data[index]); 
		$("#detail").html(Html);
	};
	
}
