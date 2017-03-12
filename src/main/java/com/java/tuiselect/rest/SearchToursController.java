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

   private final String BASE_URL = "http://agent.tui.ua";
   private RestTemplate restTemplate;
   private HttpHeaders headers;


    @PostConstruct
    public void init(){
        restTemplate = new RestTemplate();
        headers = new HttpHeaders();
    }

    @RequestMapping("/api-agency/search/GetFacetsAndTours")
    public ResponseEntity<String> getAllTours(
        @RequestParam( value = "Country", required = false) String country,
        @RequestParam("NightsFrom") String nightsFrom,
        @RequestParam("NightsTo") String nightsTo,
        @RequestParam("AdultCount") String adultCount,
        @RequestParam(value = "ChildAges", required = false) String childAges,
        @RequestParam("departureCity") String departureCity,
        @RequestParam(value = "TourType", required = false) String tourType,
        @RequestParam(value = "DepartureDate",required = false) String departureDate,
        @RequestParam(value = "Cities", required = false) String cities,
        @RequestParam(value = "Districts", required = false) String districts,
//        @RequestParam("Hotels") String hotels,
//        @RequestParam("HotelCategories") String hotelCategories,
//        @RequestParam("MealTypest") String mealTypes,
//        @RequestParam("ExcursionTours") String excursionTours,
//        @RequestParam("QuotaFlight") String quotaFlight,
        @RequestParam("QuotaHotel") String quotaHotel,
        @RequestParam(value = "NQuotaFlight", required = false) String nQuotaFlight,
        @RequestParam("Currency") String currency,
        @RequestParam("GroupBy") String groupBy,
        @RequestParam("SortBy") String sortBy,
        @RequestParam("SortOrder") String sortOrder,
        @RequestParam(value = "PriceLimit", required = false) String priceLimit) throws Exception {

        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        URI uri = UriComponentsBuilder.fromHttpUrl(BASE_URL)
                .path("api-agency/search/GetFacetsAndTours")
                .queryParam("departureCity",departureCity)
                .queryParam("AdultCount",adultCount)
                .queryParam("NightsFrom",nightsFrom)
                .queryParam("NightsTo",nightsTo)
                .queryParam("NQuotaFlight",nQuotaFlight)
                .queryParam("QuotaHotel",quotaHotel)
                .queryParam("Currency",currency)
                .queryParam("GroupBy",groupBy)
                .queryParam("SortBy",sortBy)
                .queryParam("SortOrder",sortOrder)
                .build().encode().toUri();
        HttpEntity<String> entity = new HttpEntity<>(headers);
        ResponseEntity<String> response  = restTemplate.exchange(uri, HttpMethod.GET,  entity, String.class);
        return response;
    }

}
