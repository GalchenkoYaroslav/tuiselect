package com.java.tuiselect.rest;

/**
 * Created by Yaroslav on 09.03.2017.
 */

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();


    public Map<String,String> greeting(@RequestParam(value="name", defaultValue="World") String name) {
        Map<String, String> map = new HashMap<String,String>();
        map.put("one", "two");
        return map;
    }
}