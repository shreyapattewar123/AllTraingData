package com.example.hello_greet;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class HelloGreetApplication {
	@GetMapping("/")
public String greet(){
	return "hello from eureka client";
}
	public static void main(String[] args) {

		SpringApplication.run(HelloGreetApplication.class, args);
		System.out.println("gretting api gateway");
	}
}
