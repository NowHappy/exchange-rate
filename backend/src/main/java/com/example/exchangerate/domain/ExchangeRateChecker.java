package com.example.exchangerate.domain;

import com.example.exchangerate.infrastructure.api.vo.ExchangeRateResponse;
import reactor.core.publisher.Mono;

public interface ExchangeRateChecker {

    Mono<ExchangeRateResponse> getRates();

}
