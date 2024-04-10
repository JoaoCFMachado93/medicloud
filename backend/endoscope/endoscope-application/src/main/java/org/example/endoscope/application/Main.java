package org.example.endoscope.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"org.example.endoscope"})
public class Main {

    protected Main() {
    }

    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }
}