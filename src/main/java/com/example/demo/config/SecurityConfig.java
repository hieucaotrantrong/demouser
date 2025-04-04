package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/api/users/**", "/h2-console/**").permitAll() // Cho phép truy cập H2 Console
                .requestMatchers("/**").permitAll()
                .and()
                .formLogin().disable()
                .headers().frameOptions().disable(); // Cho phép H2 Console hiển thị trong iframe
        return http.build();
    }
}