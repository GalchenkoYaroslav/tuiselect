// angular.module('myApp').controller('tab1Controller', ['$http', function ($http) {

// 	var ctrl=this;
// 	var initialized=false;
// 	var initRequest=$http.get('Get.json');
// 	initRequest.error(function(){
// 		alert("error get json");
// 	});
// 	initRequest.success(function (data){
// 		ctrl.initialData=data;
// 		console.log(ctrl.initialData);

// 	});

// }]);

angular.module('myApp').controller('tab1Controller', ['$http','$scope', function ($http, $scope) {
	// this.slides=[{
	// 	href:"http://www.tui.ua/hotels/?sort=1#",
	// 	src:"img/hotel.jpg",
	// 	alt:"Премиум отели",
	// 	captionH3:"Премиум отели"
	// },{
	// 	href:"http://www.tui.ua/searchresults/#?DepartureCity=170021&TourType=4&PriceRanges=0_VFK&PriceRanges=9999999_VFK",
	// 	src:"img/summer.jpg",
	// 	alt:"Летний отпуск",
	// 	captionH3:"Летний отпуск"
	// },{
	// 	// href:"http://www.tui.ua/hotels/?sort=1#",
	// 	src:"img/egypt.jpg",
	// 	alt:"Від грипу до єгипту",
	// 	captionH3:"Від грипу до єгипту"
	// }];


	var ctrl=this;

	$scope.price1model="";
    $scope.date1model="";

	ctrl.objFix=function (obj) {
	    var output={};
        for(var i in obj){
            if (obj[i]!==-1 && obj[i]!=="-1" && obj[i]!==null && obj[i]!=="" && obj[i]!==undefined && obj[i]!=="|"){
                output[i]=obj[i];
            }
        }
        return output;
    };
	
	
	ctrl.enable=function () {
        $(".slide-input-toggle").slider("enable");
        $(".input-toggle").prop("disabled", false);
    };
    ctrl.disable=function () {
        $(".slide-input-toggle").slider("disable");
        $(".input-toggle").prop("disabled", true);
    };

	ctrl.initParams={};

    ctrl.initParams.AdultCount=$("#adult-slide").slider("getValue");
    var nightsArr=$("#nights-slide").slider("getValue");
    ctrl.initParams.NightsFrom=Math.min(nightsArr[0], nightsArr[1]);
    ctrl.initParams.NightsTo=Math.max(nightsArr[0], nightsArr[1]);
    ctrl.initParams.DepartureCity=-2;

	var initialized=false;
	//var initRequest=$http.get('http://localhost:8080/api-agency/search/Get');
    var initRequest=$http({
        url: 'http://localhost:8080/api-agency/search/Get',
        method:"GET",
        params: ctrl.initParams
    });
	console.log(typeof (""));
    $scope.data = {
        model: null,
        availableOptions: [
            {id: '0', name: 'Option A'},
            {id: '1', name: 'Option B'},
            {id: '2', name: 'Option C'}
        ]
    };


    $scope.fromData={
        model: null,
        availableOptions: []
    };
    $scope.toData={
        model: null,
        availableOptions: []
    };
    $scope.typeData={
        model: null,
        availableOptions: []
    };
    $scope.resortData={
        model: null,
        availableOptions: []
    };
    $scope.cityData={
        model: null,
        availableOptions: []
    };
    $scope.hcatData={
        model: null,
        availableOptions: []
    };
    $scope.districtData={
        model: null,
        availableOptions: []
    };

    $scope.mealData={
        model: null,
        availableOptions: []
    };

    $scope.hotelData={
        model: null,
        availableOptions: []
    };

    ctrl.date1clear=function () {
        //$("#date1").val("");
        $scope.date1model="";
        ctrl.updateForm();
    };

    ctrl.limitAlert=function () {
        alert($("#price1").val())
    };

    $("#price1").change(function () {
       ctrl.updateForm();
    });


    ctrl.sendObject={};

    // ctrl.adultInfo=$("#adult-slide").slider("getValue");
    // ctrl.nightsInfo=$("#nights-slide").slider("getValue");

    ctrl.buttonText="Wait";

    ctrl.price1=function () {
        //alert($("#price1").val());
        ctrl.updateForm();
    };

    //$("#nights-slide").slider().on('slideStop', function(){console.log("Slder change!")});


    ctrl.modelFix=function(object,value){
        var currentModel=object.model;
        for (var i=0; i<object.availableOptions.length; i++){
            if (object.availableOptions[i].Id===currentModel){
                return;
            }
        }
        object.model=value;
    };



    ctrl.updateForm=function(){
        ctrl.buttonText="Wait";
        ctrl.disable();
        var updateObject={};
        updateObject.DepartureCity=$scope.fromData.model;
        updateObject.TourType=$scope.typeData.model;
        updateObject.Country=$scope.toData.model;
        updateObject.Resorts=$scope.resortData.model;
        updateObject.Cities=$scope.cityData.model;
        updateObject.HotelCategories=$scope.hcatData.model;
        updateObject.Districts=$scope.districtData.model;
        updateObject.MealTypes=$scope.mealData.model;
        updateObject.Hotels=$scope.hotelData.model;
        updateObject.AdultCount=$("#adult-slide").slider("getValue");
        var nightsArr=$("#nights-slide").slider("getValue");
        updateObject.NightsFrom=Math.min(nightsArr[0], nightsArr[1]);
        updateObject.NightsTo=Math.max(nightsArr[0], nightsArr[1]);
        updateObject.PriceLimit=$scope.price1model;
        updateObject.DepartureDate=$scope.date1model + "|" + $scope.date1model;
        var childrenAmount=$("#children-slide").slider("getValue");
        console.log(childrenAmount);
        console.log(typeof (childrenAmount));
        var childrenAgesArr=[];
        switch (childrenAmount){
            case 0:
                $("#child1block").addClass("hide");
                $("#child2block").addClass("hide");
                $("#child3block").addClass("hide");
                break;
            case 1:
                $("#child1block").removeClass("hide");
                $("#child2block").addClass("hide");
                $("#child3block").addClass("hide");
                updateObject.ChildAges=$("#child1age").slider("getValue");
                break;
            case 2:
                $("#child1block").removeClass("hide");
                $("#child2block").removeClass("hide");
                $("#child3block").addClass("hide");
                childrenAgesArr.push($("#child1age").slider("getValue"),$("#child2age").slider("getValue"));
                updateObject.ChildAges=childrenAgesArr;
                break;
            case 3:
                $("#child1block").removeClass("hide");
                $("#child2block").removeClass("hide");
                $("#child3block").removeClass("hide");
                childrenAgesArr.push($("#child1age").slider("getValue"),$("#child2age").slider("getValue"),$("#child3age").slider("getValue"));
                updateObject.ChildAges=childrenAgesArr;
                break;
            default:
                alert("some shit with children!");
        }
        console.log(updateObject);
        var updateRequest=$http({
            url: 'http://localhost:8080/api-agency/search/Get',
            method:"GET",
            params: ctrl.objFix(updateObject)
        });
        updateRequest.error(function(){
            alert("error get update json");
            ctrl.buttonText="Restart page";
            return;
        });
        updateRequest.success(function (data){
            var updateData=data;
            if(updateData==null){
                alert("Updatedata null!");
                ctrl.buttonText="Restart page";
                return;
            }
            ctrl.updateData=data;
            $scope.fromData.availableOptions=updateData.SearchFilter.Filters.DepartureCity.FilterItems;
            $scope.toData.availableOptions=updateData.SearchFilter.Filters.Country.FilterItems;
            $scope.resortData.availableOptions=updateData.SearchFilter.Filters.Resorts.FilterItems;
            $scope.typeData.availableOptions=updateData.SearchFilter.Filters.TourType.FilterItems;
            $scope.cityData.availableOptions=updateData.SearchFilter.Filters.Cities.FilterItems;
            $scope.hcatData.availableOptions=updateData.SearchFilter.Filters.HotelCategories.FilterItems;
            $scope.districtData.availableOptions=updateData.SearchFilter.Filters.Districts.FilterItems;
            $scope.mealData.availableOptions=updateData.SearchFilter.Filters.MealTypes.FilterItems;
            $scope.hotelData.availableOptions=updateData.SearchFilter.Filters.Hotels.FilterItems;
            ctrl.modelFix($scope.fromData,"-2");
            ctrl.modelFix($scope.toData,"-1");
            ctrl.modelFix($scope.resortData,"-1");
            ctrl.modelFix($scope.typeData,"-1");
            ctrl.modelFix($scope.cityData,"-1");
            ctrl.modelFix($scope.hcatData,"-1");
            ctrl.modelFix($scope.districtData,"-1");
            ctrl.modelFix($scope.mealData,"-1");
            ctrl.modelFix($scope.hotelData,"-1");
            console.log(updateData);
            ctrl.buttonText=updateData.SearchResult.TotalOffers;
            ctrl.enable();
            return;
        });
    };







    ctrl.varmy=null;
	initRequest.error(function(){
		alert("error get json");
        ctrl.buttonText="Restart page";
	});
	initRequest.success(function (data){
		ctrl.initialData=data;
		$scope.fromData.availableOptions=ctrl.initialData.SearchFilter.Filters.DepartureCity.FilterItems;
        $scope.toData.availableOptions=ctrl.initialData.SearchFilter.Filters.Country.FilterItems;
        $scope.resortData.availableOptions=ctrl.initialData.SearchFilter.Filters.Resorts.FilterItems;
        $scope.typeData.availableOptions=ctrl.initialData.SearchFilter.Filters.TourType.FilterItems;
        $scope.cityData.availableOptions=ctrl.initialData.SearchFilter.Filters.Cities.FilterItems;
        $scope.hcatData.availableOptions=ctrl.initialData.SearchFilter.Filters.HotelCategories.FilterItems;
        $scope.districtData.availableOptions=ctrl.initialData.SearchFilter.Filters.Districts.FilterItems;
        $scope.mealData.availableOptions=ctrl.initialData.SearchFilter.Filters.MealTypes.FilterItems;
        $scope.hotelData.availableOptions=ctrl.initialData.SearchFilter.Filters.Hotels.FilterItems;
		console.log(ctrl.initialData);
        ctrl.buttonText=ctrl.initialData.SearchResult.TotalOffers;
        $scope.fromData.model="-2";
        $scope.toData.model="-1";
        $scope.resortData.model="-1";
        $scope.typeData.model="-1";
        $scope.cityData.model="-1";
        $scope.hcatData.model="-1";
        $scope.districtData.model="-1";
        $scope.mealData.model="-1";
        $scope.hotelData.model="-1";
        ctrl.enable();
        //ctrl.updateForm();
	});


    // ctrl.updateForm=function(){
    //     ctrl.buttonText="Wait";
	 //    var updateObject={};
    //     updateObject.DepartureCity=$scope.cityData.model;
    //     updateObject.Country=$scope.toData.model;
    //     updateObject.AdultCount=$("#adult-slide").slider("getValue");
    //     var nightsArr=$("#nights-slide").slider("getValue");
    //     updateObject.NightsFrom=Math.min(nightsArr[0], nightsArr[1]);
    //     updateObject.NightsTo=Math.max(nightsArr[0], nightsArr[1]);
    //     var updateRequest=$http({
    //         url: 'http://localhost:8080/api-agency/search/Get',
    //         method:"GET",
    //         params: ctrl.objFix(updateObject)
    //     });
    //     updateRequest.error(function(){
    //         alert("error get update json");
    //         ctrl.buttonText="Restart page";
    //         return;
    //     });
    //     updateRequest.success(function (data){
    //         var updateData=data;
    //         $scope.cityData.availableOptions=updateData.SearchFilter.Filters.DepartureCity.FilterItems;
    //         $scope.toData.availableOptions=updateData.SearchFilter.Filters.Country.FilterItems;
    //         console.log(updateData);
    //         ctrl.buttonText=updateData.SearchResult.TotalOffers;
    //         return;
    //     });
    // };

    $("#nights-slide").slider().on('slideStop', ctrl.updateForm);
    $("#adult-slide").slider().on('slideStop', ctrl.updateForm);
    $("#children-slide").slider().on('slideStop', ctrl.updateForm);
    $("#child1age").slider().on('slideStop', ctrl.updateForm);
    $("#child2age").slider().on('slideStop', ctrl.updateForm);
    $("#child3age").slider().on('slideStop', ctrl.updateForm);

	ctrl.gotoSearch = function(){

		if($scope.fromData.model===null && $scope.toData.model===null){
			alert("From required!");
			return;
		}
        var updateObject={};
        updateObject.DepartureCity=$scope.fromData.model;
        updateObject.TourType=$scope.typeData.model;
        updateObject.Country=$scope.toData.model;
        updateObject.Resorts=$scope.resortData.model;
        updateObject.Cities=$scope.cityData.model;
        updateObject.HotelCategories=$scope.hcatData.model;
        updateObject.Districts=$scope.districtData.model;
        updateObject.MealTypes=$scope.mealData.model;
        updateObject.Hotels=$scope.hotelData.model;
        updateObject.AdultCount=$("#adult-slide").slider("getValue");
        var nightsArr=$("#nights-slide").slider("getValue");
        updateObject.NightsFrom=Math.min(nightsArr[0], nightsArr[1]);
        updateObject.NightsTo=Math.max(nightsArr[0], nightsArr[1]);
        updateObject.PriceLimit=$scope.price1model;
        updateObject.DepartureDate=$scope.date1model + "|" + $scope.date1model;
        var childrenAmount=$("#children-slide").slider("getValue");
        console.log(childrenAmount);
        console.log(typeof (childrenAmount));
        var childrenAgesArr=[];
        switch (childrenAmount){
            case 0:
                break;
            case 1:
                updateObject.ChildAges=$("#child1age").slider("getValue");
                break;
            case 2:
                childrenAgesArr.push($("#child1age").slider("getValue"),$("#child2age").slider("getValue"));
                updateObject.ChildAges=childrenAgesArr;
                break;
            case 3:
                childrenAgesArr.push($("#child1age").slider("getValue"),$("#child2age").slider("getValue"),$("#child3age").slider("getValue"));
                updateObject.ChildAges=childrenAgesArr;
                break;
            default:
                alert("some shit with children!");
        }
        ctrl.sendObject=updateObject;
        // ctrl.sendObject.DepartureCity=$scope.fromData.model;
        // ctrl.sendObject.Country=$scope.toData.model;
        // ctrl.sendObject.AdultCount=$("#adult-slide").slider("getValue");
        // var nightsArr=$("#nights-slide").slider("getValue");
        // ctrl.sendObject.NightsFrom=Math.min(nightsArr[0], nightsArr[1]);
        // ctrl.sendObject.NightsTo=Math.max(nightsArr[0], nightsArr[1]);
		sessionStorage.setItem("TuiSearch1protoFrom", JSON.stringify(ctrl.objFix(ctrl.sendObject)));
		document.location.href = "search1.html";

		//localStorage.setItem("Yaroslav", ctrl.initialData.SearchFilter.Filters.CitiesFacet.FilterItems[3].Text)
		console.log(ctrl.initialData);
	};
}]);