package com.api.config;

import org.keycloak.adapters.springboot.KeycloakSpringBootConfigResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import feign.RequestInterceptor;

@Configuration
public class KeycloackConfig {

	@Bean
	KeycloakSpringBootConfigResolver configResolver() {
		return new KeycloakSpringBootConfigResolver();
	}
	 
}
