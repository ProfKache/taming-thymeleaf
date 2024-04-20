package com.tamingthymeleaf.tamingthymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/")
public class IndexController {

    @GetMapping
    public String index(Model model) {
        int followerCount = 10;

        model.addAttribute("followerCount", followerCount);
        model.addAttribute("pageTitle", "Taming Thymeleaf");
        model.addAttribute("programmers", List.of(
                "Salim Kachemela",
                "Neils Bohr",
                "Albert Einstein"));
        return "index";
    }
}
