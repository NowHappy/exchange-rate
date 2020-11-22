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
        <b-dropdown-item>한국</b-dropdown-item>
        <b-dropdown-item>일본</b-dropdown-item>
        <b-dropdown-item>필리핀</b-dropdown-item>
      </b-dropdown>
    </b-row>
    <b-row class="my-1">
      <span>환율: {{ selectedCurrency }}/USD</span>
    </b-row>
    <b-row class="my-1">
      <span>송금액: </span>
      <input type="number" min="0" max="10000"/> USD
    </b-row>
    <b-row class="my-1">
      <b-button>Submit</b-button>
    </b-row>

    <b-row class="my-1">
      <span>{{ result }}</span>
    </b-row>

  </b-container>
</template>

<script>
import { BDropdown, VBTooltip } from 'bootstrap-vue'

export default {
  components: {
    BDropdown
  },
  directives: {
    VBTooltip
  },
  data() {
    return {
      selectedCurrencyStr: '한국',
      selectedCurrency: 'KRW',
      result: ''
    }
  },
  methods: {
    getRates() {

    }
  }
}
</script>