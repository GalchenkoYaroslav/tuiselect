/*
sliderInitializator (Bootstrap required)
	id-string with id of slider(carousel) REQUIRED
	slides-array of objects with info for slides initialization REQUIRED
		href-not required-add in case, if the slide has contain not only image, but also be a link
		src-required-link to image, if undefined - image will be broken
		alt-alt attribute for img, recommended at least ""
		if you want add caption, you need to add captionH3 (header 3) AND captionP (paragraph), at least ""
slidesExample=[{
		href:"http://www.tui.ua/hotels/?sort=1#",
		src:"img/hotel.jpg",
		alt:"Премиум отели",
		captionH3:"Премиум отели",
		captionP:"Премиум отели"
	},{
		src:"img/summer.jpg",
		alt:"Летний отпуск",
		captionH3:"Летний отпуск",
		captionP:"Летний отпуск"
	},{
		src:"img/egypt.jpg",
		alt:"Від грипу до єгипту",		
	}];
*/
function sliderInitializator(id, slides){
	var html="";
	html+='<div id="'+id+'" class="carousel slide" data-ride="carousel">';
		html+='<ol class="carousel-indicators">';
		for(var i=0; i<slides.length; i++){
			if (i===0){
				html+='<li data-target="#'+id+'" data-slide-to="'+i+'" class="active"></li>';
			} else {
				html+='<li data-target="#'+id+'" data-slide-to="'+i+'"></li>';
			}
		}
		html+="</ol>";
		html+='<div class="carousel-inner">';
		for(var i=0; i<slides.length; i++){
			if (i===0){
				html+='<div class="item active">';
			} else {
				html+='<div class="item">';
			}
			if(slides[i].hasOwnProperty('href')){
				html+='<a class="slider-link" href="'+slides[i].href+'">';
				html+='<img class="slider-image" alt="'+slides[i].alt+'" src="'+slides[i].src+'">';
				html+='</a>';
			} else {
				html+='<img class="slider-image" alt="'+slides[i].alt+'" src="'+slides[i].src+'">';
			}
			if(slides[i].hasOwnProperty('captionH3')&&slides[i].hasOwnProperty('captionP')){
				html+='<div class="carousel-caption">';
				html+="<h3>"+slides[i].captionH3+"</h3>";
				html+="<p>"+slides[i].captionP+"</p>";
				html+="</div>";		
			}
			html+="</div>"
		}
		html+="</div>";
		html+='<a class="left carousel-control" href="#'+id+'" data-slide="prev">';
		html+='<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>';
		html+='<span class="sr-only">Previous</span>';
		html+='</a>';
		html+='<a class="right carousel-control" href="#'+id+'" data-slide="next">';
		html+='<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>';
		html+='<span class="sr-only">Next</span>';
		html+='</a>';
	html+="</div>";
	return html;
};