package com.example.exchangerate.web;

import com.example.exchangerate.application.ExchangeRateHandler;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.http.MediaType.APPLICATION_JSON;

@Slf4j
@RestController
public class ApiController {

    private static ObjectMapper objectMapper = new ObjectMapper();

    @Bean
    public RouterFunction<ServerResponse> routes(ExchangeRateHandler exchangeRateHandler) {
        return RouterFunctions.route()
            .path("/api", b1 ->
                b1.path("/rates",
                        b2 -> b2.nest(RequestPredicates.accept(APPLICATION_JSON),
                                      b3 -> b3.GET("", exchangeRateHandler::getRates)
                        ))
            )
            .build();
    }

}