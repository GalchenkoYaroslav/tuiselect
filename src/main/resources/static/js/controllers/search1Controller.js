/**
 * Created by bpali on 25.03.2017.
 */
angular.module('search1app').controller('search1Controller', ['$http', function ($http, $scope) {
	var ctrl=this;
	ctrl.cityid=sessionStorage.getItem("TuiSearch1protoFrom");
	ctrl.cityid=JSON.parse(ctrl.cityid);
	sessionStorage.removeItem("TuiSearch1protoFrom");
	ctrl.idCorrect = function (correctStr) {
		return ctrl.cityid===correctStr;
	};
    // $scope.fromData={
    //     model: null,
    //     availableOptions: []
    // };
    // $scope.toData={
    //     model: null,
    //     availableOptions: []
    // };
	console.log(ctrl.idCorrect("170021"));
	var hardRequest=$http.get('http://localhost:8080/api-agency/search/GetFacetsAndTours?DepartureCity='+ctrl.cityid+'&AdultCount=1&NightsFrom=1&NightsTo=28&QuotaFlight=Yes%7CRequest&QuotaHotel=Yes%7CRequest&Currency=VFK&GroupBy=tour&SortBy=price&SortOrder=asc');
	var hardR=$http({
		url: 'http://localhost:8080/api-agency/search/GetFacetsAndTours?QuotaFlight=Yes%7CRequest&QuotaHotel=Yes%7CRequest&Currency=VFK&GroupBy=tour&SortBy=price&SortOrder=asc',
		method:"GET",
		params: ctrl.cityid
	});
	ctrl.hardRequestAttempt=false;
	hardR.error(function () {
		alert("hardR error!");
		ctrl.hardRequestAttempt=true;
		ctrl.hardRequestSuccess=false;
	});
	hardR.success(function (data) {
		ctrl.result=data;
		ctrl.hardRequestAttempt=true;
		ctrl.hardRequestSuccess=true;
		ctrl.forOutput=ctrl.result.SearchResult.SearchResultItems;
	});
	ctrl.showError=function () {
		return ctrl.hardRequestAttempt&&!ctrl.hardRequestSuccess;
	};
	ctrl.showSuccess=function () {
		return ctrl.hardRequestAttempt&&ctrl.hardRequestSuccess;
	};
	console.log(ctrl.result);
	var init=$http.get("http://localhost:8080/api-agency/search/Get");
	init.error(function () {
		alert("init error!");
    });
	init.success(function (data) {
        ctrl.initialData=data;
        $scope.fromData.availableOptions=ctrl.initialData.SearchFilter.Filters.DepartureCity.FilterItems;
        $scope.toData.availableOptions=ctrl.initialData.SearchFilter.Filters.Country.FilterItems;
        $scope.fromData.model="-2";
        $scope.toData.model="-1";
    });
}]);