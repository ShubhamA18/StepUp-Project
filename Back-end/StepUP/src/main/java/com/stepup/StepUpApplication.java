package com.stepup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class StepUpApplication {

	public static void main(String[] args) {
		SpringApplication.run(StepUpApplication.class, args);
	}

}
