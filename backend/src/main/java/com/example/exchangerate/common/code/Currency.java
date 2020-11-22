package com.example.exchangerate.common.code;

public enum Currency {

    USD, KRW, JPY, PHP;

    public String getCode() {
        return name().toLowerCase();
    }

}
