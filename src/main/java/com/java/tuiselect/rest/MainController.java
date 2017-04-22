package com.java.tuiselect.rest;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by Yaroslav on 22.04.2017.
 */
@Controller
public class MainController {

    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public String goIndex() {
        return "index.html";
    }

}