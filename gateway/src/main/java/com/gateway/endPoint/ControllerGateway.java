package com.gateway.endPoint;

import java.security.Principal;

import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import reactor.core.publisher.Mono;

@RestController
public class ControllerGateway {

	@GetMapping("/info")
	public String index(Principal principal) {
		return principal.getName();
	}

	@GetMapping(value = "/")
	public Mono<String> getHome(@RegisteredOAuth2AuthorizedClient OAuth2AuthorizedClient authorizedClient) {
		return Mono.just(authorizedClient.getAccessToken().getTokenValue());
	}

	public static Mono<Jwt> jwt() {
		return ReactiveSecurityContextHolder.getContext().map(context -> {
			context.getAuthentication().getPrincipal();
			System.out.println(context.getAuthentication().getPrincipal());
			return context.getAuthentication().getPrincipal();
		}).cast(Jwt.class);
	}
}
