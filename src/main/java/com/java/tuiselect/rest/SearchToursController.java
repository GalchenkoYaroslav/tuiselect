package com.java.tuiselect.rest;


import org.springframework.http.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import javax.annotation.PostConstruct;
import java.net.URI;
import java.util.Arrays;


/**
 * Created by Yaroslav on 12.03.2017.
 */

@RestController
public class SearchToursController {

   private final String BASE_URL = "http://vt-api.tui.ru:8965";
   private RestTemplate restTemplate;
   private HttpHeaders headers;

    @PostConstruct
    public void init(){
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
    }

    @RequestMapping("/api-agency/search/GetFacetsAndTours")
    public ResponseEntity<String> getFacetsAndTours(
        @RequestParam( value = "Country", required = false) Integer country,
        @RequestParam(value = "NightsFrom", required = false) Integer nightsFrom,
        @RequestParam(value = "NightsTo", required = false) Integer nightsTo,
        @RequestParam(value = "AdultCount", required = false) Integer adultCount,
        @RequestParam(value = "ChildAges", required = false) Integer childAges,
        @RequestParam(value = "DepartureCity", required = false) Integer departureCity,
        @RequestParam(value = "TourType", required = false) Integer tourType,
        @RequestParam(value = "DepartureDate",required = false) String departureDate,
        @RequestParam(value = "Resorts",required = false) Integer resorts,
        @RequestParam(value = "Cities", required = false) Integer cities,
        @RequestParam(value = "Districts", required = false) Integer districts,
        @RequestParam(value = "Hotels", required = false) Integer hotels,
        @RequestParam(value = "HotelCategories", required = false) Integer hotelCategories,
        @RequestParam(value = "MealTypest", required = false) Integer mealTypes,
        @RequestParam(value = "ExcursionTours", required = false) Integer excursionTours,
        @RequestParam(value = "QuotaFlight", required = false) String quotaFlight,
        @RequestParam(value = "QuotaHotel", required = false) String quotaHotel,
        @RequestParam(value = "NQuotaFlight", required = false) String nQuotaFlight,
        @RequestParam(value = "Currency", required = false) String currency,
        @RequestParam(value = "GroupBy", required = false) String groupBy,
        @RequestParam(value = "SortBy", required = false) String sortBy,
        @RequestParam(value = "SortOrder", required = false) String sortOrder,
        @RequestParam(value = "Page", required = false) String page,
        @RequestParam(value = "PriceLimit", required = false) Integer priceLimit) throws Exception {

        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        URI uri = UriComponentsBuilder.fromHttpUrl(BASE_URL)
                .path("api-agency/search/GetFacetsAndTours")
                .queryParam("DepartureCity",departureCity)
                .queryParam("AdultCount",adultCount)
                .queryParam("NightsFrom",nightsFrom)
                .queryParam("NightsTo",nightsTo)
                .queryParam("NQuotaFlight",nQuotaFlight)
                .queryParam("QuotaHotel",quotaHotel)
                .queryParam("Currency",currency)
                .queryParam("GroupBy",groupBy)
                .queryParam("SortBy",sortBy)
                .queryParam("SortOrder",sortOrder)
                .queryParam("Country",country)
                .queryParam("ChildAges",childAges)
                .queryParam("TourType",  tourType)
                .queryParam("DepartureDate",departureDate)
                .queryParam("Resorts", resorts)
                .queryParam("Cities", cities)
                .queryParam("Districts", districts)
                .queryParam( "Hotels", hotels)
                .queryParam("HotelCategories", hotelCategories)
                .queryParam("MealTypest", mealTypes)
                .queryParam("ExcursionTours", excursionTours)
                .queryParam("QuotaFlight", quotaFlight)
                .queryParam("Page", page)
                .queryParam("PriceLimit", priceLimit)
                .build().encode().toUri();
        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<String> response  = restTemplate.exchange(uri, HttpMethod.GET,  entity, String.class);
        return response;
    }

    @RequestMapping("/api-agency/search/Get")
    public ResponseEntity<String> getSearchFilters(
            @RequestParam( value = "Country", required = false) Integer country,
            @RequestParam(value = "NightsFrom", required = false) Integer nightsFrom,
            @RequestParam(value = "NightsTo", required = false) Integer nightsTo,
            @RequestParam(value = "AdultCount", required = false) Integer adultCount,
            @RequestParam(value = "ChildAges", required = false) Integer childAges,
            @RequestParam(value = "DepartureCity", required = false) Integer departureCity,
            @RequestParam(value = "TourType", required = false) Integer tourType,
            @RequestParam(value = "DepartureDate",required = false) String departureDate,
            @RequestParam(value = "Resorts",required = false) Integer resorts,
            @RequestParam(value = "Cities", required = false) Integer cities,
            @RequestParam(value = "Districts", required = false) Integer districts,
            @RequestParam(value = "Hotels", required = false) Integer hotels,
            @RequestParam(value = "HotelCategories", required = false) Integer hotelCategories,
            @RequestParam(value = "MealTypes", required = false) Integer mealTypes,
            @RequestParam(value = "ExcursionTours", required = false) Integer excursionTours,
            @RequestParam(value = "QuotaFlight", required = false) String quotaFlight,
            @RequestParam(value = "QuotaHotel", required = false) String quotaHotel,
            @RequestParam(value = "PriceLimit", required = false) Integer priceLimit) throws Exception {

        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        URI uri = UriComponentsBuilder.fromHttpUrl(BASE_URL)
                .path("api-agency/search/Get")
                .queryParam("DepartureCity",departureCity)
                .queryParam("AdultCount",adultCount)
                .queryParam("NightsFrom",nightsFrom)
                .queryParam("NightsTo",nightsTo)
                .queryParam("QuotaHotel",quotaHotel)
                .queryParam("Country",country)
                .queryParam("ChildAges",childAges)
                .queryParam("TourType",  tourType)
                .queryParam("DepartureDate",departureDate)
                .queryParam("Resorts", resorts)
                .queryParam("Cities", cities)
                .queryParam("Districts", districts)
                .queryParam( "Hotels", hotels)
                .queryParam("HotelCategories", hotelCategories)
                .queryParam("MealTypest", mealTypes)
                .queryParam("ExcursionTours", excursionTours)
                .queryParam("QuotaFlight", quotaFlight)
                .queryParam("PriceLimit", priceLimit)
                .build().encode().toUri();
        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<String> response  = restTemplate.exchange(uri, HttpMethod.GET,  entity, String.class);
        return response;
    }

}
