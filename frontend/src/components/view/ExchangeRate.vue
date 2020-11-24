<template>
  <b-container>
    <b-row class="my-5">
      <h1>환율 계산</h1>
    </b-row>

    <b-row class="my-1">
      <h6>송금국가: 미국(USD)</h6>
    </b-row>
    <b-row class="my-1">
      <span>수취국가:</span>
      <b-dropdown :text="selectedCurrencyStr" variant="outline-dark">
        <b-dropdown-item v-for="currency in CODES.CURRENCY"
                         :key="currency.code"
                          @click="selectCurrency(currency)">
          {{ currency.displayName }}
        </b-dropdown-item>
      </b-dropdown>
    </b-row>
    <b-row class="my-1">
      <span>환율: {{ selectedCurrencyRate }}{{ selectedCurrency }}/USD</span>
    </b-row>
    <b-row class="my-1">
      <span>송금액: </span>
      <input type="number" min="0" max="10000" ref="inputVal"/> USD
    </b-row>
    <b-row class="my-1">
      <b-button @click="setResult">Submit</b-button>
    </b-row>

    <b-row class="my-1">
      <span>{{ result }}</span>
    </b-row>

  </b-container>
</template>

<script>
import { BDropdown } from 'bootstrap-vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    BDropdown
  },
  created() {
    this.getRates()
  },
  data() {
    return {
      selectedCurrencyStr: '한국(KRW)',
      selectedCurrency: 'KRW',
      result: ''
    }
  },
  computed: {
    ...mapState('API', ['rates']),
    selectedCurrencyRate() {
      if(this.rates.quotes) {
        return this.rates.quotes[`USD${this.selectedCurrency}`]
      }
    }
  },
  methods: {
    ...mapActions('API', ['getRates']),
    selectCurrency(currency) {
      this.getRates().then(response => {
        this.selectedCurrencyStr = currency.displayName
        this.selectedCurrency = currency.code
        this.setResult()
      })
    },
    setResult() {
      if(this.$refs.inputVal.value < 0 || this.$refs.inputVal.value > 10000) {
        alert('송금액이 바르지 않습니다.')
        return
      }
      const value = this.$refs.inputVal.value * parseFloat(this.selectedCurrencyRate.replaceAll(',', ''))
      const valueStr = this.numberWithCommas(value.toFixed(2))
      this.result = `수취금액은 ${valueStr}${this.selectedCurrency}입니다.`
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
</script>