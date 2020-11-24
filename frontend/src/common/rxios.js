import axios from 'axios'
import { from } from 'rxjs'
import { tap } from 'rxjs/operators'

function fromPromise(promise) {
  return from(promise).pipe(
    tap(() => {}, e => console.error(e))
  )
}

export default {
  get(url, config) {
    return fromPromise(axios.get(url, config))
  },
  post(url, body, config) {
    return fromPromise(axios.post(url, body, config))
  },
  put(url, body, config) {
    return fromPromise(axios.put(url, body, config))
  },
  delete(url, config) {
    return fromPromise(axios["delete"](url, config))
  }
}
