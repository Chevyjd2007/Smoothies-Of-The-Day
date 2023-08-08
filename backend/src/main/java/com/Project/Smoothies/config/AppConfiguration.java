package com.Project.Smoothies.config;


import org.modelmapper.ModelMapper;
import org.modelmapper.internal.bytebuddy.matcher.StringMatcher;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@Configuration
public class AppConfiguration {

    @Bean
    public ModelMapper modelMapper() {return new ModelMapper();}
    }

