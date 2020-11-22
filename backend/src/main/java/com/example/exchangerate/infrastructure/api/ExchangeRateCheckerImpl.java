package com.example.exchangerate.infrastructure.api;

import com.example.exchangerate.domain.ExchangeRateChecker;
import com.example.exchangerate.infrastructure.api.vo.ExchangeRateResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Slf4j
@Component
public class ExchangeRateCheckerImpl implements ExchangeRateChecker {

    @Autowired
    private CurrencyLayerProperties currencyLayerProperties;

    transient private WebClient webClient;

    public ExchangeRateCheckerImpl(@Value("${domain.currency-layer}") String domain) {
        this.webClient = WebClient.builder()
            .baseUrl(domain)
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
            .build();
    }

    @Override
    public Mono<ExchangeRateResponse> getRates() {


        return webClient.get()
            .uri(uriBuilder -> uriBuilder.path("/live")
                .queryParam("access_key", currencyLayerProperties.getAccessKey())
                .queryParam("source", currencyLayerProperties.getSource())
                .queryParam("currencies", currencyLayerProperties.getCurrencies())
                .queryParam("format", "1")
                    .build())
            .retrieve()
            .bodyToMono(ExchangeRateResponse.class);
    }

}

