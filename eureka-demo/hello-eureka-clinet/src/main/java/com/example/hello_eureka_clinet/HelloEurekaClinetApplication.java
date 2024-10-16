package com.example.hello_eureka_clinet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient

public class HelloEurekaClinetApplication {

	public static void main(String[] args) {

		SpringApplication.run(HelloEurekaClinetApplication.class, args);
		System.out.println("client started");
	}

}
