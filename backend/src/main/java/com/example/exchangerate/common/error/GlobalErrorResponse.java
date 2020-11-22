package com.example.exchangerate.common.error;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
public class GlobalErrorResponse {

    private Header header;

    public GlobalErrorResponse() {
        this.header = new Header();
    }

    public GlobalErrorResponse(int resultCode, String resultMessage, Boolean isSuccessful) {
        this.header = new Header(resultCode, resultMessage, isSuccessful);
    }

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Header {

        private int resultCode = 0;
        private String resultMessage = "";
        private Boolean isSuccessful = true;

    }

}
