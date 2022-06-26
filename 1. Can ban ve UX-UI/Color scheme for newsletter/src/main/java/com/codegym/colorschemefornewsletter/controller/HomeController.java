package com.codegym.colorschemefornewsletter.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {
    @GetMapping
    public ModelAndView getHome(){
        return new ModelAndView("home");
    }
    @GetMapping("/color1")
    public ModelAndView getColor1(){
        return new ModelAndView("color1");
    }
    @GetMapping("/color2")
    public ModelAndView getColor2(){
        return new ModelAndView("color2");
    }
}
