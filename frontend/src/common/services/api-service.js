import { map } from 'rxjs/operators'
import rxios from '@Common/rxios'

export const apiService = {
    getRates$() {
        return rxios
            .get(`/api/rates`)
            .pipe(map(response => response.data))
    }
}