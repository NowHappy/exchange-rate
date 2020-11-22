<script>
export default {
  data() {
    const CODES = {
      LOCALES : {
        ko_KR: {
          code: 'ko_KR',
          lang: 'KO',
          displayName: 'KOR',
          noticeLang: 'KOREAN'
        },
        ja_JP: {
          code: 'ja_JP',
          lang: 'JA',
          displayName: 'JPN',
          noticeLang: 'JAPANESE'
        },
        en_US: {
          code: 'en_US',
          lang: 'en',
          faqAlias: 'cloud_en',
          displayName: 'ENG',
          noticeLang: 'ENGLISH'
        },
        zh_CN: {
          code: 'zh_CN',
          lang: 'zh',
          faqAlias: 'cloud_cn',
          displayName: 'CHN',
          noticeLang: 'CHINESE'
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
