angular.module('myApp').controller('TopSliderController', function ($scope) {
	$scope.slides=[{
		href:"http://www.tui.ua/hotels/?sort=1#",
		src:"img/hotel.jpg",
		alt:"Премиум отели",
		captionH3:"Премиум отели"
	},{
		href:"http://www.tui.ua/searchresults/#?DepartureCity=170021&TourType=4&PriceRanges=0_VFK&PriceRanges=9999999_VFK",
		src:"img/summer.jpg",
		alt:"Летний отпуск",
		captionH3:"Летний отпуск"
	},{
		// href:"http://www.tui.ua/hotels/?sort=1#",
		src:"img/egypt.jpg",
		alt:"Від грипу до єгипту",
		captionH3:"Від грипу до єгипту"
	}];
});