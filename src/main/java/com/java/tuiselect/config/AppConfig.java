package com.java.tuiselect.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import javax.validation.Validation;
import javax.validation.Validator;
/**
 * Created by Yaroslav on 11.03.2017.
 */
@Configuration
public class AppConfig {
    private final String JERSEY_PATH  = "spring.jersey.application-path";

    @Autowired
    Environment environment;

    @Bean
    public Validator validator() {
        return Validation.buildDefaultValidatorFactory().getValidator();
    }


}
