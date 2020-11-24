<script>
export default {
  data() {
    const CODES = {
      CURRENCY : {
        KRW: {
          code: 'KRW',
          displayName: '한국(KRW)'
        },
        JPY: {
          code: 'JPY',
          displayName: '일본(JPY)'
        },
        PHP: {
          code: 'PHP',
          displayName: '필리핀(PHP)'
        }
      },
      ERROR_HTTP_STATUS: {
        BAD_PARAMETER: 80400,
        UNAUTHORIZED: 80401,
        FORBIDDEN: 80403,
        NOT_FOUND: 80404,
        INTERNAL_SERVER_ERROR: 80500
      }
    }
    
  return {
        CODES
      }
  },
  methods: {
    getDomain(key) {
      return DOMAIN[key]
    }
  }
}
</script>
