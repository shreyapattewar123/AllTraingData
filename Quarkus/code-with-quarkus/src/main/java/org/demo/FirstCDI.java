package org.demo;

import jakarta.enterprise.context.RequestScoped;

@RequestScoped
public class FirstCDI {
    public String getFirst(){
        return "Hello from CDI"; //context and dependency injection

    }
}
