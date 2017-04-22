/**
 * Created by bpali on 25.03.2017.
 */

$.getJSON("http://sample-env.cqmphtj2ca.eu-west-2.elasticbeanstalk.com/api-agency/search/GetFacetsAndTours?DepartureCity=170021&AdultCount=1&NightsFrom=1&NightsTo=28&QuotaFlight=Yes%7CRequest&QuotaHotel=Yes%7CRequest&Currency=VFK&GroupBy=tour&SortBy=price&SortOrder=asc", function(data){
	console.log(data);
});
