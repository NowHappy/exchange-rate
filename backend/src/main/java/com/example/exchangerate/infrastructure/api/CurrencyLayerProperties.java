package com.example.exchangerate.infrastructure.api;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.io.Serializable;

@Getter
@Setter
@Configuration
@ConfigurationProperties(prefix = "currencylayer")
public class CurrencyLayerProperties implements Serializable {

    private String accessKey;
    private String source;
    private String currencies;

}
