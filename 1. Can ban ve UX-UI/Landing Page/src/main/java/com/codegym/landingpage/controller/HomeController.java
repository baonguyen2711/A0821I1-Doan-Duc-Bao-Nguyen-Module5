package com.codegym.landingpage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
    @GetMapping
    public ModelAndView getHome(){
        return new ModelAndView("index");
    }
}
