import Vue from 'vue'
import { isEmpty, chain } from 'lodash-es'

const CommonUtil = {
    getLanguage(defaultUserLocale = 'ko') {
        const userLocale = Vue.$cookies.get('userLocale')
        if(!userLocale) {
            Vue.$cookies.set('userLocale', 'ko_KR')
        }
        if (userLocale === 'ko' || userLocale === 'ko_KR') {
            return 'ko'
        }
        if (userLocale === 'en' || userLocale === 'en_US') {
            return 'en'
        }
        if (userLocale === 'ja' || userLocale === 'ja_JP') {
            return 'ja'
        }
        if (userLocale === 'zh' || userLocale === 'zh_CN') {
            return 'zh'
        }

        return defaultUserLocale
    },
    isUserConsole() {
        return window.location.hostname.split('.')[1] !== 'cloud'
    },
    startWordUpperCase(value = '') {
        if (isEmpty(value) === true) {
            return '';
        }

        return chain(value)
            .toLower()
            .startCase()
            .value();
    },
    getTodayMinusOneMonth() {
        const today = new Date()
        today.setMonth(today.getMonth() - 1)
        return today.setHours(0,0,0,0)
    }
};

export default CommonUtil;
