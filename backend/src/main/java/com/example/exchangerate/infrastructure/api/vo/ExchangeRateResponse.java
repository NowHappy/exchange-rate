package com.example.exchangerate.infrastructure.api.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class ExchangeRateResponse {

//    {
//        "success":true,
//        "terms":"https:\/\/currencylayer.com\/terms",
//        "privacy":"https:\/\/currencylayer.com\/privacy",
//        "timestamp":1606149666,
//        "source":"USD",
//        "quotes":{
//            "USDKRW":1116.269813,
//            "USDJPY":104.498993,
//            "USDPHP":48.295726
//    }
//    }

    private boolean success;
    private String terms;
    private String privacy;
    private Long timestamp;
    private String source;
    private Quotes quotes;

    @Getter
    @Setter
    public static class Quotes {
        @JsonProperty("USDKRW")
        @JsonFormat(shape = JsonFormat.Shape.NUMBER_FLOAT)
        private BigDecimal USDKRW;
        @JsonProperty("USDJPY")
        @JsonFormat(shape = JsonFormat.Shape.NUMBER_FLOAT)
        private BigDecimal USDJPY;
        @JsonProperty("USDPHP")
        @JsonFormat(shape = JsonFormat.Shape.NUMBER_FLOAT)
        private BigDecimal USDPHP;
    }

}
