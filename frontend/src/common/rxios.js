import axios from 'axios'
import { from } from 'rxjs'
import { tap } from 'rxjs/operators'
import { get } from 'lodash-es'
import router from './VueRouterConfig'

function fromPromise(promise, isToastApi) {
  return from(promise).pipe(
    tap(response => {
      if (isToastApi && response.data.header.isSuccessful === false) {
        // 회원 미인증 등의 이유로 IaaS-Console 서버에서 header에 redirectLogin이 true로 포함하여 반환된 경우
        // 회원 미인증 등의 이유로 UserConsoleProxy에서 5001(Not logged-in), 5002(Not allowed IP)로 반환된 경우
        const redirectLogin = get(response, 'headers.redirect-login');
        const resultCode = response.data.header.resultCode
        if ((resultCode === 401 && redirectLogin === 'true') || resultCode === 5001) {
          router.replace({path: '/error-login'})
        } else if (resultCode === 5002) {
          router.replace({path: '/error-ip-acl'})
        }
      }
    }),
    tap(() => {}, e => console.error(e))
  )
}

export default {
  get(url, config, isToastApi = true) {
    return fromPromise(axios.get(url, config), isToastApi)
  },
  post(url, body, config, isToastApi = true) {
    return fromPromise(axios.post(url, body, config), isToastApi)
  },
  put(url, body, config, isToastApi = true) {
    return fromPromise(axios.put(url, body, config), isToastApi)
  },
  delete(url, config, isToastApi = true) {
    return fromPromise(axios["delete"](url, config), isToastApi)
  }
}
