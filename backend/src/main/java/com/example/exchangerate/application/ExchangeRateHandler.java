package com.example.exchangerate.application;

import com.example.exchangerate.domain.ExchangeRateChecker;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.web.reactive.function.server.ServerResponse.ok;

@Service
public class ExchangeRateHandler {

    private final ExchangeRateChecker exchangeRateChecker;

    public ExchangeRateHandler(ExchangeRateChecker exchangeRateChecker) {
        this.exchangeRateChecker = exchangeRateChecker;
    }

    public Mono<ServerResponse> getRates(ServerRequest request) {
        return exchangeRateChecker.getRates()
            .flatMap(rates -> ok()
                .contentType(APPLICATION_JSON)
                .bodyValue(rates));
    }

}
